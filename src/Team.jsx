import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: "Hammad Khalil",
    role: "Co-Founder & Head of Growth",
    bio: "Driving business growth, front-end architecture, and automating workflows. Focused on turning complex problems into scalable, high-converting digital solutions.",
    image: "/hammad.jpg", 
    accent: "from-green-400 to-emerald-600",
    linkedin: "https://www.linkedin.com/in/muhammad-hammad-khalil/",
    email: "mailto:hello@hammadkhalil.me"
  },
  {
    name: "Usman Wajid",
    role: "Co-Founder & Head of Technology",
    bio: "Masterminding core architecture, backend systems, and AI/ML integrations. Dedicated to building robust, future-proof logic and secure databases.",
    image: "/usman.jpg", 
    accent: "from-blue-400 to-indigo-600",
    linkedin: "https://www.linkedin.com/in/usmanwajid26/",
    email: "mailto:Hello@usmanwajid.com"
  }
];

const Team = () => {
  return (
    <section id="founders" className="relative w-full py-16 md:py-24 bg-zinc-950/50 flex flex-col items-center justify-center border-t border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-zinc-800/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter italic"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-white">Founders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-zinc-500 max-w-2xl mx-auto text-xs md:text-lg font-bold uppercase tracking-widest leading-relaxed"
          >
            The visionaries behind NovaStack, combining engineering excellence with strategic growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-[2.5rem] bg-zinc-900/40 border border-white/5 p-8 md:p-12 backdrop-blur-xl hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col items-center text-center min-h-fit md:min-h-[500px]"
            >
              <div className="relative w-28 h-28 md:w-40 md:h-40 mb-6 md:mb-8">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.accent} opacity-20 group-hover:opacity-60 blur-xl transition-opacity duration-500 animate-pulse`}></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative w-full h-full object-cover rounded-full border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 z-10"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic mb-2">{member.name}</h3>
              <div className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r ${member.accent} mb-6`}>
                {member.role}
              </div>
              
              <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed mb-8 flex-grow max-w-sm">
                {member.bio}
              </p>

              <div className="flex items-center gap-4">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-all duration-300 p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={member.email} 
                  className="hover:text-white transition-all duration-300 p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;