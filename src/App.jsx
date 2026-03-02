import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AllServices from './components/AllServices';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen flex flex-col overflow-x-hidden selection:bg-green-500/30">
      <Navbar />
      
      <main className="flex-1 w-full relative">
        <Hero />
        <AllServices />
        <Expertise />
        <Portfolio />
        <Team />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;