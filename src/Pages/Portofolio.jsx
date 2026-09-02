import React, { useEffect, useState, useCallback, memo } from "react";
import CardProject from "../components/CardProject";
import AOS from "aos";
import "aos/dist/aos.css";
import { HARDCODED_PROJECTS } from "../components/projects";

const Portofolio = () => {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const initialItems = 6;

  useEffect(() => {
    AOS.init({ once: true });
    setProjects(HARDCODED_PROJECTS);
  }, []);

  const toggleShowMore = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, initialItems);

  return (
    <div className="w-full py-20 bg-transparent px-[5%] lg:px-[10%]" id="Portofolio">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 mb-4 font-grotesk" data-aos="zoom-in-up">
          Featured Projects
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
          A selection of my best work in Machine Learning, Data Analytics, and Intelligent Systems engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, i) => (
          <CardProject key={project.id || i} project={project} index={i} />
        ))}
      </div>

      {projects.length > initialItems && (
        <div className="mt-12 flex justify-center" data-aos="fade-up">
          <button
            onClick={toggleShowMore}
            className="px-6 py-2.5 rounded-xl border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
          >
            {showAll ? "View Less" : "View All Projects"}
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(Portofolio);