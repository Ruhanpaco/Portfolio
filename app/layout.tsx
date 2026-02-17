import type { Metadata } from "next";
import { DM_Serif_Display, Syne } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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
import LoadingWrapper from "./LoadingWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ruhanpacolli.online"),
  title: {
    default: "Ruhan Pacolli • Software Engineer",
    template: "%s | Ruhan Pacolli",
  },
  description: "Personal portfolio of Ruhan Pacolli, Software Engineer and Founder of EliteDev Agency. Specializing in high-performance web systems and premium UI/UX.",
  keywords: ["Software Engineer", "Frontend Developer", "Next.js", "React", "Fullstack", "Founder", "EliteDev Agency", "Portfolio", "Technical Leadership"],
  authors: [{ name: "Ruhan Pacolli" }],
  creator: "Ruhan Pacolli",
  openGraph: {
    title: "Ruhan Pacolli • Software Engineer",
    description: "Building Software products that solve real-world problems. Founder of EliteDev Agency. Systems Architecture & Product Engineering.",
    url: "https://www.ruhanpacolli.online",
    siteName: "Ruhan Pacolli",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Recommended size: 1200x630
        width: 1200,
        height: 630,
        alt: "Ruhan Pacolli • Software Engineer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruhan Pacolli",
    description: "Building Software products that solve real-world problems. Founder of EliteDev Agency. Systems Architecture & Product Engineering.",
    creator: "@ruhanpacolli",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png", // Assuming standard names or user has them
    apple: "/apple-touch-icon.png",
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
        <LoadingWrapper>
          <div className="grain overflow-x-hidden">
            <Analytics />
            <Navbar />
            {children}
            <Footer />
          </div>
        </LoadingWrapper>
      </body>
    </html>
  );
}
