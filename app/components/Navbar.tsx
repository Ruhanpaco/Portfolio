"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    const navLinks = [
        { href: "/work", label: "Work" },
        { href: "/about", label: "About" },
        { href: "/blog", label: "Talks" },
        { href: "/resume", label: "Resume" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-6 left-0 right-0 z-50 px-6">
            <nav className="max-w-fit mx-auto rounded-full border border-foreground/10 bg-background/50 backdrop-blur-xl shadow-2xl shadow-black/5 relative">
                <div className="px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 md:gap-8">
                    <Link href="/" className="text-sm font-serif uppercase tracking-tighter mr-2 md:mr-4 border-r border-foreground/10 pr-4">RP.</Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-widest">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${isActive(link.href) ? "text-primary opacity-100" : "opacity-40 hover:opacity-100"} transition-opacity underline-offset-4 hover:underline`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground/60 hover:text-primary transition-colors"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>

                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse ml-0 md:ml-2" />
                </div>

                {/* Mobile Navigation Drawer */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -20 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -20 }}
                            className="md:hidden absolute top-full left-0 right-0 mt-4 bg-background/95 backdrop-blur-2xl rounded-3xl border border-foreground/10 p-6 flex flex-col gap-6 overflow-hidden shadow-2xl"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium uppercase tracking-widest ${isActive(link.href) ? "text-primary opacity-100" : "opacity-60"} hover:text-primary transition-colors`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
