import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Mail, User, Briefcase, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '', 
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_cd64bmk',          
      'template_g9togap',        
      {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      },
      'O5YXVXAQaEWpjAb0s'        
    )
    .then((result) => {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', service: '', message: '' });
    }, (error) => {
        alert("Failed to send, please try again.");
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-zinc-950/50 flex flex-col items-center justify-center overflow-hidden border-t border-zinc-900/50 flex-shrink-0">
      
     
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Automate</span> Your Growth
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-zinc-500 max-w-2xl mx-auto text-lg"
          >
            Ready to build something amazing? Drop your project details below.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] backdrop-blur-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <User size={16} className="text-green-500" /> Your Name
                </label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-zinc-950/40 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-green-500/50 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <Mail size={16} className="text-green-500" /> Email Address
                </label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-zinc-950/40 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-green-500/50 transition-all" placeholder="john@company.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                <Briefcase size={16} className="text-green-500" /> Interested In
              </label>
              <div className="relative">
                <select 
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-zinc-950/40 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-green-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="AI Calling Agents">AI Calling Agents</option>
                  <option value="Custom Web Apps">Custom Web Apps</option>
                  <option value="AI Automation (n8n)">AI Automation (n8n)</option>
                  <option value="Shopify Stores">Shopify Stores</option>
                  <option value="Backend & Cloud">Backend & Cloud</option>
                  <option value="AI Integration">AI Integration</option>
                  <option value="SEO & Performance">SEO & Performance</option>
                  <option value="Meta Ads Scaling">Meta Ads Scaling</option>
                  <option value="WordPress & CMS">WordPress & CMS</option>
                  <option value="Other">Other Query</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                <MessageSquare size={16} className="text-green-500" /> Project Details
              </label>
              <textarea name="message" required rows="4" value={formData.message} onChange={handleChange} className="w-full bg-zinc-950/40 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-green-500/50 transition-all resize-none" placeholder="Tell us about your goals..."></textarea>
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-zinc-950 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.01]">
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;