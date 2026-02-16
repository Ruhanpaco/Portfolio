"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-xl flex items-center gap-8 shadow-2xl shadow-black/5">
            <Link href="/" className="text-sm font-serif uppercase tracking-tighter mr-4 border-r border-foreground/10 pr-4">RP.</Link>
            <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-widest">
                <Link
                    href="/work"
                    className={`${isActive("/work") ? "text-primary opacity-100" : "opacity-40 hover:opacity-100"} transition-opacity underline-offset-4 hover:underline`}
                >
                    Work
                </Link>
                <Link
                    href="/blog"
                    className={`${isActive("/blog") ? "text-primary opacity-100" : "opacity-40 hover:opacity-100"} transition-opacity underline-offset-4 hover:underline`}
                >
                    Talks
                </Link>
                <Link
                    href="/resume"
                    className={`${isActive("/resume") ? "text-primary opacity-100" : "opacity-40 hover:opacity-100"} transition-opacity underline-offset-4 hover:underline`}
                >
                    Resume
                </Link>
                <Link
                    href="/#about"
                    className="opacity-40 hover:opacity-100 transition-opacity underline-offset-4 hover:underline"
                >
                    About
                </Link>
                <Link
                    href="/#contact"
                    className="opacity-40 hover:opacity-100 transition-opacity underline-offset-4 hover:underline"
                >
                    Contact
                </Link>
            </div>
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse ml-2" />
        </nav>
    );
}
