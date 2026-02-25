import React from 'react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const Team = () => {
  const founders = [
    {
      id: "01",
      name: "Hammad Khalil",
      role: "CO-FOUNDER & CTO", 
      bio: "The technical architect driving NovaStack's engineering vision. Expert in building complex, scalable digital ecosystems.",
      image: "/hammad.jpg",
      linkedin: "https://www.linkedin.com/in/muhammad-hammad-khalil/",
      portfolio: "Hammadkhalil.me"
    },
    {
      id: "02",
      name: "Usman Wajid",
      role: "CO-FOUNDER & COO", // Operations Head
      bio: "Leading operational excellence and product strategy. Ensuring every solution is optimized for business growth.",
      image: "/usman.jpg",
      linkedin: "https://www.linkedin.com/in/usmanwajid26/",
      portfolio: "Usmanwajid.com"
    },
    {
      id: "03",
      name: "Bilal Khaliq",
      role: "CO-FOUNDER & CGO", // Growth Head 
      bio: "Strategic growth expert focused on client relations and expanding NovaStack's global footprint through smart lead acquisition.",
      image: "/bilal.jpg",
      linkedin: "https://www.linkedin.com/in/bilal-khaliq-69bb54291/",
      email: "Khaliqbilal53@gmail.com",
      portfolio: "#"
    }
  ];

  return (
    <section id="team" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-green-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-2">BEHIND THE VISION</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-none tracking-tighter">
            THE <span className="text-zinc-800 text-outline-white italic">FOUNDERS</span>
          </h3>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {founders.map((founder) => (
            <div key={founder.id} className="group relative bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500">
              
              <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-6 items-center md:items-start relative z-10">
                {/* Image Area */}
                <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl shadow-black">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                </div>

                {/* Info Area */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-white mb-1 italic tracking-tight">{founder.name}</h4>
                  <p className="text-green-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{founder.role}</p>
                  
                  <p className="text-zinc-400 text-[11px] leading-relaxed mb-6 italic opacity-80 line-clamp-3">
                    "{founder.bio}"
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    {/* Portfolio/Contact Button */}
                    <a href={founder.portfolio} className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-[9px] font-black uppercase hover:bg-green-500 transition-colors duration-300">
                    PORTFOLIO <ExternalLink size={10} />
                    </a>

                    {/* Socials */}
                    <div className="flex gap-2">
                      <a href={founder.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all">
                        <Linkedin size={14} />
                      </a>
                      <a href={`mailto:${founder.email || 'hello@novastack.tech'}`} className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all">
                        <Mail size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute -bottom-2 -right-2 text-zinc-800/10 font-black italic text-8xl pointer-events-none group-hover:text-green-500/5 transition-colors">
                {founder.id}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;