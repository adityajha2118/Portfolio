import React, { useEffect, memo } from "react";
import { FileText, Github, ExternalLink, BookOpen, BrainCircuit } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const RESEARCH_INTERESTS = [
  "Explainable AI (XAI)",
  "Multi-Agent Systems",
  "Generative AI",
  "Federated Learning",
  "Network Intelligence",
  "Edge AI",
  "LLM Security",
  "Predictive Modeling"
];

const PUBLICATIONS = [
  {
    title: "LLM-based nutrition systems",
    type: "Research Paper",
    venue: "ICDSINC 2025",
    date: "2025",
    description: "Research paper on LLM-based nutrition systems published at ICDSINC 2025.",
    links: {
      pdf: "#"
    }
  },
  {
    title: "A Layered Sentinel Defense for LLM Multi-Agent Communication",
    type: "Under Review",
    venue: "Under Review",
    date: "2026",
    description: "Authored “A Layered Sentinel Defense for LLM Multi-Agent Communication” – under review, 2026.",
    links: {
      pdf: "#"
    }
  },
  {
    title: "Paper published Oral at LION 2026",
    type: "Oral Presentation",
    venue: "LION 2026, Italy",
    date: "2026",
    description: "Paper published Oral at LION 2026, Italy.",
    links: {
      pdf: "#"
    }
  }
];

const ResearchCard = memo(({ pub, index }) => (
  <div data-aos="fade-up" data-aos-delay={index * 100} className="relative group bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
    <div className="relative z-10 flex flex-col h-full">
      <span className="inline-block w-fit px-3 py-1 mb-4 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase border border-cyan-500/20">
        {pub.type}
      </span>
      <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-300 transition-colors">{pub.title}</h3>
      <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">{pub.description}</p>
      <div className="text-xs text-slate-500 font-medium mb-6 flex justify-between items-center border-t border-white/10 pt-4">
        <span>{pub.venue}</span>
        <span>{pub.date}</span>
      </div>
      
      <div className="flex gap-3 mt-auto">
        {pub.links.pdf && (
          <a href={pub.links.pdf} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/10 transition-colors">
            <FileText className="w-4 h-4" /> PDF
          </a>
        )}
        {pub.links.github && (
          <a href={pub.links.github} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/10 transition-colors">
            <Github className="w-4 h-4" /> Code
          </a>
        )}
        {pub.links.doi && (
          <a href={pub.links.doi} className="flex items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 text-white border border-white/10 transition-colors" title="View DOI">
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  </div>
));

const ResearchPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="h-auto py-20 text-white px-[5%] lg:px-[10%]" id="Research">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 mb-4 font-grotesk" data-aos="zoom-in-up">
          Research & Innovation
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
          Exploring the frontiers of machine learning, focusing on interpretability, security, and distributed intelligence.
        </p>
      </div>

      {/* RESEARCH INTERESTS */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
          <BrainCircuit className="w-6 h-6 text-cyan-400" />
          <h3 className="text-2xl font-bold text-white">Research Interests</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {RESEARCH_INTERESTS.map((interest, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 50} className="px-4 py-2 rounded-xl bg-slate-800/50 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 text-slate-200 font-medium">
              {interest}
            </div>
          ))}
        </div>
      </div>

      {/* PUBLICATIONS & REPORTS */}
      <div>
        <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
          <BookOpen className="w-6 h-6 text-cyan-400" />
          <h3 className="text-2xl font-bold text-white">Publications & Reports</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PUBLICATIONS.map((pub, idx) => (
            <ResearchCard key={idx} pub={pub} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ResearchPage);
