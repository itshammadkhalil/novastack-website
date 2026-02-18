import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO AREA: Same as reference image style */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          {/* Logo Icon with Glass Effect */}
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-green-500/50 transition-all duration-500">
            <span className="font-black text-xl">N</span>
          </div>
          
          {/* NovaStack Text: Bold, Uppercase, Italic, Tighter Tracking */}
          <span className="text-2xl font-black text-white uppercase tracking-tighter italic">
            Nova<span className="text-green-500">Stack</span>
          </span>
        </div>

        {/* Desktop Links: Heavy font weight and uppercase for tech vibe */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          <a href="#all-services" className="hover:text-white transition-all duration-300">Services</a>
          <a href="#work" className="hover:text-white transition-all duration-300">Our Work</a>
          <a href="#founders" className="hover:text-white transition-all duration-300">Founders</a>
        </div>

        {/* CTA Button: Bold black style */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="bg-white hover:bg-green-400 text-zinc-950 px-6 py-3 rounded-2xl font-black uppercase tracking-tighter text-xs transition-all duration-300 transform hover:scale-105 inline-block shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white p-2 bg-white/5 rounded-xl border border-white/10">
          <Menu size={20} />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;