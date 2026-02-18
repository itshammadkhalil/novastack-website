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
    <div className="relative min-h-screen bg-zinc-950 selection:bg-green-500/30 overflow-x-hidden">
      
      {/* 1. Global Background Tech Grid - 'fixed' ki jagah isay GPU accelerated rakhein */}
      <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none transform-gpu" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #3f3f46 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* 2. Optimized Glows - Pulse animation ko 'will-change' ke sath rakhein ya static rakhein agar blink na rukay */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-green-500/10 rounded-full blur-[130px] pointer-events-none will-change-[opacity]"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* 3. Content Wrapper - 'transform-gpu' add karne se scrolling smooth ho jati hai */}
      <div className="relative z-10 transform-gpu">
        <Navbar /> 
        <Hero />
        
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