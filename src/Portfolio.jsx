import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "SardarScent E-Commerce",
    category: "Futuristic Web Store",
    description: "A high-end, modern e-commerce platform for a premium perfume brand, optimized for seamless user experience, fast loading, and automated sales.",
    techStack: ["Shopify", "E-Commerce", "Liquid UI"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    link: "https://sardarscent.com"
  },
  {
    title: "Dr. Ibrahim Warsi Platform",
    category: "AI & Healthcare Portfolio",
    description: "A sleek, professional web presence for a prominent AI Scientist, featuring clean layouts to showcase research, publications, and technical expertise.",
    techStack: ["WordPress", "CMS", "SEO Optimized"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "https://ibrahimwarsi.com"
  },
  {
    title: "Lahori VIP Burger",
    category: "Restaurant UI/UX",
    description: "A vibrant, conversion-focused digital menu and website for a local fast-food brand to boost their online orders and digital presence.",
    techStack: ["Vite", "React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    link: "https://lahorivipburger.com"
  }
];

const Portfolio = () => {
  return (
    
    <section id="work" className="relative w-full py-24 min-h-[50vh] bg-zinc-950/50 flex flex-col items-center justify-center border-t border-zinc-900/50 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">Work</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-[2rem] bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-green-500/30 transition-all duration-500 backdrop-blur-md block cursor-pointer"
            >
            
              <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex flex-wrap gap-2 justify-center px-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-wider text-green-500 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between group-hover:text-green-400 transition-colors">
                  {project.title}
                  <ExternalLink size={18} className="text-zinc-600 group-hover:text-white transition-colors" />
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;