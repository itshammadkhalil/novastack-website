import React, { useState } from 'react';
import { Linkedin, Mail, ArrowUpCircle, X, Terminal } from 'lucide-react';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = (type) => {
    setModalContent(type);
    
  };

  return (
    <>
      <footer className="w-full bg-zinc-950 border-t border-white/5 py-12 flex-shrink-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="NS" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" />
                <span className="text-lg font-black text-white tracking-tighter italic uppercase">
                  Nova<span className="text-green-500">Stack</span>
                </span>
              </div>
              <div className="flex gap-4 text-[10px] uppercase tracking-widest font-black">
                <button onClick={() => toggleModal('privacy')} className="text-white hover:text-green-500 transition-colors">Privacy Policy</button>
                <button onClick={() => toggleModal('terms')} className="text-white hover:text-green-500 transition-colors">Terms of Use</button>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/the-novastack/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-green-500/50 transition-all hover:-translate-y-1">
                <Linkedin size={20} />
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
      
{modalContent && (
  <div 
    className="fixed top-[20%] left-[5%] md:left-[25%] z-[999999] w-[90%] md:w-[50%] bg-zinc-900 border border-white/20 p-6 rounded-2xl shadow-2xl"
  >
    <button 
      onClick={() => toggleModal(null)} 
      className="absolute top-4 right-4 text-zinc-400 hover:text-white"
    >
      <X size={20} />
    </button>
    
    <h3 className="text-xl font-black text-white uppercase mb-4 border-b border-white/10 pb-2">
      {modalContent === 'privacy' ? 'Privacy Protocol' : 'Service Terms'}
    </h3>
    
    <div className="text-zinc-300 text-xs leading-relaxed mb-6">
      {modalContent === 'privacy' ? (
        <p>At NovaStack, we operate under strict confidentiality. Data is encrypted and stored securely.</p>
      ) : (
        <p>Development begins after technical discovery and deposit confirmation. Final source code ownership transfers upon payment.</p>
      )}
    </div>
    
    <button 
      onClick={() => toggleModal(null)} 
      className="w-full py-2 bg-green-500 text-black font-black uppercase text-[10px] rounded-lg"
    >
      Close
    </button>
  </div>
)}
    </>
  );
};

export default Footer;