import React from 'react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const Founders = () => {
  const founders = [
    {
      name: "Hammad Khalil",
      role: "Lead Software Architect", // Purana Role
      bio: "Crafting scalable digital architectures and turning complex problems into seamless web experiences at NovaStack.",
      image: "/hammad.jpg", 
      portfolio: "https://hammadkhalil.me",
      linkedin: "https://www.linkedin.com/in/muhammad-hammad-khalil/",
      email: "Hello@hammadkhalil.me"
    },
    {
      name: "Usman Wajid",
      role: "Operations & Strategy", // Purana Role
      bio: "Strategizing growth and ensuring every project at NovaStack meets the highest standards of innovation and efficiency.",
      image: "/Usman.jpg",
      portfolio: "https://Usmanwajid.com",
      linkedin: "https://www.linkedin.com/in/usmanwajid26/",
      email: "Hello@usmanwajid.com"
    }
  ];

  return (
    <section id="founders" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-green-500 font-bold mb-4">Behind the Vision</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-none">
            The <span className="text-zinc-800">Founders</span>
          </h3>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {founders.map((founder, index) => (
            <div key={index} className="group relative bg-zinc-900/30 border border-white/5 p-8 rounded-[2rem] hover:border-green-500/50 transition-all duration-500 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                
                {/* Profile Image */}
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/200" }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">{founder.name}</h4>
                  <p className="text-green-500 text-xs font-black uppercase tracking-widest mb-4">{founder.role}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">"{founder.bio}"</p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
                    <a href={founder.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-zinc-950 px-5 py-2 rounded-xl text-xs font-black uppercase italic hover:bg-green-400 transition-all">
                      Portfolio <ExternalLink size={14} />
                    </a>
                    
                    <div className="flex gap-2">
                      <a href={founder.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white p-2 bg-white/5 rounded-lg transition-colors border border-white/5">
                        <Linkedin size={18} />
                      </a>
                      <a href={`mailto:${founder.email}`} className="text-zinc-500 hover:text-white p-2 bg-white/5 rounded-lg transition-colors border border-white/5">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle Numbering */}
              <span className="absolute -bottom-6 -right-2 text-9xl font-black text-white/[0.02] italic select-none">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;