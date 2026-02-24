import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <img src="/logo.png" alt="NS" className="h-8 w-auto" />
              <span className="text-xl font-black text-white uppercase italic">
                Nova<span className="text-green-500">Stack</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Engineering high-performance web applications and intelligent AI automations for modern businesses.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <div className="flex flex-col gap-4 text-zinc-500 text-sm font-medium items-center md:items-start">
              <a href="#all-services" className="hover:text-green-500 transition-colors">Services</a>
              <a href="#work" className="hover:text-green-500 transition-colors">Portfolio</a>
              <a href="#founders" className="hover:text-green-500 transition-colors">Our Team</a>
              <a href="#contact" className="hover:text-green-500 transition-colors">Get in touch</a>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex flex-col gap-4 text-zinc-500 text-sm">
              <p className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 justify-center md:justify-start">
                <Mail size={14} className="text-green-500" />
                info.novastack@gmail.com
              </p>
              <p className="text-zinc-500 italic">Based in Pakistan, Serving Globally</p>
            </div>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <div className="flex flex-col gap-4 text-zinc-500 text-sm items-center md:items-start">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <div className="flex gap-4 mt-2">
                <a href="https://linkedin.com/company/novastack-agency" className="text-zinc-400 hover:text-green-500 transition-all"><Linkedin size={20} /></a>
                <a href="#" className="text-zinc-400 hover:text-green-500 transition-all"><Twitter size={20} /></a>
                <a href="#" className="text-zinc-400 hover:text-green-500 transition-all"><Github size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
            © {currentYear} NovaStack Technology. All Rights Reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="text-zinc-500 hover:text-green-500 transition-all flex items-center gap-2 text-xs uppercase font-bold tracking-widest"
          >
            Back to top <ArrowUpCircle size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;