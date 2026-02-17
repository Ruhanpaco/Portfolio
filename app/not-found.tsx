"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Search, ShieldAlert, Cpu } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    const reveal = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-background relative selection:bg-foreground selection:text-background">
            {/* Structural Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-foreground/5" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-foreground/5" />
            <div className="absolute top-0 left-[8.333%] w-px h-full bg-foreground/5 hidden lg:block" />

            {/* Main Content Area */}
            <motion.div
                initial="initial"
                animate="animate"
                variants={stagger}
                className="lg:col-start-2 lg:col-span-10 flex flex-col justify-center px-8 py-24 min-h-screen gap-16"
            >
                {/* Diagnostic Header */}
                <motion.div variants={reveal} className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-foreground/5 pb-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <ShieldAlert className="w-5 h-5 opacity-40" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">System Status: 404</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif leading-tight">Address Not Located.</h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-[10px] font-mono opacity-30 leading-relaxed uppercase tracking-widest">
                            REF_ID: 0xFD2901<br />
                            LOC: ROOT/INDEX/PROX<br />
                            TYPE: ROUTE_MISSING
                        </p>
                    </div>
                </motion.div>

                {/* Hero 404 Typography */}
                <motion.div variants={reveal} className="relative py-20 flex items-center justify-center">
                    <h1 className="text-[25vw] lg:text-[20rem] font-serif leading-none tracking-tighter opacity-[0.03] select-none pointer-events-none absolute left-0">
                        404
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 w-full">
                        <div className="space-y-6 max-w-md">
                            <p className="text-lg opacity-60 leading-relaxed">
                                The requested route has been decommissioned or moved to a more secure location. Verify the path and re-establish the connection.
                            </p>
                            <Link
                                href="/"
                                className="group inline-flex items-center gap-6 py-2 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                                    <ArrowLeft className="h-4 w-4 group-hover:text-background transition-colors duration-500" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-[0.3em]">Return to Base</span>
                            </Link>
                        </div>

                        <div className="hidden md:flex flex-col justify-between items-end gap-12">
                            <div className="flex gap-4">
                                {[Search, Cpu].map((Icon, i) => (
                                    <div key={i} className="w-16 h-16 border border-foreground/5 flex items-center justify-center">
                                        <Icon className="w-6 h-6 opacity-20" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Technicality */}
                <motion.div variants={reveal} className="pt-8 flex flex-wrap gap-x-12 gap-y-4 text-[9px] font-bold uppercase tracking-[0.5em] opacity-20">
                    <span>Diagnostic Report 0.4.4.1</span>
                    <span className="hidden sm:inline">|</span>
                    <span>Unauthorized Route Request</span>
                    <span className="hidden sm:inline">|</span>
                    <span>Connection Interrupted</span>
                </motion.div>
            </motion.div>
        </main>
    );
}
