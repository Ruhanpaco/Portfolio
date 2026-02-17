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

    const posts = [
        {
            id: "elitedev",
            title: "EliteDev Agency",
            type: "Digital Agency & SaaS",
            image: "/assets/img/EliteDev Agency _ Premium Software Solutions _ Digital Services in Kosovo.jpeg",
            link: "https://elitedev-agency.com",
        }
    ];

    return (
        <main className="px-6 md:px-8 pt-32 md:pt-48 pb-24 max-w-7xl mx-auto">
            <motion.div
                initial="initial"
                animate="animate"
                variants={stagger}
            >
                <motion.h1
                    variants={reveal}
                    className="text-6xl sm:text-7xl md:text-[10rem] font-serif leading-[0.85] tracking-tight mb-16 md:mb-24"
                >
                    Selected <br />
                    <span className="text-primary italic">Works</span>
                </motion.h1>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {posts.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={reveal}
                            className="group cursor-pointer"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {/* Project Image Box */}
                                <div className="aspect-[16/10] bg-foreground/5 dark:bg-white/5 rounded-3xl overflow-hidden relative mb-6 border border-foreground/5 transition-transform duration-700 group-hover:scale-[1.02]">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-10 font-serif text-8xl italic">
                                            {project.title.charAt(0)}
                                        </div>
                                    )}
                                    <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="h-6 w-6" />
                                    </div>
                                </div>

                                {/* Info Box */}
                                <div className="flex justify-between items-end px-2">
                                    <div>
                                        <span className="text-xs font-medium uppercase tracking-widest opacity-40 mb-2 block">
                                            {project.type}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Case <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
