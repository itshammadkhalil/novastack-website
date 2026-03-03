import React from 'react';
import { Code2, Smartphone, Zap, Cpu, Database, Layout, ShieldCheck, Globe } from 'lucide-react';

const Expertise = () => {
  const skills = [
    {
      title: "Custom Web Solutions",
      icon: <Globe size={20} />,
      desc: "High-performance, scalable web apps built with precision.",
      stack: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind"],
      more: "+8"
    },
    {
      title: "Mobile App Dev",
      icon: <Smartphone size={20} />,
      desc: "Cross-platform excellence for iOS and Android devices.",
      stack: ["React Native", "Flutter", "Firebase", "Expo"],
      more: "+5"
    },
    {
      title: "Business Automation",
      icon: <Zap size={20} />,
      desc: "Smart workflows and AI integration to scale operations.",
      stack: ["Python", "OpenAI", "LangChain", "Make.com"],
      more: "+12"
    },
    {
      title: "Software Architecture",
      icon: <Cpu size={20} />,
      desc: "Robust system design for complex enterprise problems.",
      stack: ["Docker", "AWS", "Microservices", "Kubernetes"],
      more: "+6"
    }
  ];

  return (
    
    <section id="expertise" className="relative w-full py-24 bg-zinc-950 px-6 flex-shrink-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            Our <span className="text-green-500">Expertise</span>
          </h2>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 will-change-transform">
          {skills.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-zinc-900/40 border border-white/5 p-6 rounded-3xl hover:border-green-500/30 transition-all duration-500 flex flex-col justify-between min-h-[250px] w-full will-change-transform contain-layout"
            >
              
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;