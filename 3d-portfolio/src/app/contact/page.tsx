"use client";
import { useRef, useState } from "react"; // Added useRef and useState
import emailjs from "@emailjs/browser"; // Added EmailJS
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Terminal, Code2, CheckCircle,Instagram } from "lucide-react";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Replace Service ID, Template ID, and Public Key with yours from EmailJS dashboard
    emailjs.sendForm(
      'service_pd9u427', 
      'template_507j574', 
      form.current!, 
      'Zbm-sFcC0P5qUb7QW'
    )
    .then(() => {
        setStatus("success");
        form.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
    }, (error) => {
        console.log(error.text);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 pt-32 pb-20 px-6 selection:bg-indigo-500/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- FAST & FURIOUS HEADER --- */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-none text-white">
              GET IN.
            </h1>
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-white to-slate-500 ml-12 md:ml-24">
              TOUCH
            </h1>
          </motion.div>
          <div className="mt-8 flex items-center gap-4">
             <span className="h-[2px] w-12 bg-indigo-500"></span>
             <p className="text-indigo-400 font-mono uppercase tracking-[0.3em] text-sm italic">
               The Finish Line
             </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT SIDE: INFO TAGS --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Contact Info</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Currently open for <span className="text-white font-bold italic underline decoration-indigo-500">Software Engineer</span> roles. 
                Whether it's about Spring Boot microservices or DevOps infrastructure, let's talk shop.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Mail size={20}/>, label: "Email", val: "gordeyash798@gmail.com", href: "mailto:gordeyash798@gmail.com" },
                { icon: <Phone size={20}/>, label: "Phone", val: "+91 8080341618", href: "tel:+918080341618" },
                { icon: <MapPin size={20}/>, label: "Base", val: "Sangamner, Maharashtra", href: "#" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="group flex items-center gap-6 p-4 bg-white/5 border-l-4 border-indigo-500/20 hover:border-indigo-500 hover:bg-indigo-500/5 transition-all skew-x-[-10deg]"
                >
                  <div className="skew-x-[10deg] text-indigo-400 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div className="skew-x-[10deg]">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.label}</p>
                    <p className="text-white font-bold italic tracking-tight">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com/in/yashsomnathgorde" target="_blank" className="p-5 bg-white text-black hover:bg-indigo-500 hover:text-white transition-all transform hover:skew-x-[-12deg]">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/GordeYash" target="_blank" className="p-5 border border-white/10 text-white hover:bg-white/10 transition-all transform hover:skew-x-[-12deg]">
                <Github size={24} />
              </a>
              <a href="https://www.instgram.com/yash__gorde__01" target="_blank" className="p-5 border border-white/10 text-white hover:bg-white/10 transition-all transform hover:skew-x-[-12deg]">
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: RACING FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl rounded-full" />
            
            {/* Added ref and onSubmit */}
            <form 
              ref={form} 
              onSubmit={sendEmail}
              className="relative space-y-8 bg-slate-900/50 border border-white/5 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-1 h-full bg-indigo-500" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-2">
                    <Terminal size={12}/> Driver Name
                  </label>
                  {/* Added 'name' attribute for EmailJS */}
                  <input required name="user_name" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 italic font-bold focus:border-indigo-500 outline-none transition-all placeholder:text-slate-700 text-white" placeholder="ENTER NAME" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-2">
                    <Mail size={12}/> Signal (Email)
                  </label>
                  {/* Added 'name' attribute for EmailJS */}
                  <input required name="user_email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 italic font-bold focus:border-indigo-500 outline-none transition-all placeholder:text-slate-700 text-white" placeholder="ENTER EMAIL" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-2">
                  <Code2 size={12}/> Project Brief
                </label>
                {/* Added 'name' attribute for EmailJS */}
                <textarea required name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 italic font-bold focus:border-indigo-500 outline-none transition-all placeholder:text-slate-700 text-white" placeholder="WHAT'S THE MISSION?"></textarea>
              </div>

              <motion.button 
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02, skewX: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`group w-full py-6 font-black italic uppercase tracking-tighter text-xl flex items-center justify-center gap-4 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] 
                  ${status === "success" ? "bg-emerald-500 text-white" : "bg-white text-black hover:bg-indigo-600 hover:text-white"}`}
              >
                {status === "sending" ? "TRANSMITTING..." : 
                 status === "success" ? "TRANSMISSION SENT!" : 
                 status === "error" ? "FAILED - TRY AGAIN" : 
                 "Send Transmission"} 
                <Send size={24} className={status === "sending" ? "animate-pulse" : "group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}