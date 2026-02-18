import React from 'react';
import Navbar from './Navbar'; 
import Hero from './Hero';
import Expertise from './Expertise';
import AllServices from './AllServices';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer'; 

function App() {
  return (
    // 'relative' aur 'overflow-hidden' zaroori hai taake glows bahar na nikalen
    <div className="relative min-h-screen bg-zinc-950 selection:bg-green-500/30 overflow-x-hidden">
      
      {/* 1. Global Background Tech Grid - Ye website ko khali mehsoos nahi hone degi */}
      <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #3f3f46 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* 2. Floating Animated Glows - Ye premium neon look dein gay */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-green-500/10 rounded-full blur-[130px] animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[130px] animate-pulse pointer-events-none" style={{ animationDelay: '3s' }}></div>
      <div className="fixed top-[40%] right-[-5%] w-[30%] h-[40%] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none"></div>

      {/* 3. Content Wrapper - Isay z-10 rakha hai taake glows peeche rahen */}
      <div className="relative z-10">
        <Navbar /> 
        <Hero />
        
        {/* Sections ke darmiyan halki si separation */}
        <div className="space-y-0">
          <Expertise />
          <AllServices />
          <Portfolio />
          <Team />
          <Contact />
        </div>

        <Footer /> 
      </div>
    </div>
  );
}

export default App;