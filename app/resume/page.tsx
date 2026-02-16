"use client";

import { motion } from "framer-motion";
import { Download, ArrowUpRight, Plus, Users, ShieldCheck, FileText } from "lucide-react";
import {
    SiReact,
    SiTypescript,
    SiLaravel,
    SiAngular,
    SiExpo,
    SiSwift
} from "react-icons/si";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export default function ResumePage() {
    const reveal = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    return (
        <main className="px-8 pt-48 pb-24 max-w-7xl mx-auto">
            <motion.div
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-12 gap-12"
            >
                {/* Header */}
                <div className="md:col-span-12 mb-12">
                    <motion.h1
                        variants={reveal}
                        className="text-7xl md:text-[10rem] font-serif leading-[0.85] tracking-tight"
                    >
                        Experience <br />
                        <span className="text-primary italic">& Scope</span>
                    </motion.h1>

                    <motion.div
                        variants={reveal}
                        className="mt-12 flex flex-wrap items-center gap-6"
                    >
                        <button className="bg-primary text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:scale-105 transition-transform active:scale-95">
                            DOWNLOAD PDF
                            <Download className="h-4 w-4" />
                        </button>
                        <span className="text-sm opacity-40 uppercase tracking-widest">Available for selective partnerships</span>
                    </motion.div>
                </div>

                {/* Professional Journey */}
                <div className="md:col-span-8 space-y-12">
                    <motion.div variants={reveal}>
                        <h2 className="text-sm font-medium uppercase tracking-[0.3em] opacity-40 mb-8 flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            Work History
                        </h2>

                        <div className="space-y-16">
                            <div className="group border-b border-foreground/5 pb-10">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-3xl font-serif">Contributing Member</h3>
                                        <p className="text-primary font-medium">FLOSSK - Free Libre Open Source Software Kosova</p>
                                    </div>
                                    <span className="text-sm opacity-40 font-medium">JAN 2026 — PRESENT (2 MOS)</span>
                                </div>
                                <p className="text-lg opacity-60 leading-relaxed max-w-2xl">
                                    Logistics Management, Open-Source Software. Contributing to the mission of promoting free and open-source software in Kosovo.
                                </p>
                            </div>

                            <div className="group border-b border-foreground/5 pb-10">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-3xl font-serif">Founder</h3>
                                        <p className="text-primary font-medium">Elitedev Agency</p>
                                    </div>
                                    <span className="text-sm opacity-40 font-medium">JUN 2025 — PRESENT (9 MOS)</span>
                                </div>
                                <p className="text-lg opacity-60 leading-relaxed max-w-2xl">
                                    Amazon S3, Business Ownership and more. Leading the vision and execution of the agency to deliver high-quality digital solutions for clients.
                                </p>
                            </div>

                            <div className="group border-b border-foreground/5 pb-10">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-3xl font-serif">Software Engineer (Internship)</h3>
                                        <p className="text-primary font-medium">Pioneering People Ltd</p>
                                    </div>
                                    <span className="text-sm opacity-40 font-medium">MAY 2025 — JUL 2025 (3 MOS)</span>
                                </div>
                                <div className="space-y-6 text-lg opacity-60 leading-relaxed max-w-2xl">
                                    <p>Contributed to the development of a job-proposal platform (destinations → pioneers) for the hospitality sector using Laravel, PHP, MongoDB, AWS S3, and Redis.</p>
                                    <p>Designed and built new pages and components, including Create Job, Search Pioneer, Search Destination, and a redesigned dashboard homepage.</p>
                                    <p>Refactored and tested legacy code to support new layouts and settings, improving clarity and maintainability. Collaborated with a colleague to review and release new features for live users; resolved bugs and validated functionality through hands-on testing.</p>
                                    <p>Strengthened security by adding SQL-injection protection and reviewing data-handling practices. Optimized APIs and database queries to support 10k+ concurrent users with minimal latency, increasing overall site speed and stability.</p>
                                    <p>Delivered a faster, more intuitive product by combining performance tuning with modern UI/UX improvements.</p>
                                </div>
                            </div>

                            <div className="group border-b border-foreground/5 pb-10">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-3xl font-serif">Salesperson</h3>
                                        <p className="opacity-60 font-medium">Tecnomarket by Mabetex</p>
                                    </div>
                                    <span className="text-sm opacity-40 font-medium">JUN 2024 — AUG 2024 (3 MOS)</span>
                                </div>
                                <p className="text-lg opacity-60 leading-relaxed max-w-2xl">
                                    Lebanë 10000, Kosovo. Focused on Customer Service and Sales, developing strong interpersonal and communication skills in a professional retail environment.
                                </p>
                            </div>

                            <div className="group border-b border-foreground/5 pb-10">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-3xl font-serif">Full Stack Developer</h3>
                                        <p className="opacity-60 font-medium">Freelance</p>
                                    </div>
                                    <span className="text-sm opacity-40 font-medium">JAN 2020 — JAN 2024 (4 YRS 1 MO)</span>
                                </div>
                                <p className="text-lg opacity-60 leading-relaxed max-w-2xl">
                                    Remote. Designing and developing end-to-end web applications for various clients, mastering a wide range of technologies and project scopes.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={reveal} className="pt-24 border-t border-foreground/5">
                        <h2 className="text-sm font-medium uppercase tracking-[0.3em] opacity-40 mb-12 flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            Community & Impact
                        </h2>

                        <div className="space-y-16">
                            <div className="group">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-serif">SFK / FLOSSK Team</h3>
                                        <p className="opacity-60 font-medium">FLOSSK - Free Libre Open Source Software Kosova</p>
                                    </div>
                                    <span className="text-sm opacity-40 font-medium">OCT 2025 — PRESENT (5 MOS)</span>
                                </div>
                                <p className="text-lg opacity-60 leading-relaxed max-w-2xl">
                                    As part of the SFK / FLOSSK team, I helped maintain a positive and welcoming environment for attendees and participants. I contributed to sponsor relations, ensuring they were well-supported and satisfied throughout the event. I also helped create and showcase projects, representing our work and values to visitors in an engaging and professional way.
                                </p>
                            </div>

                            <div className="group">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-serif">Arena Robobasket Supervisor</h3>
                                        <p className="opacity-60 font-medium">Kosova Makers League</p>
                                    </div>
                                    <span className="text-sm opacity-40 font-medium">JUN 2025 — PRESENT (9 MOS)</span>
                                </div>
                                <p className="text-lg opacity-60 leading-relaxed max-w-2xl">
                                    Volunteered at the Arena Robobasket "Super Finale" with Kosovo Makers, a national robotics event with over 3500+ students from schools across Kosovo. My role was to help monitor and ensure fair play by checking for any communication between students and their instructors during the challenges, supervising both students and their organization/school representatives, and ensuring everyone followed the rules. Successfully managed situations with uncooperative individuals and received a volunteering certification for my contribution.
                                </p>
                            </div>

                            <div className="group">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-serif">Community Contributor</h3>
                                        <p className="opacity-60 font-medium">Google Developer Groups Prishtina</p>
                                    </div>
                                    <span className="text-sm opacity-40 font-medium">MAY 2025 — PRESENT (10 MOS)</span>
                                </div>
                                <div className="space-y-4 text-lg opacity-60 leading-relaxed max-w-2xl">
                                    <p>
                                        Contributing to the tech community by organizing events including "Build with AI", helping with check-ins, and collecting feedback from attendees. Helping to foster a vibrant tech ecosystem in Kosovo through community engagement and technical mentorship.
                                    </p>
                                    <p>
                                        Volunteered in key events including:
                                    </p>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li><span className="text-foreground">Build with AI</span></li>
                                        <li><span className="text-foreground">Devfest</span> (500+ attendees)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills & Stats Sidebar */}
                <aside className="md:col-span-4 space-y-8">
                    <motion.div variants={reveal} className="bento-card p-8 space-y-8">
                        <h3 className="text-xs font-medium uppercase tracking-widest opacity-40">Core Expertise</h3>
                        <div className="grid grid-cols-4 gap-6">
                            <SiReact className="h-6 w-6 opacity-60 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="React" />
                            <RiNextjsFill className="h-6 w-6 opacity-60 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="Next.js" />
                            <SiTypescript className="h-6 w-6 opacity-60 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="TypeScript" />
                            <FaNodeJs className="h-6 w-6 opacity-60 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="Node.js" />
                            <SiLaravel className="h-6 w-6 opacity-60 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="Laravel" />
                            <SiAngular className="h-6 w-6 opacity-60 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="AngularJS" />
                            <FaAws className="h-6 w-6 opacity-60 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="AWS" />
                            <SiSwift className="h-6 w-6 opacity-60 hover:opacity-100 hover:text-primary transition-all cursor-pointer" title="Swift" />
                        </div>
                    </motion.div>

                    <motion.div variants={reveal} className="bento-card p-8 bg-primary/5 border-primary/10">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Users className="h-5 w-5" />
                            <h3 className="text-xs font-medium uppercase tracking-widest">Leadership</h3>
                        </div>
                        <p className="text-sm opacity-60 leading-relaxed">
                            Discipline shaped by competitive volleyball. Reinforcing accountability and communication within technical teams.
                        </p>
                    </motion.div>

                    <motion.div variants={reveal} className="bento-card p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="h-5 w-5 text-foreground/40" />
                            <h3 className="text-xs font-medium uppercase tracking-widest opacity-40">Certifications</h3>
                        </div>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="/assets/certifications/Mastermind ISO 27001 2022 (1).pdf"
                                    target="_blank"
                                    className="group flex items-center justify-between hover:text-primary transition-colors"
                                >
                                    <span className="text-sm font-medium">ISO 27001:2022 Implementation</span>
                                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/assets/certifications/META.pdf"
                                    target="_blank"
                                    className="group flex items-center justify-between hover:text-primary transition-colors"
                                >
                                    <span className="text-sm font-medium">Meta Professional Certificate</span>
                                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/assets/certifications/Coursera Course M7CYXZOB4BLW.pdf"
                                    target="_blank"
                                    className="group flex items-center justify-between hover:text-primary transition-colors"
                                >
                                    <span className="text-sm font-medium">Coursera: Technical Domain</span>
                                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/assets/certifications/Coursera Course PDF.pdf"
                                    target="_blank"
                                    className="group flex items-center justify-between hover:text-primary transition-colors"
                                >
                                    <span className="text-sm font-medium">Advanced Engineering Specialization</span>
                                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div variants={reveal} className="bento-card p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="h-5 w-5 text-foreground/40" />
                            <h3 className="text-xs font-medium uppercase tracking-widest opacity-40">Security First</h3>
                        </div>
                        <p className="text-sm opacity-60 leading-relaxed">
                            Expertise in building production-ready systems with a strong focus on structural integrity and data safety.
                        </p>
                    </motion.div>
                </aside>
            </motion.div>
        </main>
    );
}
