import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { experience } from '../data/portfolioData';
export const Experience = () => {
    return (<section id="experience" className="py-24 bg-[#0A0C10] border-t border-[#1C2230] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-[#FF643D] font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#FF5733]"/>
            <span>INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Enterprise Internship & Practical Engineering
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Real software engineering in an enterprise environment — collaborating with teams, following agile practices, and shipping maintainable React components.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((item) => (<motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl bg-[#131722]/80 border border-[#232B3B] p-6 sm:p-8 space-y-6 relative overflow-hidden group hover:border-[#FF5733]/40 transition-all shadow-xl">
              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF5733]/5 rounded-bl-full pointer-events-none"/>

              {/* Company & Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#232B3B] pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FF5733]/10 border border-[#FF5733]/25 flex items-center justify-center text-[#FF643D]">
                      <Building2 className="w-5 h-5"/>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.company}</h3>
                      <p className="text-sm font-medium text-[#FF7B59]">{item.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1A202E] border border-[#2B3547]">
                    <Calendar className="w-3.5 h-3.5 text-[#FF5733]"/>
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1A202E] border border-[#2B3547]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5733]"/>
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Project & Summary */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#1A202E] text-slate-300 text-xs font-mono border border-[#2B3547]">
                  <Briefcase className="w-3.5 h-3.5 text-[#FF643D]"/>
                  <span>Platform: {item.project}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Responsibilities Grid */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Key Technical Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.responsibilities.map((resp, idx) => (<div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#0E1117] border border-[#232B3B] text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5733] shrink-0 mt-0.5"/>
                      <span>{resp}</span>
                    </div>))}
                </div>
              </div>

              {/* Technical Learnings / Outcomes */}
              <div className="p-4 rounded-xl bg-[#1A202E]/60 border border-[#2B3547] space-y-2">
                <div className="flex items-center gap-2 text-[#FF7B59] font-semibold text-xs">
                  <ShieldCheck className="w-4 h-4"/>
                  <span>Enterprise Engineering Insights</span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-slate-300">
                  {item.keyOutcomes.map((outcome, idx) => (<li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733] shrink-0"/>
                      <span>{outcome}</span>
                    </li>))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (<span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#1A202E] text-slate-300 border border-[#2B3547]">
                      {tech}
                    </span>))}
                </div>
              </div>
            </motion.div>))}
        </div>
      </div>
    </section>);
};
