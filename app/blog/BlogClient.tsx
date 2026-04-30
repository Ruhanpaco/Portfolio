"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";

export default function BlogClient({ blogs }: { blogs: any[] }) {
    const reveal = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
        >
            <motion.div variants={reveal} className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
                <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.85] tracking-tight">
                    Latest <br />
                    <span className="text-primary italic">Talks</span>
                </h1>
                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest opacity-40 mb-6 text-foreground/40">
                    <Search className="h-4 w-4" />
                    SEARCH ARTICLES
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <motion.div
                            key={blog.slug}
                            variants={reveal}
                            className="group border-b border-foreground/5 pb-12"
                        >
                            <Link href={`/blog/${blog.slug}`} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                <div className="flex-1 max-w-3xl">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-widest">{blog.tag}</span>
                                        <span className="text-xs opacity-40 font-medium uppercase tracking-widest">
                                            {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase()}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-serif mb-4 group-hover:text-primary transition-colors leading-tight">
                                        {blog.title}
                                    </h2>
                                    <p className="text-lg opacity-60 leading-relaxed max-w-2xl">
                                        {blog.excerpt}
                                    </p>
                                </div>
                                <div className="h-16 w-16 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                    <ArrowUpRight className="h-6 w-6 group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                        </motion.div>
                    ))
                ) : (
                    <motion.div variants={reveal} className="py-24 text-center border-t border-foreground/5">
                        <p className="text-lg opacity-40">No talks published yet. Stay tuned.</p>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
