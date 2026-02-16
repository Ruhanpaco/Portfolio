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
  metadataBase: new URL("https://www.ruhanpacolli.online"),
  title: {
    default: "Ruhan Pacolli • Software Engineer",
    template: "%s | Ruhan Pacolli",
  },
  description: "Personal portfolio of Ruhan Pacolli, Software Engineer and Founder of EliteDev Agency.",
  openGraph: {
    title: "Ruhan Pacolli • Software Engineer",
    description: "Building premium digital experiences. Founder of EliteDev Agency.",
    url: "https://www.ruhanpacolli.online",
    siteName: "Ruhan Pacolli",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruhan Pacolli",
    description: "Software Engineer & Founder of EliteDev Agency.",
    creator: "@ruhanpacolli", // Assuming this handle, or generic
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
