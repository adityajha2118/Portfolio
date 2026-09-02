import React, { useEffect, memo } from "react";
import { Mail, MapPin, Clock, Globe, Briefcase, ChevronRight, Github, Linkedin } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = memo(() => (
  <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 relative group" data-aos="fade-right">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
    <h3 className="text-2xl font-bold text-white mb-6">Let's Collaborate</h3>
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400">Name</label>
          <input type="text" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400">Email</label>
          <input type="email" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="john@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-400">Subject</label>
        <input type="text" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="Project Inquiry / Job Opportunity" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-400">Message</label>
        <textarea rows="5" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none" placeholder="How can I help you?"></textarea>
      </div>
      <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-cyan-500/20">
        Send Message
      </button>
    </form>
  </div>
));

const InfoCard = memo(() => (
  <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8" data-aos="fade-left">
    <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">Status</h3>
        <p className="text-cyan-400 font-medium flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          Open to Opportunities
        </p>
      </div>
      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
        <Briefcase className="w-8 h-8 text-cyan-400" />
      </div>
    </div>

    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
          <MapPin className="w-5 h-5 text-slate-300" />
        </div>
        <div>
          <h4 className="text-white font-medium">Locations</h4>
          <p className="text-sm text-slate-400 mt-1">India & Italy (Remote/Hybrid)</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
          <Clock className="w-5 h-5 text-slate-300" />
        </div>
        <div>
          <h4 className="text-white font-medium">Response Time</h4>
          <p className="text-sm text-slate-400 mt-1">Usually within 24 hours</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
          <Globe className="w-5 h-5 text-slate-300" />
        </div>
        <div>
          <h4 className="text-white font-medium">Interests</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-300">Full-time</span>
            <span className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-300">Research</span>
            <span className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-300">Consulting</span>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-8 pt-8 border-t border-white/10">
      <h4 className="text-white font-medium mb-4">Quick Connect</h4>
      <div className="flex gap-4">
        <a href="mailto:your.email@example.com" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-white transition-all">
          <Mail className="w-4 h-4 text-cyan-400" /> Email
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-white transition-all">
          <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn
        </a>
      </div>
    </div>
  </div>
));

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="w-full py-24 bg-transparent px-[5%] lg:px-[10%]" id="Contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 mb-4 font-grotesk" data-aos="zoom-in-up">
          Get In Touch
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
          Interested in collaborating on intelligent systems, analytics, or machine learning research? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ContactForm />
        <InfoCard />
      </div>
    </div>
  );
};

export default memo(ContactPage);