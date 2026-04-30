"use client";

import { motion } from "framer-motion";
import { Download, ArrowUpRight, Globe, Briefcase, MapPin, Award, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
    SiReact,
    SiTypescript,
    SiLaravel,
    SiAngular,
    SiSwift,
    SiExpo,
    SiAmazonwebservices,
    SiNodedotjs
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function ResumePage() {
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

    const experiences = [
        {
            title: "Contributing Member",
            company: "FLOSSK - Free Libre Open Source Software Kosova",
            location: "Pristina, Kosovo",
            period: "JAN 2026 — PRESENT",
            description: "Logistics Management, Open-Source Software. Contributing to the mission of promoting free and open-source software in Kosovo."
        },
        {
            title: "Founder & Managing Director",
            company: "EliteDev Agency",
            location: "Pristina, Kosovo",
            period: "JUN 2025 — PRESENT",
            description: "Running a software agency that builds web applications and digital products. I manage both the engineering work and client relationships."
        },
        {
            title: "Software Engineer (Internship)",
            company: "Pioneering People Ltd",
            location: "Remote",
            period: "MAY 2025 — JUL 2025",
            details: [
                "Developed a job-proposal platform for the hospitality sector using Laravel, PHP, MongoDB, AWS S3, and Redis.",
                "Designed and built core components including Create Job, Search Pioneer, and a redesigned dashboard.",
                "Optimized APIs and database queries to support concurrent users with minimal latency.",
                "Strengthened security by implementing SQL-injection protection and reviewing data-handling practices."
            ]
        },
        {
            title: "Full Stack Developer",
            company: "Freelance",
            location: "Remote",
            period: "JAN 2020 — JAN 2024",
            description: "Built full-stack web applications for various freelance clients using modern web technologies."
        }
    ];

    const community = [
        {
            role: "Volunteer",
            org: "SFK 2025",
            period: "OCT 2025 — PRESENT",
            description: "Contributing to sponsor relations and project representation at SFK (Software Freedom Kosova)."
        },
        {
            role: "Volunteer",
            org: "Kosova Makers League",
            period: "JUN 2025 — PRESENT",
            description: "Supervising national robotics events with 3500+ students. Ensuring fair play and rule adherence."
        },
        {
            role: "Volunteer",
            org: " Wikimedia Albanian & Kosova",
            period: "MAR 2026 – PRESENT"
        },
        {
            role: "Volunteer",
            org: "Cyber Security Challenge Kosova & Albania",
            period: "JAN 2026 – PRESENT"
        },
        {
            role: "Contributing Member",
            org: "FLOSSK",
            period: "OCT 2025 – PRESENT"
        },
        {
            role: "Volunteer",
            org: "Google Developer Group Prishtina",
            period: "MAY 2025 – PRESENT"
        },
        {
            role: "Volunteer",
            org: "Kosova Makers League",
            period: "JUL 2025 – JUL 2025"
        }
    ];

    const certifications = [
        {
            title: "ISO 27001:2022 Certification",
            issuer: "Mastermind",
            date: "2025",
            file: "/assets/certifications/Mastermind ISO 27001 2022 (1).pdf"
        },
        {
            title: "Essentials with Azure Fundamentals Certification",
            issuer: "Meta",
            date: "2025",
            file: "/assets/certifications/META.pdf"
        },
        {
            title: "Microsoft Azure SQL",
            issuer: "Microsoft",
            date: "2025",
            file: "/assets/certifications/Coursera Course M7CYXZOB4BLW.pdf"
        },
        {
            title: "Meta APIs",
            issuer: "Coursera",
            date: "2025",
            file: "/assets/certifications/Coursera Meta APIs.pdf"
        }
    ];

    return (
        <main className="px-6 md:px-8 pt-32 md:pt-40 pb-24 max-w-7xl mx-auto font-sans">
            <motion.div
                initial="initial"
                animate="animate"
                variants={stagger}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
            >
                {/* Header Section */}
                <div className="lg:col-span-8 space-y-8">
                    <motion.div variants={reveal} className="space-y-4">
                        <h1 className="text-5xl md:text-8xl tracking-tight">Experience</h1>
                        <p className="text-xl md:text-2xl text-foreground/60 italic">Where I've worked and what I've built.</p>
                    </motion.div>

                    <motion.div variants={reveal} className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-primary/90 transition-all active:scale-95 text-sm shadow-lg shadow-primary/20">
                            DOWNLOAD CV <Download className="h-4 w-4" />
                        </button>
                        <div className="flex items-center gap-2 px-4 py-3 rounded-lg border border-foreground/10 text-[10px] font-bold uppercase tracking-widest opacity-60">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                            Available for work
                        </div>
                    </motion.div>
                </div>

                <div className="hidden lg:block lg:col-span-4" />

                {/* Main Content */}
                <div className="lg:col-span-8 space-y-24">
                    {/* Work History */}
                    <section className="space-y-16">
                        <motion.h2 variants={reveal} className="text-xs font-bold uppercase tracking-[0.3em] text-primary flex items-center gap-4">
                            <span className="h-px w-8 bg-primary" />
                            Work History
                        </motion.h2>

                        <div className="space-y-16">
                            {experiences.map((exp, i) => (
                                <motion.div key={i} variants={reveal} className="group relative">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                        <div className="space-y-1">
                                            <h3 className="text-2xl md:text-3xl font-serif group-hover:text-primary transition-colors">{exp.title}</h3>
                                            <div className="flex items-center gap-2 text-sm font-medium opacity-60">
                                                <span>{exp.company}</span>
                                                <span className="opacity-30">•</span>
                                                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {exp.location}</span>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 rounded bg-foreground/[0.03] border border-foreground/5 text-[10px] font-bold tracking-widest opacity-40">
                                            {exp.period}
                                        </div>
                                    </div>
                                    {exp.description && (
                                        <p className="text-lg opacity-70 leading-relaxed font-serif max-w-2xl">{exp.description}</p>
                                    )}
                                    {exp.details && (
                                        <ul className="space-y-3 pt-2">
                                            {exp.details.map((detail, j) => (
                                                <li key={j} className="flex gap-4 text-base opacity-60 leading-relaxed font-serif">
                                                    <span className="text-primary mt-1.5 text-xs">0{j + 1}</span>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Community Impact */}
                    <section className="space-y-16 pt-16 border-t border-foreground/5">
                        <motion.h2 variants={reveal} className="text-xs font-bold uppercase tracking-[0.3em] text-primary flex items-center gap-4">
                            <span className="h-px w-8 bg-primary" />
                            Community & Impact
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {community.map((item, i) => (
                                <motion.div key={i} variants={reveal} className="space-y-4">
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-serif">{item.role}</h3>
                                        <p className="text-xs text-primary font-bold uppercase tracking-widest">{item.org}</p>
                                    </div>
                                    <p className="text-sm opacity-60 leading-relaxed font-serif">{item.description}</p>
                                    <div className="text-[10px] opacity-30 font-bold tracking-widest">{item.period}</div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-12">
                    {/* Skills */}
                    <motion.div variants={reveal} className="p-8 rounded-2xl border border-foreground/10 space-y-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest opacity-40">Technical Expertise</h3>
                        <div className="grid grid-cols-4 gap-6">
                            <RiNextjsFill className="h-6 w-6 opacity-40 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="Next.js" />
                            <SiReact className="h-6 w-6 opacity-40 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="React" />
                            <SiTypescript className="h-6 w-6 opacity-40 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="TypeScript" />
                            <SiNodedotjs className="h-6 w-6 opacity-40 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="Node.js" />
                            <SiLaravel className="h-6 w-6 opacity-40 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="Laravel" />
                            <SiAngular className="h-6 w-6 opacity-40 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="Angular" />
                            <SiAmazonwebservices className="h-6 w-6 opacity-40 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="AWS" />
                            <SiSwift className="h-6 w-6 opacity-40 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="Swift" />
                        </div>
                    </motion.div>

                    {/* Certifications - Premium Redesign */}
                    <motion.div variants={reveal} className="p-8 rounded-2xl border border-foreground/10 space-y-8 bg-foreground/[0.02]">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xs font-bold uppercase tracking-widest opacity-40">Certifications</h3>
                            <Award className="h-4 w-4 text-primary" />
                        </div>
                        <div className="space-y-6">
                            {certifications.map((cert, i) => (
                                <Link
                                    key={i}
                                    href={cert.file}
                                    target="_blank"
                                    className="group block space-y-1 hover:translate-x-1 transition-transform"
                                >
                                    <div className="flex items-start justify-between">
                                        <h4 className="text-sm font-bold group-hover:text-primary transition-colors leading-snug pr-4">
                                            {cert.title}
                                        </h4>
                                        <ExternalLink className="h-3 w-3 shrink-0 opacity-20 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest opacity-40">
                                        <span>{cert.issuer}</span>
                                        <span className="opacity-20">•</span>
                                        <span className="flex items-center gap-1"><Calendar className="h-2 w-2" /> {cert.date}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Metadata summary */}
                    <motion.div variants={reveal} className="p-8 space-y-6 opacity-50">
                        <div className="text-[10px] uppercase font-bold tracking-[0.2em] mb-4">Quick Facts</div>
                        <div className="space-y-4 font-mono text-xs">
                            <div className="flex justify-between">
                                <span>Years active</span>
                                <span>7+</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Base location</span>
                                <span>Pristina, KOS</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Core focus</span>
                                <span>Full-stack apps</span>
                            </div>
                        </div>
                    </motion.div>
                </aside>
            </motion.div>
        </main>
    );
}
