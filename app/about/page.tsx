"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Users, Globe, Briefcase, Award, MapPin } from "lucide-react";
import Image from "next/image";
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
        <main className="px-6 md:px-8 pt-32 md:pt-48 pb-24 max-w-6xl mx-auto font-sans text-foreground">
            <motion.div
                initial="initial"
                animate="animate"
                variants={stagger}
                className="space-y-24"
            >
                {/* Header Section */}
                <header className="space-y-12">
                    <motion.div variants={reveal} className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-serif tracking-tight">Ruhan Pacolli</h1>
                        <p className="text-xl md:text-2xl text-primary font-medium flex items-center gap-3">
                            Software Engineer | Founder & Managing Director
                        </p>
                    </motion.div>

                    <motion.div variants={reveal} className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-foreground/10">
                        <div className="flex items-center gap-3 text-sm opacity-60">
                            <MapPin className="h-4 w-4 text-primary" /> Pristina, Kosovo
                        </div>
                        <div className="flex items-center gap-3 text-sm opacity-60">
                            <Briefcase className="h-4 w-4 text-primary" /> EliteDev Agency
                        </div>
                        <div className="flex items-center gap-3 text-sm opacity-60">
                            <Globe className="h-4 w-4 text-primary" /> ruhanpacolli.online
                        </div>
                    </motion.div>

                    <motion.div variants={reveal} className="max-w-4xl">
                        <p className="text-xl md:text-2xl font-serif leading-relaxed text-foreground/80">
                            I am a software engineer and founder building scalable digital products that drive measurable business outcomes. Based in Pristina, I lead EliteDev Agency where we translate complex business needs into robust, high-performance systems.
                        </p>
                    </motion.div>
                </header>

                {/* Professional Identity */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <motion.div variants={reveal} className="md:col-span-4 space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">01 / Profile</h2>
                        <h3 className="text-2xl font-serif">Professional Identity</h3>
                    </motion.div>
                    <motion.div variants={reveal} className="md:col-span-8 space-y-6 text-lg opacity-70 leading-relaxed font-serif">
                        <p>
                            Focusing on architecture, maintainability, and long-term technical strategy. My work spans architecture design, product development, and technical leadership, with a focus on delivering software that solves technical debt issues before they arise.
                        </p>
                        <p>
                            I specialize in translating business needs into digital systems. My technical philosophy emphasizes the structure and security of systems over surface-level industry trends.
                        </p>
                    </motion.div>
                </section>

                {/* Business Leadership */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <motion.div variants={reveal} className="md:col-span-4 space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">02 / Leadership</h2>
                        <h3 className="text-2xl font-serif">EliteDev Agency</h3>
                    </motion.div>
                    <motion.div variants={reveal} className="md:col-span-8">
                        <div className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] space-y-6">
                            <p className="text-lg opacity-70 leading-relaxed font-serif">
                                EliteDev Agency is a Kosovo-registered digital firm offering software solutions, web and mobile application development, and technical consulting. We function as a technical partner for modern companies building complex digital platforms.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <ul className="space-y-3 text-sm opacity-60">
                                    <li className="flex items-center gap-2">• Web & Mobile Development</li>
                                    <li className="flex items-center gap-2">• UI/UX Design & Strategy</li>
                                    <li className="flex items-center gap-2">• E-commerce Solutions</li>
                                </ul>
                                <ul className="space-y-3 text-sm opacity-60">
                                    <li className="flex items-center gap-2">• Technical Consulting</li>
                                    <li className="flex items-center gap-2">• Quality Assurance</li>
                                    <li className="flex items-center gap-2">• Project Lifecycle Management</li>
                                </ul>
                            </div>
                            <div className="pt-6">
                                <Link href="/work" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs group">
                                    Project Portfolio <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Community & Involvement */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <motion.div variants={reveal} className="md:col-span-4 space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">03 / Community</h2>
                        <h3 className="text-2xl font-serif">Industry Engagement</h3>
                    </motion.div>
                    <motion.div variants={reveal} className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-4 p-6 rounded-xl border border-foreground/5">
                            <Users className="h-6 w-6 text-primary" />
                            <h4 className="text-lg font-serif">GDG Prishtina</h4>
                            <p className="text-sm opacity-60 leading-relaxed">
                                Community volunteer with Google Developer Group Prishtina. Contributing time and expertise to support local tech initiatives and workshops.
                            </p>
                        </div>
                        <div className="space-y-4 p-6 rounded-xl border border-foreground/5">
                            <Award className="h-6 w-6 text-primary" />
                            <h4 className="text-lg font-serif">FLOSSK</h4>
                            <p className="text-sm opacity-60 leading-relaxed">
                                Member of Free Libre Open Source Software Kosova (FLOSSK), contributing to open and participatory knowledge, education in information technologies through open courseware, and open standards, culture and open society using free communication.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Attributes & Discipline */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <motion.div variants={reveal} className="md:col-span-4 space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">04 / Background</h2>
                        <h3 className="text-2xl font-serif">Core Attributes</h3>
                    </motion.div>
                    <motion.div variants={reveal} className="md:col-span-8">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-foreground/10">
                            <div>
                                <div className="text-3xl font-serif text-primary">7+</div>
                                <div className="text-[10px] uppercase font-bold opacity-40">Years Exp.</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif text-primary">Pristina</div>
                                <div className="text-[10px] uppercase font-bold opacity-40">Base</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif text-primary">GDG & FLOSSK</div>
                                <div className="text-[10px] uppercase font-bold opacity-40">Organization</div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Closing */}
                <motion.footer variants={reveal} className="pt-24 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif max-w-2xl mx-auto leading-tight">
                        Engineering digital products for measurable business results.
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/work" className="px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all active:scale-95">
                            VIEW CASE STUDIES
                        </Link>
                        <Link href="/#contact" className="px-8 py-4 border border-foreground/20 rounded-lg font-bold hover:bg-foreground/5 transition-all">
                            GET IN TOUCH
                        </Link>
                    </div>
                </motion.footer>
            </motion.div>
        </main>
    );
}
