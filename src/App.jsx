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
    <div className="bg-zinc-950 min-h-screen flex flex-col overflow-x-hidden selection:bg-green-500/30">
      <Navbar />
      
     
      <main className="flex-1 w-full relative z-auto">
        <Hero />
        <Expertise />
        <AllServices />
        <Portfolio />
        <Team />
        <Contact /> 
      </main>
      
      <Footer />
    </div>
  );
}

export default App;