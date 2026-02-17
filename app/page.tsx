"use client";

import { motion } from "framer-motion";
import { Mail, Plus, Code2, Layers, Zap, ShieldCheck, Users } from "lucide-react";
import TechStack from "./components/TechStack";

export default function Home() {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="px-6 md:px-8 pt-32 md:pt-48 pb-24 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12 text-left">
          <div className="max-w-4xl">
            <motion.h1
              variants={reveal}
              className="text-6xl sm:text-7xl md:text-[8rem] font-serif leading-[0.85] tracking-tight"
            >
              Hello, I'm <br />
              <span className="text-primary italic">Ruhan Pacolli</span>
            </motion.h1>
            <motion.div variants={reveal} className="mt-8 md:mt-12 flex items-center gap-4">
              <div className="h-px w-12 bg-foreground/20" />
              <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] opacity-40">Software Engineer & Founder</span>
            </motion.div>
          </div>

          <motion.div
            variants={reveal}
            className="max-w-xs mb-0 md:mb-6 text-foreground/60 leading-relaxed text-base md:text-lg"
          >
            Founder of <span className="text-foreground">EliteDev Agency</span>. Building digital products that solve problems, not just create noise.
          </motion.div>
        </div>

        <motion.div
          variants={reveal}
          className="mt-16 flex flex-wrap gap-4"
        >
          <button className="bg-primary text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform active:scale-95">
            GET IN TOUCH
            <Mail className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-4 text-foreground/40 text-sm uppercase tracking-widest ml-auto md:ml-0">
            <Plus className="h-4 w-4" />
            EliteDev Agency
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start" id="about">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] md:text-sm font-medium uppercase tracking-[0.3em] opacity-40 mb-6 md:mb-8 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-primary" />
            About Me
          </h2>
          <div className="space-y-6 md:space-y-8 text-xl md:text-2xl font-serif leading-snug">
            <p>
              I’m Ruhan Pacolli, a software engineer and founder of <span className="italic">EliteDev Agency</span>, where I build scalable digital products for businesses that need solutions, not buzzwords.
            </p>
            <p className="text-foreground/60 text-lg md:text-2xl">
              I work across the stack using modern technologies such as <span className="text-foreground border-b border-foreground/10">React, Next.js, TypeScript, and Node.js</span>, with a strong focus on performance and long-term maintainability.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 md:space-y-12"
        >
          <div className="p-6 md:p-8 bento-card bg-foreground/5 dark:bg-white/5 border-none">
            <p className="text-base md:text-lg leading-relaxed opacity-80">
              "I care deeply about user experience, but I am equally focused on what happens behind the scenes: structure, security, and efficiency."
            </p>
          </div>
          <p className="text-base md:text-lg opacity-60 leading-relaxed">
            Outside of engineering, competitive <span className="text-foreground font-medium">volleyball</span> has shaped how I work under pressure and within teams. It reinforced discipline, communication, and accountability.
          </p>
        </motion.div>
      </section>

      {/* Bento Grid / Expertise Section */}
      <section className="mt-32 md:mt-48">
        <h2 className="text-xs font-medium uppercase tracking-[0.3em] opacity-40 mb-8 md:mb-12 text-center text-balance">Technical Expertise & Mindset</h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
        >
          {/* Main Expertise Card */}
          <div className="md:col-span-2 bento-card flex flex-col justify-between overflow-hidden relative group min-h-[350px] md:h-[400px]">
            <div className="flex justify-between items-start z-10">
              <Code2 className="h-8 w-8 text-primary" />
              <Plus className="h-5 w-5 opacity-20" />
            </div>
            <div className="z-10 mt-12 md:mt-0">
              <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">EliteDev Agency</h3>
              <p className="opacity-60 text-base md:text-lg leading-relaxed">
                Translating business needs into production-ready systems. Designing architecture that scales as clients grow.
              </p>
            </div>
            <div className="absolute -bottom-8 -right-8 opacity-5">
              <Layers className="h-48 md:h-64 w-48 md:w-64" />
            </div>
          </div>

          {/* Stat Cards */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bento-card flex flex-col justify-between items-start group hover:border-primary/20 transition-colors py-8">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-1">Performance</h4>
                <p className="text-sm opacity-50">Clarity over complexity.</p>
              </div>
            </div>

            <div className="bento-card flex flex-col justify-between items-start group hover:border-primary/20 transition-colors py-8">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-1">Security</h4>
                <p className="text-sm opacity-50">Robust background logic.</p>
              </div>
            </div>

            <div className="md:col-span-2 bento-card flex flex-col md:flex-row items-start md:items-center justify-between group cursor-pointer hover:bg-primary hover:text-white transition-all duration-500 overflow-hidden relative gap-6">
              <div className="relative z-10">
                <h4 className="text-2xl font-serif mb-1">Volleyball & Leadership</h4>
                <p className="text-sm opacity-60 group-hover:text-white/80">Discipline shaped by competition.</p>
              </div>
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-white/20 transition-colors relative z-10">
                <Users className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <Users className="absolute -right-4 top-1/2 -translate-y-1/2 h-24 w-24 opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>
          </div>
        </motion.div>
      </section>

      <TechStack />
    </main>
  );
}
