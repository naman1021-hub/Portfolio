import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
export const Skills = () => {
    return (<section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="mb-16 pb-8 border-b border-[#232B3B]">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C45D38] block mb-2">
            // 02. TECHNICAL ARSENAL
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display">
            Skills & Stack<span className="text-[#C45D38]">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Technologies and frameworks applied in enterprise codebases and production projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (<motion.div key={category.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="p-8 rounded-3xl bg-[#121620]/90 border border-[#232B3B] hover:border-[#C45D38]/40 transition-all flex flex-col justify-between shadow-xl backdrop-blur-sm">
              <div>
                <span className="text-xs font-mono text-[#C45D38] font-bold tracking-widest uppercase block mb-3">
                  CATEGORY // 0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (<span key={skill.name} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#181E2C] text-slate-200 border border-[#232B3B] hover:border-[#C45D38]/40 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B9522C]"/>
                      <span>{skill.name}</span>
                    </span>))}
                </div>
              </div>
            </motion.div>))}
        </div>
      </div>
    </section>);
};
