"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WorkPage() {
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
        <main className="px-8 pt-48 pb-24 max-w-7xl mx-auto">
            <motion.div
                initial="initial"
                animate="animate"
                variants={stagger}
            >
                <motion.h1
                    variants={reveal}
                    className="text-7xl md:text-[10rem] font-serif leading-[0.85] tracking-tight mb-24"
                >
                    Selected <br />
                    <span className="text-primary italic">Works</span>
                </motion.h1>

                {/* Box Infrastructure Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[1, 2, 3, 4].map((item) => (
                        <motion.div
                            key={item}
                            variants={reveal}
                            className="group cursor-pointer"
                        >
                            {/* Project Image Box Placeholder */}
                            <div className="aspect-[16/10] bg-foreground/5 dark:bg-white/5 rounded-3xl overflow-hidden relative mb-6 border border-foreground/5 transition-transform duration-700 group-hover:scale-[1.02]">
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 font-serif text-8xl italic">
                                    {item}
                                </div>
                                <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="h-6 w-6" />
                                </div>
                            </div>

                            {/* Info Boxes Placeholder */}
                            <div className="flex justify-between items-end px-2">
                                <div>
                                    <div className="h-2 w-24 bg-foreground/10 rounded-full mb-3" />
                                    <div className="h-8 w-64 bg-foreground/5 rounded-lg" />
                                </div>
                                <div className="h-4 w-32 bg-foreground/10 rounded-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
