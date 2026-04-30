export default function Footer() {
    return (
        <footer className="p-12 border-t border-foreground/5 mt-24 text-center">
            <p className="text-xs opacity-40 uppercase tracking-[0.3em] font-sans">
                © {new Date().getFullYear()} Ruhan Pacolli &bull; Software Engineer & Founder
            </p>
        </footer>
    );
}
