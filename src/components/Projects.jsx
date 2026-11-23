import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Layers, Activity, Terminal, FileCheck2, Cloud, CloudRain, TrendingDown, Check } from 'lucide-react';
import { Github } from './SocialIcons';
import { projects } from '../data/portfolioData';
export const Projects = ({ onSelectProject }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Full Stack', 'AI & Web', 'Frontend UI'];
    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);
    // Visual mockups per project type
    const renderVisualMockup = (project) => {
        switch (project.previewType) {
            case 'weather':
                return (<div className="w-full h-56 rounded-2xl bg-[#0E1117] border border-[#232B3B] p-4 flex flex-col justify-between font-mono text-[11px] overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#232B3B] pb-2.5">
              <span className="text-sky-300 font-bold flex items-center gap-2">
                <CloudRain className="w-4 h-4"/> VayuVision Weather
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#1A202E] text-slate-300 border border-[#2B3547]">
                Indian Location Explorer
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 my-3">
              <div className="p-2.5 rounded-xl bg-[#131722] border border-[#232B3B]">
                <div className="text-slate-400 text-[10px]">Forecast</div>
                <div className="text-white font-bold text-base mt-0.5">5-Day Outlook</div>
                <div className="text-sky-300 text-[10px] mt-0.5">Current conditions</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#131722] border border-[#232B3B]">
                <div className="text-slate-400 text-[10px]">Weather Assistant</div>
                <div className="text-white font-bold text-base mt-0.5">Prompt V1–V3</div>
                <div className="text-sky-300 text-[10px] mt-0.5">Context & data checks</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-[#131722] border border-[#232B3B] flex items-center justify-between">
                <span className="text-slate-300">Search cities, districts & states</span>
                <span className="text-sky-300">API</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#131722] border border-[#232B3B] flex items-center justify-between">
                <span className="text-slate-300">Forecast-based notices</span>
                <span className="text-amber-300">Alerts</span>
              </div>
            </div>
          </div>);
            case 'cloud':
                return (<div className="w-full h-56 rounded-2xl bg-[#0E1117] border border-[#232B3B] p-4 flex flex-col justify-between font-mono text-[11px] overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#232B3B] pb-2.5">
              <span className="text-[#D97745] font-bold flex items-center gap-2">
                <Cloud className="w-4 h-4 text-[#C45D38]"/> OptiCloud Analyzer
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#1A202E] text-slate-300 border border-[#2B3547]">
                Infrastructure Insights
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 my-3">
              <div className="p-2.5 rounded-xl bg-[#131722] border border-[#232B3B]">
                <div className="text-slate-400 text-[10px]">Cloud Spend</div>
                <div className="text-white font-bold text-base mt-0.5">Cost Analytics</div>
                <div className="text-emerald-400 text-[10px] mt-0.5 flex items-center gap-1">
                  <TrendingDown className="w-3 h-3"/> Trends & savings insights
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#131722] border border-[#232B3B]">
                <div className="text-slate-400 text-[10px]">Infrastructure Review</div>
                <div className="text-white font-bold text-base mt-0.5">AWS · Terraform</div>
                <div className="text-[#D97745] text-[10px] mt-0.5">Docker configurations</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-[#131722] border border-[#232B3B] flex items-center justify-between">
                <span className="text-slate-300">Review infrastructure usage</span>
                <span className="text-emerald-400">●</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#131722] border border-[#232B3B] flex items-center justify-between">
                <span className="text-slate-300">Explore optimization findings</span>
                <span className="text-[#D97745]">AI</span>
              </div>
            </div>
          </div>);
            case 'dashboard':
                return (<div className="w-full h-56 rounded-2xl bg-[#0E1117] border border-[#232B3B] p-4 flex flex-col justify-between font-mono text-[11px] overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#232B3B] pb-2.5">
              <span className="text-[#D97745] font-bold flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#C45D38]"/> WorkLens Edu System
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#1A202E] text-slate-300 border border-[#2B3547]">
                Live Recharts & DB Sync
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 my-3">
              <div className="p-2.5 rounded-xl bg-[#131722] border border-[#232B3B]">
                <div className="text-slate-400 text-[10px]">Courses</div>
                <div className="text-white font-bold text-base mt-0.5">6 Active</div>
                <div className="text-[#D97745] text-[10px] mt-0.5">94% Attendance</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#131722] border border-[#232B3B]">
                <div className="text-slate-400 text-[10px]">Assignments</div>
                <div className="text-white font-bold text-base mt-0.5">18 Tracked</div>
                <div className="text-slate-400 text-[10px] mt-0.5">8 Submitted</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#131722] border border-[#232B3B]">
                <div className="text-slate-400 text-[10px]">Staff Leaves</div>
                <div className="text-emerald-400 font-bold text-base mt-0.5">Approved</div>
                <div className="text-slate-400 text-[10px] mt-0.5">Workflow Verified</div>
              </div>
            </div>

            <div className="h-12 bg-[#131722]/80 rounded-xl flex items-end gap-2 px-3 py-1.5 border border-[#232B3B]/60">
              <div className="flex-1 bg-[#B9522C]/30 rounded-t h-[40%]"/>
              <div className="flex-1 bg-[#B9522C]/50 rounded-t h-[65%]"/>
              <div className="flex-1 bg-[#B9522C] rounded-t h-[88%]"/>
              <div className="flex-1 bg-[#B9522C]/60 rounded-t h-[55%]"/>
              <div className="flex-1 bg-[#D97745] rounded-t h-[95%]"/>
              <div className="flex-1 bg-[#B9522C]/70 rounded-t h-[75%]"/>
            </div>
          </div>);
            case 'interview':
                return (<div className="w-full h-56 rounded-2xl bg-[#0E1117] border border-[#232B3B] p-4 flex flex-col justify-between font-mono text-[11px] overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#232B3B] pb-2.5">
              <span className="text-[#D97745] font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#C45D38]"/> Githired AI Engine
              </span>
              <span className="text-emerald-400 text-[10px] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/> Live Speech Session
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#131722] border border-[#232B3B] text-slate-300 space-y-1.5 my-auto">
              <div className="text-[#D97745] font-semibold text-[11px]">Interviewer Context:</div>
              <div className="text-xs text-white">"Explain how you would optimize Redux selectors for high-frequency updates?"</div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-2 rounded-lg bg-[#131722] border border-[#232B3B]">
                <span className="text-slate-400 block">Technical</span>
                <span className="text-[#D97745] font-bold text-xs">9.2 / 10</span>
              </div>
              <div className="p-2 rounded-lg bg-[#131722] border border-[#232B3B]">
                <span className="text-slate-400 block">Problem-Solving</span>
                <span className="text-slate-200 font-bold text-xs">8.8 / 10</span>
              </div>
              <div className="p-2 rounded-lg bg-[#131722] border border-[#232B3B]">
                <span className="text-slate-400 block">Communication</span>
                <span className="text-emerald-400 font-bold text-xs">9.0 / 10</span>
              </div>
            </div>
          </div>);
            case 'resume':
                return (<div className="w-full h-56 rounded-2xl bg-[#0E1117] border border-[#232B3B] p-4 flex flex-col justify-between font-mono text-[11px] overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#232B3B] pb-2.5">
              <span className="text-[#D97745] font-bold flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#C45D38]"/> Resume Matcher AI
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#1A202E] text-slate-300 border border-[#2B3547]">
                Pinecone Semantic Index
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#131722] border border-[#232B3B] flex items-center justify-between my-auto">
              <div>
                <div className="text-white font-bold text-sm">Semantic Match Accuracy</div>
                <div className="text-slate-400 text-[10px]">FastAPI + Claude AI Pipeline</div>
              </div>
              <div className="text-2xl font-black text-[#C45D38] font-display">89.4%</div>
            </div>

            <div className="flex flex-wrap gap-2 text-[10px]">
              <span className="px-2 py-0.5 rounded-md bg-[#1A202E] text-slate-300 border border-[#2B3547]">React & Redux</span>
              <span className="px-2 py-0.5 rounded-md bg-[#1A202E] text-slate-300 border border-[#2B3547]">RESTful APIs</span>
              <span className="px-2 py-0.5 rounded-md bg-[#B9522C]/15 text-[#D97745] border border-[#C45D38]/30">FastAPI</span>
            </div>
          </div>);
        }
    };
    return (<section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#232B3B]">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C45D38] block mb-2">
              // 01. SELECTED WORKS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display">
              Featured Projects<span className="text-[#C45D38]">.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (<button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${activeCategory === cat
                ? 'bg-[#B9522C] text-white shadow-lg shadow-[#C45D38]/25'
                : 'bg-[#121620] text-slate-400 hover:text-white border border-[#232B3B]'}`}>
                {cat}
              </button>))}
          </div>
        </div>

        {/* Project Editorial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (<motion.div key={project.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }} className="rounded-3xl bg-[#121620]/90 border border-[#232B3B] hover:border-[#C45D38]/50 transition-all p-6 sm:p-8 flex flex-col justify-between group shadow-2xl backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Top Bar with Number & Category */}
                  <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                    <span className="font-bold text-[#C45D38] text-sm">
                      0{index + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#181E2C] text-slate-300 border border-[#232B3B] uppercase tracking-wider text-[11px]">
                      {project.category}
                    </span>
                  </div>

                  {/* Visual UI Mockup */}
                  {renderVisualMockup(project)}

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#D97745] transition-colors font-display tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">{project.tagline}</p>
                  </div>

                  {/* Problem & Contribution */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-1 font-mono text-xs">
                    {project.highlights.slice(0, 2).map((h, i) => (<div key={i} className="flex items-start gap-2.5 text-slate-400">
                        <Check className="w-3.5 h-3.5 text-[#C45D38] shrink-0 mt-0.5"/>
                        <span className="line-clamp-1 text-slate-300">{h}</span>
                      </div>))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (<span key={tech} className="px-3 py-1 text-xs font-mono rounded-full bg-[#181E2C] text-slate-300 border border-[#232B3B]">
                        {tech}
                      </span>))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between gap-3 pt-8 mt-8 border-t border-[#232B3B]">
                  <button onClick={() => onSelectProject(project)} className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-slate-300 hover:text-[#D97745] transition-colors">
                    <Layers className="w-4 h-4 text-[#C45D38]"/>
                    <span>INSPECT ARCHITECTURE</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (<a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#181E2C] hover:bg-[#222A3D] text-slate-300 hover:text-white border border-[#232B3B] transition-colors" title="GitHub Repository">
                        <Github className="w-4 h-4"/>
                      </a>)}
                    {project.demoUrl && (<a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B9522C] hover:bg-[#9C472B] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-md shadow-[#C45D38]/20" title="Live Deployment">
                        <span>DEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5"/>
                      </a>)}
                  </div>
                </div>
              </motion.div>))}
          </AnimatePresence>
        </div>
      </div>
    </section>);
};
