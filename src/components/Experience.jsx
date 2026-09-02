import React, { memo } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const EXPERIENCES = [
  {
    role: "AI Project Intern",
    company: "University of Messina",
    location: "Messina, Italy (Onsite)",
    period: "March 2026 - Present",
    type: "Internship",
    responsibilities: [
      "Designed and iterated a 124-case evaluation benchmark – spanning synthetic scenarios and real-world adversarial attacks (AgentDojo, FBI IC3, LLMail-Inject, Microsoft MDDR) – to stress-test a multi-agent LLM system beyond clean validation data.",
      "Diagnosed failure modes of an initial architecture (Recall 0.435) through case-by-case error analysis, then redesigned the scoring/aggregation scheme to close every identified gap, achieving perfect recall (1.000) with zero false negatives.",
      "Benchmarked LLM-based reasoning against six traditional ML classifiers trained on 32 hand-crafted features, quantifying exactly where each approach failed on subtle, adversarial inputs (F1 = 0.918)."
    ],
    skills: ["Python", "LangGraph", "Groq API", "FastAPI"],
    achievements: "Achieved perfect recall (1.000) with zero false negatives by redesigning scoring/aggregation scheme."
  },
  {
    role: "Machine Learning Intern",
    company: "Samsung Research & Development Institute",
    location: "Remote",
    period: "Nov 2025 - May 2026",
    type: "Internship",
    responsibilities: [
      "Designed a 20-configuration evaluation grid (4 distance metrics × 5 similarity thresholds) to systematically benchmark a face-verification model's (DeepFace) accuracy for person re-identification.",
      "Identified the best-performing metric/threshold combination through a full accuracy comparison across the grid, rather than relying on default settings.",
      "Surveyed datasets, generative models, and open-source tools for high-resolution person-image generation with identity-consistent variations, to inform the team's modeling strategy."
    ],
    skills: ["Python", "DeepFace", "Face Verification"],
    achievements: "Systematically benchmarked face-verification accuracy to identify the optimal metric/threshold combination."
  }
];

const ExperienceCard = memo(({ exp, index }) => (
  <div className="relative pl-8 md:pl-0" data-aos="fade-up" data-aos-delay={index * 100}>
    {/* Timeline Line & Dot (Mobile/Desktop distinct) */}
    <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>
    <div className="md:hidden absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22D3EE]"></div>
    
    <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
      {/* Desktop Center Timeline */}
      <div className="hidden md:block w-5/12"></div>
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_15px_#22D3EE] z-10"></div>
      
      {/* Content Card */}
      <div className="w-full md:w-5/12 mb-8 md:mb-0 group">
        <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase border border-cyan-500/20">
              {exp.type}
            </span>
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-400 text-sm mb-4">
              <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {exp.company}</span>
              <span className="hidden sm:block text-slate-600">•</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {exp.period}</span>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/5">
              <p className="text-sm text-slate-300"><strong className="text-white">Key Achievement:</strong> {exp.achievements}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-800 rounded border border-white/10 text-cyan-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const Experience = () => {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="w-full py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 mb-4" data-aos="fade-up">
          Professional Journey
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          My track record in applying machine learning research and data analytics in both industry and academic environments.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Desktop Vertical Line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"></div>
        
        <div className="space-y-0 md:space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Experience);
