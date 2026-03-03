import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Bot } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-zinc-950 flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-green-400 text-[10px] font-black uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Next-Gen Tech Agency
        </motion.div>

        {/* Main Heading Fix */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter italic mb-6 leading-[1.1] md:leading-[0.9]"
        >
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Smart Solutions</span> <br className="hidden md:block" />
          & Automating Growth.
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-sm md:text-xl text-zinc-500 mb-10 font-medium leading-relaxed"
        >
          We blend Full-Stack Development, AI Integration, and n8n Workflows to build software that scales your business on autopilot.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-4 rounded-2xl font-black uppercase italic transition-all hover:bg-green-400 hover:scale-105">
            Book a Free Call
          </a>
          <a href="#work" className="w-full sm:w-auto border border-white/10 text-white px-8 py-4 rounded-2xl font-black uppercase italic transition-all hover:bg-white/5">
            View Our Work
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;