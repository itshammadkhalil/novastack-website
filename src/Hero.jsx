import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO: Mobile responsive size */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter italic">
            Nova<span className="text-green-500">Stack</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-500">
          <a href="#all-services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="bg-white text-zinc-950 px-5 py-2 rounded-xl">Let's Talk</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-950 border-b border-white/5 p-6 flex flex-col gap-4 md:hidden">
          <a href="#all-services" onClick={() => setIsOpen(false)} className="text-white font-bold uppercase tracking-widest text-sm">Services</a>
          <a href="#work" onClick={() => setIsOpen(false)} className="text-white font-bold uppercase tracking-widest text-sm">Work</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-green-500 font-bold uppercase tracking-widest text-sm">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;