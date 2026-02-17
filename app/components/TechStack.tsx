"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import {
    SiReact, SiTypescript, SiLaravel, SiExpo, SiSwift, SiNextdotjs, SiTailwindcss,
    SiBootstrap, SiSass, SiVite, SiReactrouter, SiGraphql, SiExpress, SiFirebase,
    SiSqlite, SiSupabase, SiPrisma, SiLua, SiGithub, SiVercel, SiCloudflare,
    SiXcode, SiJira, SiGooglecloud, SiOpenai, SiPostman, SiStripe, SiShopify,
    SiFilezilla, SiFigma, SiCanva, SiNotion, SiTwilio, SiAuth0, SiDigitalocean, SiMongodb
} from "react-icons/si";
import {
    FaAws, FaNodeJs, FaVuejs, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp,
    FaDiscord, FaGit, FaNpm, FaCpanel, FaTrello, FaSlack, FaReact
} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoTerminal } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";

const TechTag = ({ name, icon, color }: { name: string; icon: React.ReactNode; color: string }) => (
    <motion.div
        whileHover={{ y: -2, scale: 1.02 }}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] md:text-xs font-bold uppercase tracking-wider text-white ${color} transition-colors`}
    >
        <span className="text-sm md:text-base">{icon}</span>
        {name}
    </motion.div>
);

export default function TechStack() {
    return (
        <section className="mt-32 md:mt-48">
            <div className="flex items-center gap-4 mb-16">
                <div className="p-3 rounded-2xl bg-foreground/5 dark:bg-white/5 border border-foreground/5">
                    <Layers className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif">Tech Stack</h2>
            </div>

            <div className="space-y-16 md:space-y-24">
                {/* Frontend */}
                <div className="space-y-8">
                    <h3 className="text-xs font-medium uppercase tracking-[0.3em] opacity-40">Frontend</h3>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        <TechTag name="React" icon={<SiReact />} color="bg-[#1c2c3c]" />
                        <TechTag name="Next.js" icon={<SiNextdotjs />} color="bg-[#000000] border border-white/10" />
                        <TechTag name="Vue.js" icon={<FaVuejs />} color="bg-[#1c3c2c]" />
                        <TechTag name="React Native" icon={<FaReact />} color="bg-[#1c2c3c]" />
                        <TechTag name="Expo" icon={<SiExpo />} color="bg-[#1c2c3c]" />
                        <TechTag name="HTML5" icon={<FaHtml5 />} color="bg-[#692c1c]" />
                        <TechTag name="CSS3" icon={<FaCss3Alt />} color="bg-[#1c3c5c]" />
                        <TechTag name="TailwindCSS" icon={<SiTailwindcss />} color="bg-[#1c4c4c]" />
                        <TechTag name="Bootstrap" icon={<SiBootstrap />} color="bg-[#3c1c7c]" />
                        <TechTag name="SCSS" icon={<SiSass />} color="bg-[#6c1c4c]" />
                        <TechTag name="Vite" icon={<SiVite />} color="bg-[#4c1c7c]" />
                        <TechTag name="React Router" icon={<SiReactrouter />} color="bg-[#6c1c2c]" />
                        <TechTag name="SwiftUI" icon={<SiSwift />} color="bg-[#1c4c7c]" />
                    </div>
                </div>

                {/* Backend & APIs */}
                <div className="space-y-8">
                    <h3 className="text-xs font-medium uppercase tracking-[0.3em] opacity-40">Backend & APIs</h3>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        <TechTag name="Node.js" icon={<FaNodeJs />} color="bg-[#1c4c2c]" />
                        <TechTag name="Express.js" icon={<SiExpress />} color="bg-[#2c2c2c]" />
                        <TechTag name="PHP" icon={<FaPhp />} color="bg-[#3c2c6c]" />
                        <TechTag name="Laravel" icon={<SiLaravel />} color="bg-[#691c1c]" />
                        <TechTag name="TypeScript" icon={<SiTypescript />} color="bg-[#1c3c5c]" />
                        <TechTag name="GraphQL" icon={<SiGraphql />} color="bg-[#6c1c4c]" />
                        <TechTag name="Discord API" icon={<FaDiscord />} color="bg-[#2c3c6c]" />
                        <TechTag name="OpenAI" icon={<SiOpenai />} color="bg-[#0c4c3c]" />
                        <TechTag name="Stripe" icon={<SiStripe />} color="bg-[#1c4c7c]" />
                        <TechTag name="Stripe Connect" icon={<SiStripe />} color="bg-[#1c2c4c]" />
                        <TechTag name="Twilio" icon={<SiTwilio />} color="bg-[#691c1c]" />
                        <TechTag name="Auth0" icon={<SiAuth0 />} color="bg-[#693c1c]" />
                        <TechTag name="Lua" icon={<SiLua />} color="bg-[#1c2c4c]" />
                    </div>
                </div>

                {/* Databases */}
                <div className="space-y-8">
                    <h3 className="text-xs font-medium uppercase tracking-[0.3em] opacity-40">Databases</h3>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        <TechTag name="MongoDB" icon={<SiMongodb />} color="bg-[#1c3c2c]" />
                        <TechTag name="MySQL" icon={<DiMysql />} color="bg-[#1c2c4c]" />
                        <TechTag name="PostgreSQL" icon={<BiLogoPostgresql />} color="bg-[#1c3c5c]" />
                        <TechTag name="SQLite" icon={<SiSqlite />} color="bg-[#1c4c6c]" />
                        <TechTag name="Firebase" icon={<SiFirebase />} color="bg-[#1c3c5c]" />
                        <TechTag name="Supabase" icon={<SiSupabase />} color="bg-[#1c3c2c]" />
                        <TechTag name="Prisma" icon={<SiPrisma />} color="bg-[#1c2c4c]" />
                    </div>
                </div>

                {/* Cloud & DevOps */}
                <div className="space-y-8">
                    <h3 className="text-xs font-medium uppercase tracking-[0.3em] opacity-40">Cloud & DevOps</h3>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        <TechTag name="AWS" icon={<FaAws />} color="bg-[#693c1c]" />
                        <TechTag name="Google Cloud" icon={<SiGooglecloud />} color="bg-[#1c4c7c]" />
                        <TechTag name="Vercel" icon={<SiVercel />} color="bg-[#000000] border border-white/10" />
                        <TechTag name="Cloudflare" icon={<SiCloudflare />} color="bg-[#693c1c]" />
                        <TechTag name="DigitalOcean" icon={<SiDigitalocean />} color="bg-[#1c4c7c]" />
                        <TechTag name="CPanel" icon={<FaCpanel />} color="bg-[#691c1c]" />
                        <TechTag name="Terminal" icon={<IoTerminal />} color="bg-[#000000]" />
                    </div>
                </div>

                {/* Tools & Software */}
                <div className="space-y-8">
                    <h3 className="text-xs font-medium uppercase tracking-[0.3em] opacity-40">Tools & Software</h3>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        <TechTag name="Git" icon={<FaGit />} color="bg-[#691c1c]" />
                        <TechTag name="GitHub" icon={<SiGithub />} color="bg-[#000000]" />
                        <TechTag name="VSCode" icon={<VscVscode />} color="bg-[#1c3c6c]" />
                        <TechTag name="Xcode" icon={<SiXcode />} color="bg-[#1c4c7c]" />
                        <TechTag name="NPM" icon={<FaNpm />} color="bg-[#691c1c]" />
                        <TechTag name="Postman" icon={<SiPostman />} color="bg-[#693c1c]" />
                        <TechTag name="Trello" icon={<FaTrello />} color="bg-[#1c4c7c]" />
                        <TechTag name="Jira" icon={<SiJira />} color="bg-[#1c3c6c]" />
                        <TechTag name="Slack" icon={<FaSlack />} color="bg-[#3c1c3c]" />
                        <TechTag name="Notion" icon={<SiNotion />} color="bg-[#000000]" />
                        <TechTag name="FileZilla" icon={<SiFilezilla />} color="bg-[#691c1c]" />
                        <TechTag name="Shopify" icon={<SiShopify />} color="bg-[#3c4c2c]" />
                        <TechTag name="Google Tools" icon={<FcGoogle />} color="bg-[#1c4c7c]" />
                        <TechTag name="Figma" icon={<SiFigma />} color="bg-[#6c2c1c]" />
                        <TechTag name="Canva" icon={<SiCanva />} color="bg-[#1c4c6c]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
