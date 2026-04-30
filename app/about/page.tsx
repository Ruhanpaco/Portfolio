"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Briefcase, Globe, Award, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    const reveal = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    return (
        <main className="px-6 md:px-8 pt-32 md:pt-40 pb-24 max-w-5xl mx-auto font-sans text-foreground">
            <motion.div
                initial="initial"
                animate="animate"
                variants={stagger}
                className="space-y-20"
            >
                {/* Header Section */}
                <header className="space-y-10">
                    <motion.div variants={reveal} className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Ruhan Pacolli</h1>
                        <p className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
                            Software Engineer & Founder
                        </p>
                    </motion.div>

                    <motion.div variants={reveal} className="flex flex-wrap gap-6 pt-6 border-t border-foreground/10">
                        <div className="flex items-center gap-2 text-sm font-medium opacity-70">
                            <MapPin className="h-4 w-4 text-primary" /> Pristina, Kosovo
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium opacity-70">
                            <Briefcase className="h-4 w-4 text-primary" /> EliteDev Agency
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium opacity-70">
                            <Globe className="h-4 w-4 text-primary" /> ruhanpacolli.online
                        </div>
                    </motion.div>

                    <motion.div variants={reveal} className="max-w-3xl">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/80">
                            I build high-performance web applications and lead the engineering team at EliteDev Agency.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    <div className="md:col-span-8 space-y-16">
                        
                        {/* The Story */}
                        <motion.section variants={reveal} className="space-y-6">
                            <h2 className="text-2xl font-semibold tracking-tight border-b border-foreground/10 pb-4">My Story</h2>
                            <div className="space-y-6 text-lg opacity-70 leading-relaxed">
                                <p>
                                    I started out as a freelance developer, building custom applications for various clients. Over the years, I realized that many businesses struggle with the same core technical issues: slow performance, poor architecture, and lack of maintainability.
                                </p>
                                <p>
                                    This led me to found EliteDev Agency. Instead of just delivering code, we partner with clients to build digital products from the ground up, ensuring that performance and security are baked in from day one. I manage both the engineering work and the client relationships, making sure everything we build actually solves the problem it was meant to.
                                </p>
                            </div>
                        </motion.section>

                        {/* Agency */}
                        <motion.section variants={reveal} className="space-y-6">
                            <h2 className="text-2xl font-semibold tracking-tight border-b border-foreground/10 pb-4">EliteDev Agency</h2>
                            <div className="space-y-6 text-lg opacity-70 leading-relaxed">
                                <p>
                                    At EliteDev Agency, we help companies design, build, and launch complex web and mobile platforms. We focus heavily on modern stacks like React, Next.js, and Node.js.
                                </p>
                                <ul className="space-y-3 pt-2">
                                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Full-Stack Web Development</li>
                                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> API & Architecture Design</li>
                                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> UI/UX Implementation</li>
                                </ul>
                                <div className="pt-4">
                                    <Link href="/work" className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity group">
                                        View our past work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.section>
                    </div>

                    <div className="md:col-span-4 space-y-12">
                        {/* Quick Stats */}
                        <motion.section variants={reveal} className="space-y-6 p-6 rounded-2xl bg-foreground/5 border border-foreground/5">
                            <h2 className="text-sm font-semibold tracking-wide uppercase opacity-50">Quick Facts</h2>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-3xl font-semibold tracking-tight text-primary">7+</div>
                                    <div className="text-xs font-medium opacity-60 mt-1">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-semibold tracking-tight text-primary">Pristina</div>
                                    <div className="text-xs font-medium opacity-60 mt-1">Base Location</div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Community */}
                        <motion.section variants={reveal} className="space-y-6">
                            <h2 className="text-sm font-semibold tracking-wide uppercase opacity-50">Community</h2>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 font-semibold">
                                        <Users className="h-4 w-4 text-primary" /> GDG Prishtina
                                    </div>
                                    <p className="text-sm opacity-60 leading-relaxed">
                                        Volunteer. Helping organize tech events and developer meetups.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 font-semibold">
                                        <Award className="h-4 w-4 text-primary" /> FLOSSK
                                    </div>
                                    <p className="text-sm opacity-60 leading-relaxed">
                                        Contributing member. Promoting free and open-source software in Kosovo.
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </div>

                {/* Closing */}
                <motion.footer variants={reveal} className="pt-16 mt-16 border-t border-foreground/10 text-center space-y-8">
                    <h2 className="text-2xl md:text-4xl font-semibold max-w-2xl mx-auto leading-tight">
                        Looking for a technical partner?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/work" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all active:scale-95">
                            View My Work
                        </Link>
                        <Link href="/#contact" className="px-6 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-foreground/5 transition-all">
                            Get In Touch
                        </Link>
                    </div>
                </motion.footer>
            </motion.div>
        </main>
    );
}
