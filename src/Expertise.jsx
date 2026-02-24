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
    <section id="expertise" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            Our <span className="text-green-500">Expertise</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            We don't just write code; we engineer solutions that solve complex problems and drive automated growth for your brand.
          </p>
        </div>

        {/* Grid: Mobile par 1 column (agar clean chahiye) ya 2 columns (agar height bachani hai) */}
        {/* Maine 'grid-cols-2' rakha hai mobile ke liye taake page bohot lamba na ho */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((item, index) => (
            <div key={index} className="group relative bg-zinc-900/40 border border-white/5 p-6 rounded-3xl hover:border-green-500/30 transition-all duration-500 flex flex-col justify-between min-h-[250px]">
              
              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 bg-zinc-800/50 rounded-2xl flex items-center justify-center text-green-500 mb-6 border border-white/5 group-hover:bg-green-500 group-hover:text-black transition-all">
                  {item.icon}
                </div>

                <h4 className="text-white font-bold text-lg mb-2 italic tracking-tight uppercase">
                  {item.title}
                </h4>
                
                <p className="text-zinc-500 text-[11px] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Tech Stack Badges & More Count */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.stack.map((tech, i) => (
                    <span key={i} className="text-[9px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <span className="text-zinc-600 font-black text-xs group-hover:text-green-500 transition-colors uppercase">
                    {item.more}
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;