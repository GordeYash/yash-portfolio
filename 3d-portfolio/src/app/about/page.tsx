"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Cpu, Award, ExternalLink, Gauge } from "lucide-react";

export default function AboutPage() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVars = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <main className="min-h-screen bg-slate-950 pt-32 pb-20 px-6 text-white selection:bg-indigo-500/30">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* --- FAST & FURIOUS HEADER --- */}
        <motion.section variants={itemVars} className="mb-24">
          <div className="flex flex-col">
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-none text-white">
              ABOUT.
            </h1>
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-white to-slate-500 ml-12 md:ml-24">
              THE PROFILE
            </h1>
          </div>
          <div className="mt-8 flex items-center gap-4">
             <span className="h-[2px] w-12 bg-indigo-500"></span>
             <p className="text-indigo-400 font-mono uppercase tracking-[0.3em] text-sm">
               Yash Somnath Gorde 
             </p>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT COLUMN: MISSION & XP --- */}
          <div className="lg:col-span-8 space-y-24">
            
            <motion.section variants={itemVars}>
              <div className="inline-block px-4 py-1 bg-indigo-500/10 border-l-4 border-indigo-500 skew-x-[-15deg] mb-6">
                <h2 className="text-xl font-black italic uppercase tracking-widest skew-x-[15deg] flex items-center gap-2">
                   <Cpu size={20}/> Mission Control
                </h2>
              </div>
              <p className="text-slate-400 text-2xl leading-tight font-light italic">
                Full Stack Java Developer with <span className="text-white font-black italic underline decoration-indigo-500 underline-offset-8">2 years of experience</span>. 
                Specializing in <span className="text-white">Spring Boot, Hibernate, and React</span>, architecting robust micro-services that bridge complex backends with fluid frontends.
              </p>
            </motion.section>

            {/* EXPERIENCE TIMELINE */}
            {/* --- EXPERIENCE TIMELINE --- */}
<motion.section variants={itemVars} className="space-y-12">
   <div className="flex items-center gap-4">
    <Briefcase className="text-indigo-500" />
    <h2 className="text-3xl font-black italic uppercase tracking-tighter">Career Roadmap</h2>
  </div>
  
  {/* Job 1: Swami Software Solutions */}
  <div className="group relative pl-12 pb-16 border-l-2 border-indigo-500/20 hover:border-indigo-500 transition-colors">
    <div className="absolute w-4 h-12 bg-indigo-500 -left-[3px] top-0 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <div>
        <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white">Java Developer </h3>
        <p className="text-indigo-400 font-mono tracking-widest text-sm uppercase">Swami Software Solutions </p>
      </div>
      <span className="font-black italic text-slate-500 text-sm mt-4 md:mt-0 uppercase">
        January 2024 — Present 
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <p className="text-slate-400 text-lg leading-relaxed">
        Developed full-stack applications for 1000+ users using Spring Boot and React. 
        Optimized micro-services architecture and orchestrated services on aws.
      </p>
      <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl overflow-hidden group-hover:bg-indigo-500/10 transition-colors">
        <Gauge className="absolute -right-4 -bottom-4 text-indigo-500/10 w-24 h-24" />
        <p className="text-indigo-400 font-black italic text-4xl mb-1">+35% </p>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Scalability Gains via NGINX </p>
      </div>
    </div>
  </div>

  {/* Job 2: DevOps Instructor */}
  <div className="group relative pl-12 pb-16 border-l-2 border-slate-800 hover:border-indigo-500 transition-colors">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white">DevOps Instructor </h3>
        <p className="text-indigo-400 font-mono tracking-widest text-sm uppercase">SMBST College </p>
      </div>
      <span className="font-black italic text-slate-500 text-sm italic uppercase">Part-Time </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <p className="text-slate-400 text-lg italic font-light">
        Mentored students on Git, Linux, Docker, and CI/CD fundamentals through live labs and industry best practices.
      </p>
      <div className="relative p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl">
         <div className="flex flex-wrap gap-2">
            {["Git", "Docker", "CI/CD", "Linux"].map(tag => (
              <span key={tag} className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase italic tracking-tighter border border-indigo-500/30">
                {tag} 
              </span>
            ))}
         </div>
         <p className="text-[10px] mt-4 font-black uppercase tracking-widest text-slate-500 underline decoration-indigo-500">Live Lab Instruction </p>
      </div>
    </div>
  </div>

  {/* Job 3: Internship at Maxgen */}
  <div className="group relative pl-12 border-l-2 border-slate-800 hover:border-emerald-500 transition-colors">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">Java Developer Intern </h3>
        <p className="text-emerald-500 font-mono tracking-widest text-sm uppercase">Maxgen Technologies </p>
      </div>
      <span className="font-black italic text-slate-500 text-sm italic uppercase">Aug 2023 — Jan 2024 </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <p className="text-slate-400 text-lg font-light">
        Developed monolithic architecture based Online Food Ordering system using Java JspServlets. 
        Managed PostgreSQL databases to enhancing query performance by 30%.
      </p>
      <div className="relative p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
        <p className="text-emerald-500 font-black italic text-4xl mb-1">+30% </p>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic">Query Optimization </p>
        <p className="text-[10px] mt-2 font-mono text-emerald-500/60 uppercase italic">Remote Internship</p>
      </div>
    </div>
  </div>
</motion.section>
          </div>

          {/* --- RIGHT COLUMN: STATS & EDUCATION --- */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* TECH STACK SKEW CARDS */}
            <motion.section variants={itemVars} className="p-8 bg-indigo-600/5 border-r-4 border-indigo-500 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
                <Award size={24} className="text-indigo-400" /> Tech Specs
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-4">Core Engine (Backend)</p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Spring Boot", "Hibernate", "PostgreSQL", "REST APIs"].map(s => (
                      <span key={s} className="px-3 py-1 bg-white/5 border border-white/5 rounded italic text-xs font-black uppercase tracking-tighter text-slate-300 hover:bg-indigo-500 hover:text-white transition-all cursor-default">
                        {s} 
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-4">Turbo (DevOps)</p>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "Jenkins", "AWS EC2", "CI/CD", "NGINX"].map(s => (
                      <span key={s} className="px-3 py-1 bg-white/5 border border-white/5 rounded italic text-xs font-black uppercase tracking-tighter text-slate-300 hover:bg-indigo-500 hover:text-white transition-all">
                        {s} 
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* ACADEMIA */}
            <motion.section variants={itemVars} className="p-8 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
                <GraduationCap size={24} className="text-indigo-400" /> Academia
              </h3>
              <div className="space-y-8">
                <div className="relative pl-4 border-l-2 border-indigo-500">
                  <p className="text-white font-black italic uppercase tracking-tight leading-tight">Msc Computer Science </p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">SMBST College </p>
                  <p className="text-[10px] text-indigo-500 mt-1 font-mono">2024 — 2026 </p>
                </div>
                <div className="relative pl-4 border-l-2 border-slate-700">
                  <p className="text-white font-black italic uppercase tracking-tight leading-tight">Bsc Computer Science </p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Cgpa — 8.59 </p>
                  <p className="text-[10px] text-slate-600 mt-1 font-mono">2021 — 2024 </p>
                </div>
              </div>
            </motion.section>

            {/* ACTION BUTTON */}
           {/* ACTION BUTTON */}
<a 
  href="/YashGorde_JAVADeveloper_2026.pdf" 
  download="YashGorde_JAVADeveloper_2026.pdf"
  className="block w-full"
>
  <motion.button 
    whileHover={{ scale: 1.05, skewX: -5 }}
    whileTap={{ scale: 0.95 }}
    className="w-full py-6 px-8 bg-white text-black font-black italic uppercase tracking-tighter flex items-center justify-center gap-3 transition-all hover:bg-indigo-600 hover:text-white shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
  >
    Download Full Resume <ExternalLink size={20} />
  </motion.button>
</a>

          </div>
        </div>
      </motion.div>
    </main>
  );
}