import React, { useState } from 'react';
import { Eye, ArrowRight, ExternalLink } from 'lucide-react';

const ProjectCardModal = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* DETAILS BUTTON */}
      <button
        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-sky-500/10 text-white/90 transition duration-200"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-sm">Details</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-xl bg-slate-900 border border-white/10 p-6 text-white shadow-xl animate-slide-up sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE ICON */}
            <button
              className="absolute top-4 right-4 rounded-md p-2 hover:bg-sky-500/10 transition"
              onClick={() => setIsOpen(false)}
            >
              <Eye className="h-5 w-5 text-sky-400" />
            </button>

            <h2 className="mb-4 text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              {title}
            </h2>

            <p className="mb-6 text-gray-400">
              {description}
            </p>

            <div className="flex justify-end space-x-4">

              {/* LIVE DEMO */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2 font-medium hover:scale-105 transition flex items-center"
              >
                Live Demo <ExternalLink className="ml-2 h-5 w-5" />
              </a>

              {/* CLOSE BTN */}
              <button
                className="rounded-lg bg-white/5 px-4 py-2 font-medium hover:bg-sky-500/10 transition"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCardModal;