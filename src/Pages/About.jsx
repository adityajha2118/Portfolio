import React, { useEffect, memo } from "react";
import { FileText, Code, Sparkles, GraduationCap, Target } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";

// HEADER
const Header = memo(() => (
  <div className="text-center lg:mb-12 mb-6 px-[5%]">
    <h2 
      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 font-grotesk"
      data-aos="zoom-in-up"
    >
      About Me
    </h2>
    <p className="mt-2 text-slate-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2">
      <Sparkles className="w-5 h-5 text-sky-400" />
      Transforming data into intelligent systems
      <Sparkles className="w-5 h-5 text-sky-400" />
    </p>
  </div>
));

// PROFILE SECTION
const ProfileSection = memo(() => (
  <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
    <div className="space-y-6 text-center lg:text-left" data-aos="fade-right">
      <h3 className="text-3xl font-bold text-white mb-2">Who I Am</h3>
      <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
        I am a Data Science and Machine Learning Engineer focused on solving complex business problems through predictive modeling, data engineering, and advanced analytics. With experience spanning both industry applications and academic research, I specialize in bridging the gap between raw data and actionable insights.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-colors text-left">
          <GraduationCap className="w-6 h-6 text-cyan-400 mb-2" />
          <h4 className="text-white font-semibold mb-1">Education</h4>
          <p className="text-sm text-slate-400">B.Tech in Data Science &<br/>Artificial Intelligence</p>
        </div>
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition-colors text-left">
          <Target className="w-6 h-6 text-cyan-400 mb-2" />
          <h4 className="text-white font-semibold mb-1">Core Competency</h4>
          <p className="text-sm text-slate-400">Predictive Modeling &<br/>Business Intelligence</p>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col lg:flex-row gap-4 pt-6">
        <a href="https://drive.google.com/file/d/1-wdU9fSMaN-SMNSwTYX87R6QOvLo01lK/view?usp=sharing">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white flex items-center justify-center gap-2 hover:scale-105 transition shadow-lg shadow-cyan-500/20 w-full sm:w-auto font-semibold">
            <FileText className="w-5 h-5" /> Download CV
          </button>
        </a>
        <a href="#Portofolio">
          <button className="px-6 py-3 rounded-xl border border-cyan-500/30 text-cyan-400 flex items-center justify-center gap-2 hover:bg-cyan-500/10 transition w-full sm:w-auto font-semibold">
            <Code className="w-5 h-5" /> View Analytics Projects
          </button>
        </a>
      </div>
    </div>

    <div className="flex justify-center items-center" data-aos="fade-left">
      <div className="relative group">
        <div className="absolute -inset-6 opacity-30 z-0 hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 rounded-full blur-2xl animate-spin-slower" />
        </div>
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.2)] border-2 border-white/10 group-hover:border-cyan-400/50 transition-colors duration-500 bg-slate-900">
          <img
            src="/myimage.png"
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] lg:px-[10%] pt-20" id="About">
      <Header />
      <div className="w-full mx-auto pt-8">
        <ProfileSection />
        <Experience />
        <TechStack />
      </div>
    </div>
  );
};

export default memo(AboutPage);