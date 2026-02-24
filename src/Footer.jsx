import React, { useState } from 'react';
import { Linkedin, Mail, ArrowUpCircle, X } from 'lucide-react';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = (type) => {
    setModalContent(type);
    if (type) {
      document.body.style.overflow = 'hidden'; // Scroll band karne ke liye
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo.png" alt="NS" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" />
              <span className="text-lg font-black text-white tracking-tighter italic uppercase">
                Nova<span className="text-green-500">Stack</span>
              </span>
            </div>
            <div className="flex gap-4 text-[10px] uppercase tracking-widest font-bold">
              <button onClick={() => toggleModal('privacy')} className="text-zinc-500 hover:text-white transition-colors">Privacy</button>
              <button onClick={() => toggleModal('terms')} className="text-zinc-500 hover:text-white transition-colors">Terms</button>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/company/novastack" target="_blank" className="text-zinc-500 hover:text-white transition-all hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="mailto:info.novastack@gmail.com" className="text-zinc-500 hover:text-white transition-all hover:scale-110">
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-2">
              © {new Date().getFullYear()} NovaStack Tech.
            </p>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="text-green-500 hover:text-green-400 text-[10px] font-bold uppercase flex items-center gap-2 mx-auto md:ml-auto group"
            >
              Back to top <ArrowUpCircle size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {modalContent && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl">
            <button 
              onClick={() => toggleModal(null)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white p-2"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-2xl font-black text-white uppercase italic mb-6">
              {modalContent === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            
            <div className="text-zinc-400 text-sm leading-relaxed space-y-4">
              {modalContent === 'privacy' ? (
                <>
                  <p>At NovaStack, we prioritize your privacy. We only collect data necessary to provide our web engineering and AI services.</p>
                  <p>All client data is encrypted and handled with the strictest confidentiality protocols.</p>
                </>
              ) : (
                <>
                  <p>By using NovaStack’s services, you agree to our terms of professional engagement and intellectual property standards.</p>
                  <p>All projects delivered are subject to the specific contract agreements signed at the start of the collaboration.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;