import React, { useState, useEffect, memo } from "react";
import { Github, Linkedin, Mail, ExternalLink, Sparkles, Download, BookOpen } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// STATUS BADGE
const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="fade-down">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
      <div className="relative px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-sky-400 to-cyan-400 text-transparent bg-clip-text text-sm font-semibold flex items-center tracking-wide">
          <Sparkles className="w-4 h-4 mr-2 text-sky-400" />
          Available for Opportunities
        </span>
      </div>
    </div>
  </div>
));

// TITLE
const MainTitle = memo(() => (
  <div className="space-y-4" data-aos="fade-right" data-aos-delay="100">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-grotesk leading-tight">
      <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
        Machine Learning &
      </span>
      <br />
      <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Data Analytics Engineer
      </span>
    </h1>
  </div>
));

// TECH TAG
const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-slate-300 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default">
    {tech}
  </div>
));

// BUTTON
const CTAButton = memo(({ href, text, icon: Icon, primary, outline }) => {
  const baseClasses = "relative h-12 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 px-6 overflow-hidden group";
  
  if (primary) {
    return (
      <a href={href} className="w-full sm:w-auto">
        <button className={baseClasses}>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-500 group-hover:scale-105 transition-transform duration-500"></div>
          <span className="relative text-white flex items-center gap-2">
            {text} <Icon className="w-4 h-4" />
          </span>
        </button>
      </a>
    );
  }

  if (outline) {
    return (
      <a href={href} className="w-full sm:w-auto">
        <button className={`${baseClasses} border border-cyan-500/30 hover:border-cyan-400 bg-black/20 hover:bg-cyan-500/10`}>
          <span className="relative text-cyan-400 flex items-center gap-2 group-hover:text-cyan-300">
            {text} <Icon className="w-4 h-4" />
          </span>
        </button>
      </a>
    );
  }

  return (
    <a href={href} className="w-full sm:w-auto">
      <button className={`${baseClasses} bg-slate-800/50 border border-white/10 hover:bg-slate-700/50 hover:border-white/20`}>
        <span className="relative text-gray-200 flex items-center gap-2">
          {text} <Icon className="w-4 h-4" />
        </span>
      </button>
    </a>
  );
});

// SOCIAL ICON
const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group relative" aria-label={label}>
    <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
    <div className="relative p-3 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 group-hover:border-cyan-500/50 group-hover:-translate-y-1 transition-all duration-300">
      <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
    </div>
    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 border border-white/10 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      {label}
    </div>
  </a>
));

const STATS = [
  { value: "5+", label: "Projects Completed" },
  { value: "3+", label: "Publications" },
  { value: "2", label: "Internships" },
  { value: "1", label: "Hackathon Win" }
];

const TECH_STACK = [
  "Python", "PyTorch", "TensorFlow", "Transformers", 
  "LangChain", "OpenCV", "Vision-Language Models", "FastAPI", 
  "Deep Learning", "Docker", "GCP", "SQL"
];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/adityajha2118", label: "GitHub" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/aditya-kumar-jha-430163321/", label: "LinkedIn" },
  { icon: BookOpen, link: "#Research", label: "Google Scholar" },
  { icon: Mail, link: "mailto:your.email@example.com", label: "Email" },
  { icon: ExternalLink, link: "#", label: "Kaggle" }
];

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 50 });
  }, []);

  return (
    <div className="min-h-screen bg-transparent overflow-hidden px-[5%] lg:px-[10%] pt-24 pb-16" id="Home">
      <div className="container mx-auto min-h-screen flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-full lg:max-w-4xl space-y-8 z-10">
            <StatusBadge />
            <MainTitle />

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed" data-aos="fade-right" data-aos-delay="200">
              Building intelligent systems using Machine Learning, Data Analytics, Generative AI, and scalable data pipelines to transform raw data into actionable business insights.
            </p>

            <div className="flex flex-wrap gap-2.5 max-w-xl" data-aos="fade-right" data-aos-delay="300">
              {TECH_STACK.map((tech, index) => (
                <TechStack key={index} tech={tech} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4" data-aos="fade-right" data-aos-delay="400">
              <CTAButton href="#Portofolio" text="Explore Projects" icon={ExternalLink} primary />
              <CTAButton href="https://drive.google.com/file/d/1-wdU9fSMaN-SMNSwTYX87R6QOvLo01lK/view?usp=sharing" text="Download Resume" icon={Download} />
              <CTAButton href="#Research" text="Research Papers" icon={BookOpen} outline />
            </div>

            <div className="flex gap-4 pt-2" data-aos="fade-right" data-aos-delay="500">
              {SOCIAL_LINKS.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>
          </div>
        </div>

        {/* STATS COUNTER */}
        <div className="w-full mt-24 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6 z-10" data-aos="fade-up" data-aos-delay="600">
          {STATS.map((stat, idx) => (
            <div key={idx} className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 text-center">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent font-grotesk">{stat.value}</h3>
              <p className="mt-2 text-sm text-cyan-400 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default memo(Home);