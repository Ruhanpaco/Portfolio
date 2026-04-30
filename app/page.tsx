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
        className="flex flex-col items-start pt-10 md:pt-20"
      >
        <motion.div variants={reveal} className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm font-medium">
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          Software Engineer & Founder
        </motion.div>

        <motion.h1
          variants={reveal}
          className="max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.1] tracking-tight text-foreground"
        >
          Hi, I'm <span className="italic text-primary">Ruhan Pacolli</span>.
        </motion.h1>

        <motion.p
          variants={reveal}
          className="mt-8 max-w-2xl text-foreground/60 leading-relaxed text-lg md:text-xl"
        >
          I engineer high-performance software systems and lead product development at <span className="text-foreground font-medium">EliteDev Agency</span>.
        </motion.p>

        <motion.div
          variants={reveal}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <button className="bg-foreground text-background px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-foreground/90 transition-colors">
            Get in touch
            <Mail className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2 text-foreground/60 text-sm font-medium">
            <Code2 className="h-5 w-5 text-primary" />
            Available for new projects
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="mt-32 md:mt-48 max-w-4xl" id="about">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">
            About Me
          </h2>

          <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
            <p>
              I am a software engineer and the founder of <span className="text-foreground font-medium">EliteDev Agency</span>. My focus is on building scalable, production-ready digital products for businesses that prioritize actual solutions over industry buzzwords.
            </p>
            <p>
              Working across the full stack with modern tools like <span className="text-foreground font-medium">Laravel, Nest.Js, Next.Js, Swift, Angular</span>, I ensure that performance, security, and maintainability are baked in from day one. I care deeply about the end-user experience, but I am equally uncompromising on what happens behind the scenes—architecture, structure, and efficiency.
            </p>
            <p>
              Beyond code, my background in competitive <span className="text-foreground font-medium">Volenteering</span> has fundamentally shaped how I perform under pressure and collaborate within teams. I'm always looking for ways to give back and make a positive impact on the world.
            </p>
          </div>
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
