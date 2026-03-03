import React from 'react';
import { Linkedin, Mail, Instagram, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 border-t border-white/5 py-12 flex-shrink-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo.png" alt="NS" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" />
              <span className="text-lg font-black text-white tracking-tighter italic uppercase">
                Nova<span className="text-green-500">Stack</span>
              </span>
            </div>
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
              Automating the Future.
            </p>
          </div>

          
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/the-novastack/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-green-500/50 transition-all hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/novastack_ltd" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-green-500/50 transition-all hover:-translate-y-1">
              <Instagram size={20} />
            </a>
            <a href="mailto:novastack.info@gmail.com" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-green-500/50 transition-all hover:-translate-y-1">
              <Mail size={20} />
            </a>
          </div>

          
          <div className="text-center md:text-right">
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
              © {new Date().getFullYear()} NovaStack Tech. All Rights Reserved.
            </p>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="text-green-500 hover:text-white text-[10px] font-black uppercase flex items-center gap-2 mx-auto md:ml-auto group transition-colors"
            >
              Back to top <ArrowUpCircle size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;