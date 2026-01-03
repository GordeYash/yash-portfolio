"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Code2, ShieldCheck, Zap, Activity, X, Target, Rocket, Layers } from "lucide-react";

const PROJECTS = [
  {
    id: "appointment",
    title: "Appointment Management",
    description: "Built a scalable microservices platform for patient registration and notifications, handling 1000+ simulated users.",
    tech: ["Java", "Spring Boot","Python","Django", "React.js", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS"],
    github: "https://github.com/GordeYash/AMS",
    metrics: "90% Test Coverage",
    icon: <Activity size={24} />,
    color: "from-indigo-600/20",
    details: {
      why: "To solve the bottleneck in patient registration and ensure zero-downtime during high-traffic notification bursts.",
      what: "A fault-tolerant microservices architecture using Spring Boot for logic and React for the frontend.",
      features: ["Microservices Orchestration ", "90% Code Coverage ", "AWS EC2 & Kubernetes Deployment "]
    }
  },
  {
    id: "election",
    title: "Election Management",
    description: "Created web/desktop app for voter management and automated PDF generation, supporting 500+ concurrent users.",
    tech: ["Python", "Java", "Spring Boot", "React", "MySQL", "Machine Learning"],
    github: "https://github.com/GordeYash/VoterListDownload",
    metrics: "95% Security Increase",
    icon: <ShieldCheck size={24} />,
    color: "from-red-600/20",
    details: {
      why: "To prevent unauthorized access and handle high-traffic voter management efficiently.",
      what: "A cross-platform app featuring ML-based text-captcha and machine-specific login security.",
      features: ["ML Captcha Solving ", "Automated PDF Generation ", "95% Unauthorized Access Reduction "]
    }
  },
  {
    id: "food",
    title: "Online Food Ordering",
    description: "Monolithic architecture with secured login/registration and optimized PostgreSQL query performance.",
    tech: ["Java", "JSP", "Servlets", "HTML", "CSS", "PostgreSQL"],
    github: "https://github.com/GordeYash/Online-Food-Delivery-Project",
    metrics: "30% Query Optimization",
    icon: <Zap size={24} />,
    color: "from-emerald-600/20",
    details: {
      why: "To build a robust ordering system with secure authentication and efficient delivery partner management[.",
      what: "A monolithic system utilizing JSP/Servlets with a heavily optimized PostgreSQL database.",
      features: ["Secure Login & Registration ", "30% Enhanced Query Performance ", "Order & Delivery Management "]
    }
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="min-h-screen bg-slate-950 pt-32 pb-20 px-6 selection:bg-indigo-500/30">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-none text-white">WORKS.</h1>
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-white to-slate-500 ml-12 md:ml-24">& PROJECTS</h1>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-slate-900/30 border border-white/5 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden"
            >
               {/* THEMED BACKGROUND ELEMENT */}
               <div className={`absolute top-0 right-0 w-32 h-full bg-gradient-to-l ${project.color} to-transparent skew-x-[-20deg] translate-x-16 group-hover:translate-x-8 transition-transform duration-700`} />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-4">{project.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.slice(0, 9).map((t) => (
                      <span key={t} className="text-[10px] font-black uppercase tracking-tighter px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-400">
                        {t}
                      </span>
                    ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-sm font-black italic uppercase tracking-tighter text-indigo-400">{project.metrics}</span>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-black italic uppercase tracking-widest px-6 py-3 bg-white text-black rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-xl"
                  >
                    Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- CASE STUDY MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="p-8 md:p-16 max-h-[85vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-12">
                   <div className="flex items-center gap-6">
                      <div className="p-5 bg-indigo-500 rounded-3xl text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]">{selectedProject.icon}</div>
                      <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase">{selectedProject.title}</h2>
                   </div>
                   <button onClick={() => setSelectedProject(null)} className="p-3 text-slate-500 hover:text-white bg-white/5 rounded-full"><X size={24} /></button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-10">
                    <div>
                      <h4 className="flex items-center gap-3 text-indigo-400 font-black italic uppercase tracking-[0.2em] text-xs mb-4"><Target size={18} /> Objective</h4>
                      <p className="text-slate-300 text-lg leading-relaxed font-light italic">"{selectedProject.details.why}"</p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-3 text-indigo-400 font-black italic uppercase tracking-[0.2em] text-xs mb-4"><Rocket size={18} /> Implementation</h4>
                      <p className="text-slate-300 text-lg leading-relaxed font-light">{selectedProject.details.what}</p>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <h4 className="flex items-center gap-3 text-indigo-400 font-black italic uppercase tracking-[0.2em] text-xs mb-4"><Layers size={18} /> Key Results</h4>
                      <ul className="space-y-4">
                        {selectedProject.details.features.map((f: string) => (
                          <li key={f} className="flex items-center gap-4 text-slate-100 font-medium">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_indigo]" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href={selectedProject.github} className="block w-full bg-white text-black text-center py-5 rounded-2xl font-black italic uppercase tracking-tighter hover:bg-indigo-600 hover:text-white transition-all text-xl shadow-2xl">
                      Access Repository
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}