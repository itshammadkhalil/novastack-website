import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, ShoppingBag, Layout, Megaphone, Zap, 
  MessageSquareCode, PhoneCall, Search, Server, CheckCircle2, Terminal
} from 'lucide-react';

const fullServices = [
  { 
    title: "AI Calling Agents", 
    desc: "Human-like AI voice agents for automated cold calling, lead qualification, and 24/7 customer support.", 
    icon: <PhoneCall size={20}/>,
    features: ["Natural Voice AI", "Auto-Scheduling & CRM", "Multi-lingual Support", "Outbound/Inbound Logic"],
    stack: "Vapi, Retell, Bland, ElevenLabs + 10 more"
  },
  { 
    title: "Custom Web Apps", 
    desc: "From high-conversion business websites to complex enterprise-grade SaaS dashboards.", 
    icon: <Code size={20}/>,
    features: ["Next.js / React Systems", "E-commerce & Portals", "Custom UI/UX Engineering", "Scalable Architectures"],
    stack: "React, Vue, Node, Go, TS + 15 more"
  },
  { 
    title: "AI Automation (n8n)", 
    desc: "Connecting your business tools with smart workflows to save hundreds of manual work hours.", 
    icon: <Zap size={20}/>,
    features: ["Advanced n8n Flows", "Make.com Orchestration", "API & Webhook Syncing", "Custom Scraping Bots"],
    stack: "n8n, Python, Zapier, Supabase + 12 more"
  },
  { 
    title: "Shopify Stores", 
    desc: "Futuristic, high-speed e-commerce experiences engineered for maximum global conversions.", 
    icon: <ShoppingBag size={20}/>,
    features: ["Custom Liquid Coding", "App & Payment Logic", "Conversion Rate Optimization", "Automated Sales Funnels"],
    stack: "Shopify, Liquid, Hydrogen + 8 more"
  },
  { 
    title: "Backend & Cloud", 
    desc: "Robust server-side architecture built to handle massive traffic with zero downtime.", 
    icon: <Server size={20}/>,
    features: ["Serverless Architecture", "Database Optimization", "AWS / Docker / GCP", "Microservices Design"],
    stack: "PostgreSQL, MongoDB, AWS, Redis + 10 more"
  },
  { 
    title: "AI Integration", 
    desc: "Custom ChatGPT-powered agents and vector databases tailored for your proprietary data.", 
    icon: <MessageSquareCode size={20}/>,
    features: ["Custom LLM Training", "Knowledge Base Chatbots", "AI Data Analytics", "Semantic Search Tools"],
    stack: "OpenAI, LangChain, Pinecone + 9 more"
  },
  { 
    title: "SEO & Performance", 
    desc: "Technical SEO and speed audits to ensure your business stays on top of search results.", 
    icon: <Search size={20}/>,
    features: ["Core Web Vitals Fix", "Advanced Keyword Strategy", "Technical Site Audits", "Authority Building"],
    stack: "Ahrefs, Semrush, Lighthouse + 5 more"
  },
  { 
    title: "Meta Ads Scaling", 
    desc: "Data-driven advertising strategies to maximize your brand's digital presence and ROI.", 
    icon: <Megaphone size={20}/>,
    features: ["Creative Ad Strategy", "Pixel / API Tracking", "Precision Targeting", "Performance Reports"],
    stack: "Facebook, Instagram, TikTok Ads"
  },
  { 
    title: "WordPress & CMS", 
    desc: "Sleek, professional, and easily manageable web presences for elite brands.", 
    icon: <Layout size={20}/>,
    features: ["Custom Theme Dev", "CMS Security & Speed", "Responsive Design", "Seamless Migrations"],
    stack: "WordPress, PHP, Headless CMS"
  }
];

const AllServices = () => {
  return (
    <section id="all-services" className="relative w-full py-16 md:py-24 bg-zinc-950 flex flex-col items-center justify-center border-t border-white/5 overflow-hidden">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-none"
          >
            Core <span className="text-zinc-800 text-outline-white italic">Capabilities</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] max-w-2xl mx-auto"
          >
            Unlimited Technical Stack. Precision Engineering. Automated Growth.
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
              className="p-8 rounded-[3rem] bg-zinc-900/30 border border-white/5 hover:border-green-500/40 transition-all duration-500 group relative flex flex-col h-full overflow-hidden"
            >
              {/* Service Icon */}
              <div className="text-green-500 mb-8 p-4 bg-zinc-800/50 w-fit rounded-2xl border border-white/10 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                {service.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-green-500 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-zinc-500 text-[13px] leading-relaxed mb-8">
                {service.desc}
              </p>

              {/* Skills Breakdown */}
              <div className="space-y-3 mb-8 pt-6 border-t border-white/5">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-green-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-[9px] text-zinc-600 font-black uppercase tracking-widest">
                    <Terminal size={10} /> <span>Stack Expertise</span>
                 </div>
                 <div className="text-[10px] text-green-500/70 font-bold italic tracking-wide">
                    {service.stack}
                 </div>
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