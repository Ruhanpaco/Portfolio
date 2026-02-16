import type { Metadata } from "next";
import { DM_Serif_Display, Syne } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-sans",
  subsets: ["latin"],
});

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ruhan Pacolli • Software Engineer",
  description: "Personal portfolio of Ruhan Pacolli, Software Engineer and Founder of EliteDev Agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSerif.variable} ${syne.variable} antialiased bg-background text-foreground selection:bg-primary/30 min-h-screen`}
      >
        <div className="grain overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
