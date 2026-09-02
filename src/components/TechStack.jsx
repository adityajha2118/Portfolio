import React, { memo } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TECH_CATEGORIES = [
  {
    title: "Data Analytics & BI",
    icon: "📊",
    skills: ["SQL", "Power BI", "Tableau", "Excel", "Pandas", "NumPy"]
  },
  {
    title: "Machine Learning & AI",
    icon: "🧠",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "LightGBM", "Optuna", "OpenCV", "Generative AI"]
  },
  {
    title: "Statistics & Math",
    icon: "📈",
    skills: ["Regression", "Hypothesis Testing", "Probability", "Bayesian Stats", "A/B Testing", "Time Series"]
  },
  {
    title: "Data Engineering",
    icon: "⚙️",
    skills: ["BigQuery", "PostgreSQL", "MongoDB", "Apache Spark", "PySpark", "Airflow", "Docker"]
  },
  {
    title: "NLP & LLMs",
    icon: "💬",
    skills: ["NLTK", "Transformers", "LangChain", "CrewAI", "LangGraph", "LlamaIndex"]
  },
  {
    title: "Full Stack & APIs",
    icon: "💻",
    skills: ["Python", "FastAPI", "REST APIs", "React", "Next.js", "Tailwind CSS"]
  }
];

const SkillBadge = memo(({ skill }) => (
  <div className="px-3 py-1.5 bg-slate-800/50 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]">
    {skill}
  </div>
));

const CategoryCard = memo(({ category, index }) => (
  <div 
    data-aos="fade-up" 
    data-aos-delay={index * 100}
    className="relative group bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-500"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-2xl group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-300">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <SkillBadge key={i} skill={skill} />
        ))}
      </div>
    </div>
  </div>
));

const TechStack = () => {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="w-full py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 mb-4" data-aos="fade-up">
          Technical Arsenal
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          A comprehensive toolkit bridging data engineering, advanced analytics, and machine learning to build end-to-end intelligent systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {TECH_CATEGORIES.map((category, index) => (
          <CategoryCard key={index} category={category} index={index} />
        ))}
      </div>
    </div>
  );
};

export default memo(TechStack);
