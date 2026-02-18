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
    linkedin: "https://www.linkedin.com/in/muhammad-hammad-khalil/", // Hammad's Link
    email: "mailto:hello@hammadkhalil.me" // Hammad's Email
  },
  {
    name: "Usman Wajid",
    role: "Co-Founder & Head of Technology",
    bio: "Masterminding core architecture, backend systems, and AI/ML integrations. Dedicated to building robust, future-proof logic and secure databases.",
    image: "/usman.jpg", 
    accent: "from-blue-400 to-indigo-600",
    linkedin: "https://www.linkedin.com/in/usmanwajid26/", // Usman's Link
    email: "mailto:Hello@usmanwajid.com" // Usman's Email
  }
];

const Team = () => {
  return (
    <section id="founders" className="relative w-full py-24 bg-zinc-950/50 flex flex-col items-center justify-center border-t border-zinc-900/50 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-white">Founders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            The visionaries behind NovaStack, combining engineering excellence with strategic growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-[2rem] bg-zinc-900/40 border border-white/5 p-10 backdrop-blur-md hover:border-white/10 transition-all duration-300 overflow-hidden flex flex-col items-center text-center min-h-[450px] justify-center"
            >
              <div className="relative w-32 h-32 mb-6">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.accent} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500`}></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative w-full h-full object-cover rounded-full border-2 border-zinc-800 group-hover:border-transparent transition-colors duration-300 z-10"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{member.name}</h3>
              <div className={`text-sm font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${member.accent} mb-4`}>
                {member.role}
              </div>
              
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                {member.bio}
              </p>

              <div className="flex items-center gap-4 text-zinc-600">
                {/* LinkedIn Link */}
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors p-2 bg-zinc-800/30 rounded-lg border border-white/5"
                >
                  <Linkedin size={20} />
                </a>
                {/* Email Link */}
                <a 
                  href={member.email} 
                  className="hover:text-white transition-colors p-2 bg-zinc-800/30 rounded-lg border border-white/5"
                >
                  <Mail size={20} />
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