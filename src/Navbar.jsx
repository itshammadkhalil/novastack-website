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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
       
        <div 
          className="flex items-center gap-2 md:gap-3 cursor-pointer z-[101]" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          
<img 
  src="/logo.png" 
  alt="NS" 
  className="h-10 w-auto md:h-14 lg:h-16 brightness-110 contrast-110 object-contain" 
/>
          
          
          <span className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter italic leading-none">
            Nova<span className="text-green-500">Stack</span>
          </span>
        </div>

       
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
          <a href="#all-services" className="hover:text-white transition-all">Services</a>
          <a href="#work" className="hover:text-white transition-all">Our Work</a>
          <a href="#founders" className="hover:text-white transition-all">Founders</a>
          <a href="#contact" className="bg-white text-zinc-950 px-6 py-2.5 rounded-xl hover:bg-green-400 transition-all ml-4">Let's Talk</a>
        </div>

       
        <button className="md:hidden text-white z-[101] p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="fixed inset-0 bg-zinc-950 z-[100] flex flex-col items-center justify-center gap-8 md:hidden">
          <a href="#all-services" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase italic text-white tracking-widest">Services</a>
          <a href="#work" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase italic text-white tracking-widest">Our Work</a>
          <a href="#founders" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase italic text-white tracking-widest">Founders</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 bg-green-500 text-zinc-950 px-10 py-4 rounded-2xl font-black uppercase italic text-lg">Let's Talk</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;