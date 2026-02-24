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
    // 'flex flex-col' add kiya hai taake footer hamesha bottom par rahay
    <div className="relative min-h-screen bg-zinc-950 selection:bg-green-500/30 overflow-x-hidden flex flex-col">
      
      {/* 1. Global Background Tech Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none transform-gpu" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #3f3f46 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* 2. Optimized Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-green-500/10 rounded-full blur-[130px] pointer-events-none will-change-[opacity]"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Navbar yahan z-index ke sath */}
      <Navbar /> 

      {/* 3. Content Wrapper - 'flex-grow' footer ko niche dhakele ga */}
      <main className="relative z-10 transform-gpu flex-grow">
        <Hero />
        
        <div className="space-y-0">
          <Expertise />
          <AllServices />
          <Portfolio />
          <Team />
          <Contact />
        </div>
      </main>

      {/* Footer ab hamesha end par aayega */}
      <div className="relative z-10">
        <Footer /> 
      </div>
    </div>
  );
}

export default App;