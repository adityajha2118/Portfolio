import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, Github, Code2, Star,
  ChevronRight, Layers, Layout, Globe, Package, Cpu, Code,
} from "lucide-react";
import Swal from 'sweetalert2';
import { HARDCODED_PROJECTS } from "../components/projects";

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  return (
    <div className="px-4 py-2 bg-gradient-to-r from-sky-600/10 to-cyan-600/10 rounded-xl border border-sky-500/20 flex items-center gap-2">
      <Icon className="w-4 h-4 text-sky-400" />
      <span className="text-sm text-sky-300">{tech}</span>
    </div>
  );
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedProject = HARDCODED_PROJECTS.find((p) => String(p.id) === id);
    if (selectedProject) {
      setProject({
        ...selectedProject,
        Features: selectedProject.Features || [],
        TechStack: selectedProject.TechStack || [],
      });
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-sky-500/30 border-t-sky-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-[5%] relative overflow-hidden">

      {/* CYAN BLOB BG */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-sky-500 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto py-16">

        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-5 py-2 bg-white/5 rounded-xl text-white/80 hover:bg-sky-500/10 border border-white/10"
        >
          <ArrowLeft /> Back
        </button>

        <div className="grid lg:grid-cols-2 gap-12 mt-10">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              {project.Title}
            </h1>

            <p className="text-gray-400 mt-6">
              {project.Description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 mt-6">
              {project.TechStack.map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>

            {/* GITHUB */}
            <a
              href={project.Github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:scale-105 transition"
            >
              <Github /> Github
            </a>
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src={"/" + project.Img}
              alt={project.Title}
              className="w-full object-cover"
            />
          </div>

        </div>

        {/* FEATURES */}
        <div className="mt-16 p-6 bg-white/[0.02] rounded-2xl border border-white/10">
          <h3 className="text-xl text-white mb-4 flex gap-2 items-center">
            <Star className="text-yellow-400" /> Key Features
          </h3>
          <ul className="space-y-2">
            {project.Features.map((f, i) => (
              <li key={i} className="text-gray-400">• {f}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;