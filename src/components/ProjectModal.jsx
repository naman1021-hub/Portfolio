import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, CheckCircle2, Layers, AlertTriangle } from 'lucide-react';
import { Github } from './SocialIcons';
export const ProjectModal = ({ project, onClose }) => {
    if (!project)
        return null;
    return (<AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/85 backdrop-blur-md"/>

        {/* Modal Window in Midnight Charcoal with Cool Steel border */}
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.2 }} className="relative w-full max-w-3xl max-h-[90vh] bg-[#131722] border border-[#232B3B] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-4 border-b border-[#232B3B] bg-[#0E1117]/95 backdrop-blur">
            <div className="flex min-w-0 items-start sm:items-center gap-2 sm:gap-3">
              <span className="shrink-0 px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-[#1A202E] text-slate-300 border border-[#2B3547]">
                {project.category}
              </span>
              <h3 className="min-w-0 text-sm sm:text-base font-semibold text-slate-100">{project.title} — System Flow</h3>
            </div>

            <div className="flex items-center justify-end gap-2">
              {project.githubUrl && (<a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1A202E] hover:bg-[#222A3D] text-slate-200 text-xs font-medium transition-colors border border-[#2B3547]">
                  <Github className="w-3.5 h-3.5"/>
                  <span>GitHub</span>
                </a>)}
              {project.demoUrl && (<a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#B9522C] hover:bg-[#9C472B] text-white text-xs font-medium transition-colors shadow-md shadow-[#C45D38]/25">
                  <ExternalLink className="w-3.5 h-3.5"/>
                  <span>Live Demo</span>
                </a>)}
              <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-[#1A202E] transition-colors" aria-label="Close dialog">
                <X className="w-5 h-5"/>
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm">
            {/* Header / Tagline */}
            <div>
              <p className="text-lg font-medium text-white">{project.tagline}</p>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{project.description}</p>
            </div>

            {/* Architecture Workflow Box */}
            <div className="p-4 rounded-xl bg-[#0E1117] border border-[#232B3B] font-mono text-xs">
              <div className="flex items-center gap-2 text-[#D97745] font-semibold mb-2">
                <Layers className="w-4 h-4"/>
                <span>Architecture & Data Flow:</span>
              </div>
              <div className="p-3 bg-[#131722] rounded-lg text-slate-200 leading-relaxed border border-[#232B3B] overflow-x-auto">
                <code>{project.architectureWorkflow}</code>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#1A1820] border border-rose-500/25">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs mb-1.5">
                  <AlertTriangle className="w-3.5 h-3.5"/>
                  <span>The Engineering Challenge</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{project.problemStatement}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121E1C] border border-emerald-500/25">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5"/>
                  <span>Technical Solution</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* My Personal Role */}
            <div className="p-4 rounded-xl bg-[#0E1117] border border-[#232B3B]">
              <div className="flex items-center gap-2 text-slate-200 font-semibold text-xs mb-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#D97745]"/>
                <span>My Direct Engineering Contribution</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{project.myRole}</p>
            </div>

            {/* Key Engineering Highlights */}
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">Key Features & Implementations</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (<li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B9522C] mt-1.5 shrink-0"/>
                    <span>{highlight}</span>
                  </li>))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">Technologies Deployed</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (<span key={tech} className="px-2.5 py-1 text-xs rounded-md bg-[#1A202E] text-slate-300 border border-[#2B3547] font-mono">
                    {tech}
                  </span>))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>);
};
