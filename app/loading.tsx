"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 150);
        return () => clearInterval(interval);
    }, []);

    const technicalIdentities = [
        "INIT_KERNEL_SUCCESS",
        "NODE_ADDR_0xFD2901",
        "TCP_HANDSHAKE_ESTABLISHED",
        "SSL_CERT_VERIFIED",
        "ASSET_STREAM_ACTIVE",
        "RENDER_ENGINE_READY",
        "USER_AUTH_KEYLESS",
        "GEO_LOC_KOSOVA",
        "SECURE_ACTION_READY"
    ];

    return (
        <div className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* Background Data Stream */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-around px-12 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -1000 }}
                        animate={{ y: 1000 }}
                        transition={{
                            duration: 15 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex flex-col gap-12"
                    >
                        {technicalIdentities.map((id, j) => (
                            <span key={j} className="text-[10px] font-mono whitespace-nowrap tracking-widest uppercase">
                                {id}_{Math.random().toString(16).slice(2, 6)}
                            </span>
                        ))}
                        {technicalIdentities.map((id, j) => (
                            <span key={j + 10} className="text-[10px] font-mono whitespace-nowrap tracking-widest uppercase">
                                {id}_{Math.random().toString(16).slice(2, 6)}
                            </span>
                        ))}
                    </motion.div>
                ))}
            </div>

            <div className="max-w-md w-full space-y-12 relative z-10">
                {/* Typographic Reveal */}
                <div className="space-y-4 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        className="text-[10px] font-bold uppercase tracking-[0.4em]"
                    >
                        System Initialization
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl font-serif"
                    >
                        Ruhan Pacolli
                    </motion.h2>
                </div>

                {/* Progress System */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Booting Sequence</span>
                        <span className="text-xl font-serif italic opacity-60">{Math.min(percent, 100)}%</span>
                    </div>

                    <div className="h-px w-full bg-foreground/5 relative overflow-hidden">
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${percent}%` }}
                            transition={{ ease: "easeOut", duration: 0.3 }}
                            className="absolute inset-y-0 left-0 bg-foreground h-full"
                        />
                    </div>

                    <div className="flex justify-between text-[8px] font-mono opacity-20 uppercase tracking-widest">
                        <span>Core.01::Ready</span>
                        <span>Buffer::Allocated</span>
                        <span>IO::Established</span>
                    </div>
                </div>
            </div>

            {/* Noise background overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grain-y.vercel.app/noise.svg')] brightness-100 contrast-150" />
        </div>
    );
}
