import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Bot } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-green-400 text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Next-Gen Tech Agency
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
         {/* Hero Heading - Mobile par text chota aur leading set ki hai */}
<h1 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-[1.1] md:leading-[0.9]">
  Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Smart Web Solutions</span> <br className="hidden md:block" />
  & Automating Growth.
</h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10"
        >
          We blend Full-Stack Development, AI Integration, and n8n Workflows to build software that scales your business on autopilot.
        </motion.p>

        {/* Updated Buttons with IDs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Seedha Contact Form par slide kare ga */}
          <a 
            href="#contact" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-zinc-950 px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
          >
            Book a Free Discovery Call
            <ArrowRight size={20} />
          </a>
          
          {/* Seedha Featured Work section par slide kare ga */}
          <a 
            href="#work" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-zinc-700 hover:border-zinc-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
          >
            View Our Work
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-wrap justify-center items-center gap-8 text-zinc-500"
        >
          <div className="flex items-center gap-2"><Code2 size={20} /> React & Node.js</div>
          <div className="flex items-center gap-2"><Bot size={20} /> Custom AI & ML</div>
          <div className="flex items-center gap-2">⚙️ n8n Automation</div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;