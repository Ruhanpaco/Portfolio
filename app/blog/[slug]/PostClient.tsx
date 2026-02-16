"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Share2, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

import { useState, useEffect } from "react";

export default function PostClient({ post }: { post: any }) {
    const [finalContent, setFinalContent] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const reveal = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    useEffect(() => {
        async function fetchContent() {
            if (!post?.slug) return;

            try {
                setIsLoading(true);
                const response = await fetch(`/api/blog/${post.slug}`);
                if (!response.ok) throw new Error("Failed to load content");

                const data = await response.json();
                const content = data.content;

                if (!content) {
                    setIsLoading(false);
                    return;
                }

                // --- Resilient Dedent Logic ---
                // We strip the minimum common indentation from all non-empty lines.
                // This ensures that even if the SQL content is indented by the user,
                // it won't be treated as a code block.
                // Enhance: split on any newline character to handle mixed line endings
                const lines = content.split(/\r?\n/);
                const nonEmptyLines = lines.filter((l: string) => l.trim().length > 0);

                let minIndent = 0;
                if (nonEmptyLines.length > 0) {
                    minIndent = Math.min(...nonEmptyLines.map((l: string) => {
                        const match = l.match(/^(\s*)/);
                        return match ? match[0].length : 0;
                    }));
                }

                const cleanedContent = lines.map((line: string) => {
                    if (line.trim().length === 0) return "";
                    return line.length >= minIndent ? line.substring(minIndent) : line.trim();
                }).join('\n').trim();

                // --- Foolproof Blob Extraction for Stack Overflow Protection ---
                const blobs: string[] = [];
                let processedContent = "";
                let remaining = cleanedContent;

                while (remaining.length > 0) {
                    const dataIndex = remaining.indexOf("data:");
                    if (dataIndex === -1) {
                        processedContent += remaining;
                        break;
                    }

                    processedContent += remaining.substring(0, dataIndex);

                    let endPos = dataIndex;
                    while (endPos < remaining.length && !/[\s"'\)]/.test(remaining[endPos])) {
                        endPos++;
                    }

                    const blob = remaining.substring(dataIndex, endPos);

                    if (blob.length > 200) {
                        // Use a valid image placeholder URI so marked renders an <img> tag
                        // and DOMPurify keeps the src attribute.
                        const placeholder = `data:image/placeholder;base64,BLOB_${blobs.length}`;
                        blobs.push(blob);
                        processedContent += placeholder;
                    } else {
                        processedContent += blob;
                    }

                    remaining = remaining.substring(endPos);
                }

                // Configure marked for better reliability
                marked.use({
                    gfm: true,
                    breaks: false,
                });

                // Parse Markdown (already safe/stripped)
                const htmlContent = marked.parse(processedContent) as string;

                const sanitizedContent = DOMPurify.sanitize(htmlContent, {
                    ADD_DATA_URI_TAGS: ['img', 'a'],
                    ADD_ATTR: ['src', 'href']
                });

                // Restore the blobs back into the SANITIZED HTML
                let restored = sanitizedContent;
                if (blobs.length > 0) {
                    for (let i = 0; i < blobs.length; i++) {
                        const placeholder = `data:image/placeholder;base64,BLOB_${i}`;
                        restored = restored.split(placeholder).join(blobs[i]);
                    }
                }

                setFinalContent(restored);
                setIsLoading(false);
            } catch (err) {
                console.error("Content fetch error:", err);
                setError("Could not load post content. Please try again later.");
                setIsLoading(false);
            }
        }

        fetchContent();
    }, [post?.slug]);

    if (!post) return (
        <main className="px-8 pt-48 pb-24 max-w-4xl mx-auto">
            <motion.div
                initial="initial"
                animate="animate"
                variants={reveal}
            >
                <div className="pt-48 text-center px-8">
                    <h1 className="text-4xl font-serif">Post not found</h1>
                    <Link href="/blog" className="text-primary hover:underline mt-4 inline-block">Back to talks</Link>
                </div>
            </motion.div>
        </main>
    );

    return (
        <main className="px-8 pt-48 pb-24 max-w-4xl mx-auto">
            <motion.div
                initial="initial"
                animate="animate"
                variants={reveal}
            >
                <Link href="/blog" className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-12">
                    <ArrowLeft className="h-4 w-4" />
                    Back to all talks
                </Link>

                <div className="space-y-6 mb-16">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-widest">{post.tag}</span>
                        <div className="flex items-center gap-2 text-xs opacity-40 font-medium uppercase tracking-widest">
                            <Clock className="h-4 w-4" />
                            {post.reading_time_minutes} MIN READ
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                        {post.title}
                    </h1>

                    {post.featured_image && (
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mt-8 shadow-2xl">
                            <img
                                src={post.featured_image}
                                alt={post.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    )}

                    <div className="flex items-center gap-8 py-8 border-y border-foreground/5">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-foreground/10" />
                            <div>
                                <p className="text-sm font-bold">{post.author_name}</p>
                                <p className="text-xs opacity-40 uppercase tracking-widest">
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}
                                </p>
                            </div>
                        </div>
                        <div className="ml-auto flex gap-4">
                            <Share2 className="h-5 w-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
                            <Linkedin className="h-5 w-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
                            <Twitter className="h-5 w-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-xl prose-invert max-w-none text-lg opacity-80 leading-relaxed font-sans space-y-8 min-h-[400px] prose-img:max-h-[600px] prose-img:w-auto prose-img:mx-auto prose-img:rounded-xl prose-img:shadow-2xl">
                    {isLoading ? (
                        <div className="space-y-4 animate-pulse">
                            <div className="h-4 bg-foreground/10 rounded w-full"></div>
                            <div className="h-4 bg-foreground/10 rounded w-5/6"></div>
                            <div className="h-4 bg-foreground/10 rounded w-full"></div>
                            <div className="h-64 bg-foreground/5 rounded w-full mt-8"></div>
                        </div>
                    ) : error ? (
                        <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                            <p className="text-primary font-medium">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-4 text-sm underline opacity-60 hover:opacity-100"
                            >
                                Try reloading the page
                            </button>
                        </div>
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: finalContent }} />
                    )}
                </div>
            </motion.div>
        </main>
    );
}
