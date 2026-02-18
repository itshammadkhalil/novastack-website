import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText } from 'lucide-react';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = (type) => {
    if (type === 'privacy') {
      setModalContent({
        title: "Privacy Policy",
        icon: <ShieldCheck className="text-green-500" />,
        text: "At NovaStack, we prioritize your data security. We only collect information necessary to provide our services. Your data is never sold to third parties and is protected using industry-standard encryption."
      });
    } else if (type === 'tos') {
      setModalContent({
        title: "Terms of Service",
        icon: <FileText className="text-blue-500" />,
        text: "By using NovaStack's services, you agree to our project timelines and payment terms. All custom code provided remains the intellectual property of NovaStack until final payment is cleared."
      });
    } else {
      setModalContent(null);
    }
  };

  return (
    <footer className="w-full py-16 bg-zinc-950/50 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* LOGO AREA: Bold, Uppercase, Italic (Same as Navbar & Hero) */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-2xl font-black text-white uppercase tracking-tighter italic">
            Nova<span className="text-green-500">Stack</span>
          </div>
          <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            Next-Gen Tech Agency
          </div>
        </div>

        {/* Legal Links: Clean uppercase style */}
        <div className="flex gap-10">
          <button 
            onClick={() => toggleModal('privacy')}
            className="text-zinc-500 hover:text-white transition-all duration-300 text-[10px] font-black uppercase tracking-widest cursor-pointer"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => toggleModal('tos')}
            className="text-zinc-500 hover:text-white transition-all duration-300 text-[10px] font-black uppercase tracking-widest cursor-pointer"
          >
            Terms of Service
          </button>
        </div>

        {/* Copyright */}
        <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
          © 2026 All Rights Reserved
        </div>
      </div>

      {/* Modal Overlay (Glassmorphism Style) */}
      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalContent(null)}
              className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-zinc-900/50 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl"
            >
              <button 
                onClick={() => setModalContent(null)}
                className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  {modalContent.icon}
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">{modalContent.title}</h3>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-10 text-sm font-medium">
                {modalContent.text}
              </p>

              <button 
                onClick={() => setModalContent(null)}
                className="w-full py-5 bg-white text-zinc-950 font-black uppercase tracking-tighter rounded-2xl hover:bg-green-400 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;