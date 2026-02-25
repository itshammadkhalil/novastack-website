import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, ShoppingBag, Layout, Megaphone, Zap, 
  MessageSquareCode, PhoneCall, Search, Server, CheckCircle2 
} from 'lucide-react';

const fullServices = [
  { 
    title: "Custom Web Apps", 
    desc: "High-speed React & Vite solutions built for modern business needs.", 
    icon: <Code size={20}/>,
    features: ["React / Next.js", "State Management", "API Integration", "Secure Hosting"]
  },
  { 
    title: "AI Calling Agents", // Your special request
    desc: "Human-like AI voice agents for automated cold calling and support.", 
    icon: <PhoneCall size={20}/>,
    features: ["24/7 Cold Calling", "Natural Voice AI", "Auto-Scheduling", "CRM Integration"]
  },
  { 
    title: "Shopify Stores", 
    desc: "Futuristic e-commerce experiences designed for maximum conversions.", 
    icon: <ShoppingBag size={20}/>,
    features: ["Theme Customization", "App Integration", "Payment Setup", "Sales Analytics"]
  },
  { 
    title: "AI Automation (n8n)", 
    desc: "Smart workflows to connect your tools and save manual hours.", 
    icon: <Zap size={20}/>,
    features: ["Webhook Automation", "CRM Syncing", "Email Flows", "Custom Scrapers"]
  },
  { 
    title: "SEO & Performance", 
    desc: "Ranking your business on the first page of search results.", 
    icon: <Search size={20}/>,
    features: ["Technical SEO", "Speed Optimization", "Keyword Strategy", "Backlink Audit"]
  },
  { 
    title: "AI Integration", 
    desc: "Intelligent chatbots and custom AI agents for your business.", 
    icon: <MessageSquareCode size={20}/>,
    features: ["ChatGPT Training", "Customer Support Bots", "AI Copywriting", "Vector DBs"]
  },
  { 
    title: "Backend & Cloud", 
    desc: "Robust server-side architecture to handle massive user loads.", 
    icon: <Server size={20}/>,
    features: ["Node.js / Python", "Database Design", "AWS / Docker", "Microservices"]
  },
  { 
    title: "Meta Ads Scaling", 
    desc: "Data-driven marketing strategies to maximize your digital ROI.", 
    icon: <Megaphone size={20}/>,
    features: ["Ad Creative Strategy", "Pixel Integration", "Audience Research", "A/B Testing"]
  },
  { 
    title: "WordPress & CMS", 
    desc: "Sleek and manageable portfolios for brands and professionals.", 
    icon: <Layout size={20}/>,
    features: ["Custom Elementor", "SEO Optimization", "Speed Tuning", "Blog Setup"]
  }
];

const AllServices = () => {
  return (
    <section id="all-services" className="relative w-full py-16 md:py-24 bg-zinc-950 flex flex-col items-center justify-center border-t border-white/5 overflow-hidden">
      
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-none"
          >
            Our <span className="text-zinc-800 text-outline-white italic">Capabilities</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] max-w-2xl mx-auto"
          >
            High-Impact Technical Solutions for the Modern Enterprise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {fullServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-8 rounded-[3rem] bg-zinc-900/30 border border-white/5 hover:border-green-500/40 transition-all duration-500 group relative flex flex-col h-full"
            >
              <div className="text-green-500 mb-8 p-4 bg-zinc-800/50 w-fit rounded-2xl border border-white/10 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-green-500 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-zinc-500 text-xs font-medium leading-relaxed mb-8">
                {service.desc}
              </p>

              <div className="space-y-3 mt-auto pt-6 border-t border-white/5">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-green-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute top-6 right-8 text-zinc-800/20 font-black italic text-4xl group-hover:text-green-500/5">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllServices;