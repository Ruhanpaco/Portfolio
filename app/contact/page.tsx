"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, Zap, Globe, MapPin, Building2, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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

    const personalLinks = [
        {
            icon: <Mail className="h-4 w-4" />,
            label: "Personal Email",
            value: "hi@ruhanpacolli.online",
            href: "mailto:hi@ruhanpacolli.online",
        },
        {
            icon: <Linkedin className="h-4 w-4" />,
            label: "LinkedIn Professional",
            value: "linkedin.com/in/ruhan-pacolli",
            href: "https://linkedin.com/in/ruhan-pacolli",
        },
    ];

    const agencyLinks = [
        {
            icon: <Globe className="h-4 w-4" />,
            label: "Agency Portal",
            value: "elitedev-agency.com",
            href: "https://elitedev-agency.com",
        },
        {
            icon: <Mail className="h-4 w-4" />,
            label: "Agency Inquiries",
            value: "info@elitedev-agency.com",
            href: "mailto:info@elitedev-agency.com",
        },
    ];

    return (
        <main className="px-6 md:px-8 pt-32 md:pt-48 pb-24 max-w-6xl mx-auto font-sans text-foreground">
            <motion.div
                initial="initial"
                animate="animate"
                variants={stagger}
                className="space-y-32"
            >
                {/* Header Section */}
                <header className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                    <div className="md:col-span-8 space-y-8">
                        <motion.div variants={reveal} className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                                <Zap className="h-3 w-3" />
                                Available for Partnerships
                            </div>
                            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.9]">
                                Establish <br />
                                <span className="text-primary italic">Connection.</span>
                            </h1>
                        </motion.div>
                        <motion.p variants={reveal} className="text-xl md:text-2xl text-foreground/60 font-serif italic max-w-2xl leading-relaxed">
                            Structured channels for technical strategy, agency partnerships, and professional inquiries.
                        </motion.p>
                    </div>
                    <motion.div variants={reveal} className="md:col-span-4 space-y-6 pt-8 border-t md:border-t-0 md:border-l border-foreground/10 md:pl-12">
                        <div className="flex items-center gap-3 text-sm font-medium opacity-60">
                            <MapPin className="h-4 w-4 text-primary" /> Pristina, Kosovo (GMT+1)
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="opacity-60 uppercase tracking-widest text-[10px] font-bold">Status: Open for selective projects</span>
                        </div>
                    </motion.div>
                </header>

                {/* Contact Channels - Asymmetric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

                    {/* Personal Column */}
                    <div className="md:col-span-5 space-y-12">
                        <motion.div variants={reveal} className="space-y-4">
                            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">01 / Personal</h2>
                            <h3 className="text-2xl font-serif">Direct Channels</h3>
                        </motion.div>

                        <div className="space-y-6">
                            {personalLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={reveal}
                                    className="block p-6 rounded-2xl border border-foreground/10 hover:border-primary/30 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-8 w-8 rounded-lg bg-foreground/[0.03] flex items-center justify-center text-primary/60 group-hover:text-primary group-hover:bg-primary/5 transition-colors">
                                            {link.icon}
                                        </div>
                                        <ExternalLink className="h-3 w-3 opacity-20 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="text-[10px] uppercase font-bold tracking-widest opacity-40 mb-1">{link.label}</div>
                                    <div className="text-lg font-serif">{link.value}</div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Agency Column */}
                    <div className="md:col-span-7 space-y-12">
                        <motion.div variants={reveal} className="space-y-4">
                            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">02 / Enterprise</h2>
                            <h3 className="text-2xl font-serif">EliteDev Agency</h3>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {agencyLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={reveal}
                                    className="block p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-12">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            {link.icon}
                                        </div>
                                        <ArrowUpRight className="h-5 w-5 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-[10px] uppercase font-bold tracking-widest opacity-40">{link.label}</div>
                                        <div className="text-xl font-serif text-balance">{link.value}</div>
                                    </div>
                                </motion.a>
                            ))}

                            {/* Additional Status/Trust Box */}
                            <motion.div variants={reveal} className="sm:col-span-2 p-8 rounded-3xl border border-primary/10 bg-primary/[0.02] flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-1">
                                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                                        <Building2 className="h-3 w-3" /> Registered Firm
                                    </div>
                                    <p className="text-sm opacity-60 font-serif leading-relaxed">Strategic technical partnership for growing startups and established brands.</p>
                                </div>
                                <Link href="/work" className="text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full border border-primary/20 hover:bg-primary/5 transition-colors whitespace-nowrap text-center">
                                    Browse Solutions
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Final Professional Tone Section */}
                <motion.section variants={reveal} className="py-24 border-t border-foreground/10 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif max-w-3xl mx-auto leading-tight italic opacity-80">
                        "Engineering digital foundations for the future, one partnership at a time."
                    </h2>
                    <div className="flex justify-center items-center gap-4 opacity-30 text-[10px] font-bold uppercase tracking-[0.4em]">
                        <span className="h-px w-12 bg-foreground" />
                        Pristina • Global
                        <span className="h-px w-12 bg-foreground" />
                    </div>
                </motion.section>
            </motion.div>
        </main>
    );
}
