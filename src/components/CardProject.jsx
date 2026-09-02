import React from 'react';
import { ArrowRight, Github, ExternalLink, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const CardProject = ({ project, index }) => {
  const { id, Img, Title, Description, TechStack, Github: GithubLink, LiveDemo } = project;

  return (
    <div 
      className="group relative flex flex-col h-full bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]"
      data-aos="fade-up" 
      data-aos-delay={(index % 3) * 100}
    >
      {/* GLOW EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* IMAGE */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img
          src={Img ? `/${Img}` : '/project-placeholder.png'}
          alt={Title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {Title}
        </h3>
        
        <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
          {Description}
        </p>

        {/* TECH STACK CHIPS */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TechStack && TechStack.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2 py-1 text-[11px] font-medium uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded">
              {tech}
            </span>
          ))}
          {TechStack && TechStack.length > 4 && (
            <span className="px-2 py-1 text-[11px] font-medium text-slate-400 bg-white/5 border border-white/10 rounded">
              +{TechStack.length - 4}
            </span>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex gap-3">
            {GithubLink && (
              <a href={GithubLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/5">
                <Github className="w-4 h-4" />
              </a>
            )}
            {LiveDemo && (
              <a href={LiveDemo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-colors border border-white/5">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <Link
            to={id ? `/project/${id}` : '#'}
            className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
          >
            Case Study
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProject;