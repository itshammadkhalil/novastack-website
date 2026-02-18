import React from 'react';
import { motion } from 'framer-motion';
import { Code, ShoppingBag, Layout, Megaphone, Zap, MessageSquareCode } from 'lucide-react';

const fullServices = [
  { title: "Custom Web Apps", desc: "High-speed React & Vite solutions built for modern business needs.", icon: <Code size={20}/> },
  { title: "Shopify Stores", desc: "Futuristic e-commerce experiences designed for maximum conversions.", icon: <ShoppingBag size={20}/> },
  { title: "WordPress & CMS", desc: "Sleek and manageable portfolios for brands and tech professionals.", icon: <Layout size={20}/> },
  { title: "Meta Ads Scaling", desc: "Data-driven marketing strategies to maximize your brand's digital ROI.", icon: <Megaphone size={20}/> },
  { title: "n8n Automation", desc: "Smart workflows to connect your tools and save hundreds of manual hours.", icon: <Zap size={20}/> },
  { title: "AI Integration", desc: "Intelligent chatbots and custom AI agents to boost business efficiency.", icon: <MessageSquareCode size={20}/> }
];

const AllServices = () => {
  return (
    <section id="all-services" className="relative w-full py-16 md:py-24 bg-zinc-950/50 border-t border-white/5 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter italic"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Services</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-zinc-500 text-xs md:text-lg font-bold uppercase tracking-widest leading-relaxed max-w-2xl mx-auto"
          >
            End-to-end technical excellence to transform your digital presence and automate your success.
          </motion.p>
          
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto"></div>
        </div>

        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {fullServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-green-500/30 hover:bg-zinc-900/60 transition-all duration-500 group relative overflow-hidden backdrop-blur-xl"
            >
              {/* Icon Container */}
              <div className="relative z-10 text-green-400 mb-6 p-4 bg-white/5 w-fit rounded-2xl border border-white/10 group-hover:scale-110 group-hover:bg-green-500/10 transition-all duration-500">
                {service.icon}
              </div>

              {/* Text Content in NovaStack Style */}
              <h3 className="relative z-10 text-xl font-black text-white uppercase tracking-tighter italic mb-3 group-hover:text-green-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="relative z-10 text-zinc-500 text-sm font-medium leading-relaxed">
                {service.desc}
              </p>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllServices;