import React, { useState } from 'react';
import { Linkedin, Mail, ArrowUpCircle, X, Terminal } from 'lucide-react';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = (type) => {
    setModalContent(type);
    document.body.style.overflow = type ? 'hidden' : 'unset';
  };

  return (
    <>
      {/* --- FOOTER SECTION --- */}
      <footer className="w-full bg-zinc-950 border-t border-white/5 py-12 flex-shrink-0 z-50">
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
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => toggleModal(null)}
        >
          <div 
            className="bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-3xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => toggleModal(null)} 
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-3xl font-black text-white uppercase italic mb-8 tracking-tighter border-b border-white/5 pb-4">
              {modalContent === 'privacy' ? 'Data & Privacy Protocol' : 'Service Terms & Agreement'}
            </h3>
            
            <div className="text-zinc-400 text-[13px] leading-relaxed space-y-6 font-medium italic">
              {modalContent === 'privacy' ? (
                <>
                  <section>
                    <h4 className="text-green-500 font-black mb-2 uppercase text-[11px] flex items-center gap-2"><Terminal size={12}/> 01. Data Integrity</h4>
                    <p>At NovaStack, we operate under strict confidentiality. Any data collected during the engineering phase is encrypted and stored in isolated environments.</p>
                  </section>
                  <section>
                    <h4 className="text-green-500 font-black mb-2 uppercase text-[11px] flex items-center gap-2"><Terminal size={12}/> 02. Information Usage</h4>
                    <p>We do not sell or trade client information. Information is strictly used for service optimization and AI training (if specified).</p>
                  </section>
                </>
              ) : (
                <>
                  <section>
                    <h4 className="text-green-500 font-black mb-2 uppercase text-[11px] flex items-center gap-2"><Terminal size={12}/> 01. Project Engagement</h4>
                    <p>NovaStack operates on a milestone-based delivery system. Development begins only after technical discovery and deposit confirmation.</p>
                  </section>
                  <section>
                    <h4 className="text-green-500 font-black mb-2 uppercase text-[11px] flex items-center gap-2"><Terminal size={12}/> 02. Intellectual Property</h4>
                    <p>Upon final payment, full ownership of custom source code is transferred to the client, ensuring total control over your digital assets.</p>
                  </section>
                </>
              )}
            </div>
            
            <button 
              onClick={() => toggleModal(null)} 
              className="mt-10 w-full py-4 bg-white text-black font-black uppercase text-[10px] rounded-2xl hover:bg-green-500 transition-all"
            >
              Acknowledge & Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;