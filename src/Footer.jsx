import React, { useState } from 'react';
import ReactDOM from 'react-dom'; 
import { Linkedin, Mail, ArrowUpCircle, X } from 'lucide-react';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  
  const Modal = () => ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999999] flex items-center justify-center p-4 bg-black/80" onClick={() => setModalContent(null)}>
      <div className="bg-zinc-900 border border-white/20 p-8 rounded-3xl max-w-lg w-[90%] relative shadow-2xl" onClick={e => e.stopPropagation()}>
        <button onClick={() => setModalContent(null)} className="absolute top-6 right-6 text-zinc-400 hover:text-white"><X size={24} /></button>
        <h3 className="text-white text-xl font-black mb-6 uppercase tracking-widest border-b border-white/10 pb-4">
          {modalContent === 'privacy' ? 'Privacy Protocol' : 'Service Terms'}
        </h3>
        <p className="text-zinc-300 text-sm leading-relaxed mb-8">
          {modalContent === 'privacy' 
            ? 'At NovaStack, we operate under strict confidentiality. Any data collected during the engineering phase is encrypted and stored in isolated environments.' 
            : 'NovaStack operates on a milestone-based delivery system. Development begins only after technical discovery and deposit confirmation.'}
        </p>
        <button onClick={() => setModalContent(null)} className="w-full py-3 bg-white text-black font-black uppercase text-[10px] rounded-xl hover:bg-green-500 transition-all">Close</button>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <footer className="w-full bg-zinc-950 border-t border-white/5 py-12 flex-shrink-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo and Policy Buttons */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="NS" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" />
                <span className="text-lg font-black text-white tracking-tighter italic uppercase">Nova<span className="text-green-500">Stack</span></span>
              </div>
              <div className="flex gap-4 text-[10px] uppercase tracking-widest font-black">
                <button onClick={() => setModalContent('privacy')} className="text-white hover:text-green-500 transition-colors">Privacy Policy</button>
                <button onClick={() => setModalContent('terms')} className="text-white hover:text-green-500 transition-colors">Terms of Use</button>
              </div>
            </div>
            {/* Socials & Back to Top */}
          </div>
        </div>
      </footer>
      {modalContent && <Modal />}
    </>
  );
};

export default Footer;