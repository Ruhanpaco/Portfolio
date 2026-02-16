"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Share2, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export default function PostClient({ post }: { post: any }) {
    if (!post) return (
        <div className="pt-48 text-center px-8">
            <h1 className="text-4xl font-serif">Post not found</h1>
            <Link href="/blog" className="text-primary hover:underline mt-4 inline-block">Back to talks</Link>
        </div>
    );

    const reveal = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    // --- Markdown Parsing with Stack Overflow Protection ---
    // Extract base64 images BEFORE parsing to prevent marked's regex from crashing on huge strings
    const images: string[] = [];
    let processedContent = post.content;

    // Pattern to match ![alt](data:image/...;base64,...)
    const imageRegex = /!\[(.*?)\]\((data:image\/[a-zA-Z]*;base64,[^\)]+)\)/g;

    processedContent = post.content.replace(imageRegex, (match: string, alt: string, dataUri: string) => {
        const index = images.length;
        images.push(dataUri);
        return `![${alt}](IMAGE_PLACEHOLDER_${index})`;
    });

    // Parse Markdown (now safe from massive strings)
    const htmlContent = marked.parse(processedContent) as string;

    // Sanitize the HTML content (placeholders are safe)
    const sanitizedContent = DOMPurify.sanitize(htmlContent, {
        ADD_DATA_URI_TAGS: ['img', 'a'],
        ADD_ATTR: ['src', 'href']
    });

    // Restore the images back into the SANITIZED HTML using a single regex replacement for speed
    const finalContent = sanitizedContent.replace(/IMAGE_PLACEHOLDER_(\d+)/g, (match, index) => {
        return images[parseInt(index)] || match;
    });

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
                <div className="prose prose-xl prose-invert max-w-none text-lg opacity-80 leading-relaxed font-sans space-y-8">
                    <div dangerouslySetInnerHTML={{ __html: finalContent }} />
                </div>
            </motion.div>
        </main>
    );
}
