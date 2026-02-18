import React from 'react';
import { motion } from 'framer-motion';
import { Code, ShoppingBag, Layout, Megaphone, Zap, MessageSquareCode } from 'lucide-react';

const fullServices = [
  { title: "Custom Web Apps", desc: "High-speed React & Vite solutions built for modern business needs.", icon: <Code size={24}/> },
  { title: "Shopify Stores", desc: "Futuristic e-commerce experiences designed for maximum conversions.", icon: <ShoppingBag size={24}/> },
  { title: "WordPress & CMS", desc: "Sleek and manageable portfolios for brands and tech professionals.", icon: <Layout size={24}/> },
  { title: "Meta Ads Scaling", desc: "Data-driven marketing strategies to maximize your brand's digital ROI.", icon: <Megaphone size={24}/> },
  { title: "n8n Automation", desc: "Smart workflows to connect your tools and save hundreds of manual hours.", icon: <Zap size={24}/> },
  { title: "AI Integration", desc: "Intelligent chatbots and custom AI agents to boost business efficiency.", icon: <MessageSquareCode size={24}/> }
];

const AllServices = () => {
  return (
    <section id="all-services" className="relative w-full py-24 bg-zinc-950/50 border-t border-zinc-900/50 overflow-hidden">
      
      {/* Background decoration for premium feel */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Services</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-zinc-500 text-lg max-w-2xl mx-auto"
          >
            End-to-end technical excellence to transform your digital presence and automate your success.
          </motion.p>
          
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fullServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // GLASS EFFECT: Yahan bg-zinc-900/40 aur backdrop-blur-md use kiya hai
              className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-green-500/30 hover:bg-zinc-900/60 transition-all duration-500 group relative overflow-hidden backdrop-blur-md"
            >
              <div className="relative z-10 text-green-400 mb-6 p-4 bg-zinc-800/50 w-fit rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all duration-300 border border-white/5">
                {service.icon}
              </div>
              <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{service.title}</h3>
              <p className="relative z-10 text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllServices;