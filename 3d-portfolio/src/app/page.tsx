"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-slate-950" /> 
});

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center py-20 lg:py-0 selection:bg-indigo-500/30">
      <Scene />

      <div className="z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full px-6 lg:px-8 gap-10 lg:gap-12">
        
        {/* 1st ROW ON MOBILE: Your Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group order-1 lg:order-1"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative w-64 h-80 md:w-80 md:h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
            <Image 
              src="/yashgorde.jpeg" 
              alt="Yash Somnath Gorde" 
              fill 
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
        </motion.div>

        {/* 2nd ROW ON MOBILE: Text & Content */}
        <div className="flex-1 space-y-6 order-2 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* HEADER: Always Left Aligned/Stepped (The previous style) */}
            <div className="flex flex-col mb-6 text-left">
              <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none text-white">
                THE
              </h1>
              <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-slate-500 ml-12 md:ml-24">
                ENGINEER.
              </h1>
            </div>
            
            {/* NAME & TAGLINE: Centered on Mobile, Left on Desktop */}
            <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                   <span className="absolute -inset-x-2 -inset-y-1 bg-indigo-500/10 skew-x-[-15deg] border-r-4 border-indigo-500"></span>
                   <p className="relative text-white font-black italic text-xl md:text-3xl uppercase tracking-wider px-4">
                     Yash <span className="text-indigo-500">Somnath</span> Gorde 
                   </p>
                </div>

                <h2 className="text-lg md:text-2xl font-bold text-slate-300 mb-4 flex items-center justify-center lg:justify-start gap-2">
                  <span className="hidden lg:block h-[2px] w-8 bg-indigo-500"></span>
                  JAVA Developer | Software Engineer 
                </h2>
            </div>
          </motion.div>

          {/* PARAGRAPH: Centered on Mobile */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 max-w-xl mx-auto lg:mx-0 text-center lg:text-left text-base md:text-xl leading-relaxed font-light"
          >
            Full Stack Java Developer with <span className="text-white font-medium">2 years of experience</span>. 
            Specializing in high-performance applications with <span className="text-white font-medium">Spring Boot, Hibernate, and Micro-services</span>.
          </motion.p>

          {/* BUTTONS: In a Row on Mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-row justify-center lg:justify-start gap-3 md:gap-4 pt-4"
          >
            <Link href="/about" className="flex-1 lg:flex-none">
              <button className="w-full lg:w-auto bg-white text-black px-4 md:px-10 py-4 rounded-xl font-black italic uppercase tracking-tighter text-[10px] md:text-base hover:bg-indigo-600 hover:text-white transition-all duration-500 shadow-lg active:scale-95 whitespace-nowrap">
                Explore About
              </button>
            </Link>
            <Link href="/projects" className="flex-1 lg:flex-none">
              <button className="w-full lg:w-auto border border-white/20 text-white px-4 md:px-10 py-4 rounded-xl font-black italic uppercase tracking-tighter text-[10px] md:text-base hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap">
                View Projects
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}