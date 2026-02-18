import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, BrainCircuit, Workflow } from 'lucide-react';

const services = [
  {
    title: "Custom Web Solutions",
    description: "High-performance, scalable web applications built with React, Node.js, and solid C++ backends for complex logic.",
    icon: <LayoutTemplate size={32} className="text-green-400" />,
    delay: 0.1
  },
  {
    title: "AI & Machine Learning",
    description: "Custom AI models, intelligent chatbots, and predictive algorithms integrated seamlessly into your existing business systems.",
    icon: <BrainCircuit size={32} className="text-blue-400" />,
    delay: 0.2
  },
  {
    title: "Business Automation",
    description: "Smart workflows and automated growth engines that connect your apps, save hours of manual work, and scale Meta Ads data.",
    icon: <Workflow size={32} className="text-emerald-400" />,
    delay: 0.3
  }
];

const Services = () => {
  return (
    // 'id="services"' check kar lein taake link kaam kare
    <section id="services" className="relative w-full py-24 bg-zinc-950/50 flex flex-col items-center justify-center border-t border-zinc-900/50 overflow-hidden">
      
      {/* 1. Subtle Radial Gradient Overlay - Section ko depth dene ke liye */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We don't just write code; we engineer solutions that solve complex problems and drive automated growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              // 2. Glassmorphism Design - bg-zinc-900/40 aur backdrop-blur lagaya hai
              className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:bg-zinc-900/60 hover:border-green-500/30 transition-all duration-500"
            >
              {/* 3. Card Hover Glow - Card ke peeche halka sa glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-500 border border-white/5">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;