"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <html lang="en">
      <title>PORTFOLIO.</title>
      <body className="bg-slate-950 text-white antialiased selection:bg-indigo-500/30">
        <CustomCursor />

        {/* --- TOP NAVBAR --- */}
        <nav className="fixed top-0 w-full z-[100] backdrop-blur-md bg-black/40 border-b border-white/5">
          <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-6 py-5 md:py-8">
            
            {/* ORIGINAL LOGO STYLE */}
            <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter italic">
              PORTFOLIO<span className="text-indigo-500">.</span>
            </Link>

            {/* RESPONSIVE NAV ITEMS (Horizontal Row) */}
            <div className="flex flex-row items-center gap-4 md:gap-8">
              <Link 
                href="/projects" 
                className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] italic transition-all ${
                  isActive('/projects') ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                Projects
              </Link>
              
              <Link 
                href="/about" 
                className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] italic transition-all ${
                  isActive('/about') ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                About
              </Link>

              <Link 
                href="/contact" 
                className={`px-3 py-1.5 md:px-5 md:py-2 border-2 rounded-lg text-[10px] md:text-xs font-black uppercase tracking-tighter italic transition-all ${
                  isActive('/contact') 
                  ? 'bg-indigo-600 border-indigo-600 text-white' 
                  : 'border-white/20 text-white hover:bg-white hover:text-black'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* --- MAIN CONTENT --- */}
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}