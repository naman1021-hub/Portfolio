import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, ShieldCheck, Zap } from 'lucide-react';
export const About = () => {
    const pillars = [
        {
            icon: Code2,
            title: 'Component Architecture',
            description: 'Building modular, maintainable React components with strict TypeScript types, accessible semantics, and clear lifecycle separation.'
        },
        {
            icon: Cpu,
            title: 'Enterprise State & APIs',
            description: 'Handling complex asynchronous data pipelines with Redux, custom hooks, and Axios interceptors, refined during my Ameriprise internship.'
        },
        {
            icon: Zap,
            title: 'Performance & UX Fidelity',
            description: 'Crafting responsive layouts, fluid micro-interactions, and optimized bundle footprints that deliver instant feedback across all device sizes.'
        },
        {
            icon: ShieldCheck,
            title: 'Full-Stack & Applied AI',
            description: 'Bridging modern frontends with Express/Node.js backends, MongoDB persistence, and intelligent LLM/vector search capabilities.'
        }
    ];
    return (<section id="about" className="py-24 bg-[#0A0C10] border-t border-[#1C2230] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Clean, professional without AI tropes) */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-[#D97745] font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#B9522C]"/>
            <span>ENGINEERING PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering for real users, not just tutorials.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            A developer journey grounded in computer science fundamentals, enterprise-level team practices, and shipped full-stack platforms.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Detailed Narrative */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-6 space-y-5 text-slate-300 text-sm leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#131722]/80 border border-[#232B3B] space-y-4 shadow-xl">
              <h3 className="text-base font-semibold text-white">Background & Approach</h3>
              <p>
                I am a third-year Computer Science undergraduate at <strong className="text-white font-medium">Bennett University</strong>, specializing in Full Stack Web Development. Rather than building passive boilerplate clones, I focus on engineering functional, end-to-end systems that address real user pain points.
              </p>
              <p>
                During my two-month Software Developer Internship at <strong className="text-white font-medium">Ameriprise Financial</strong> on the IRNet platform, I worked within an enterprise codebase. I learned firsthand how large-scale engineering teams structure React components, manage global state with Redux, debug complex asynchronous API behaviors, and uphold disciplined Git review cycles.
              </p>
              <p>
                Whether it's building a complete faculty management dashboard like <span className="text-[#D97745] font-medium">WorkLens Edu</span>, integrating speech-to-text and LLM evaluations in <span className="text-[#D97745] font-medium">Githired</span>, or exploring vector similarity search in <span className="text-[#D97745] font-medium">Resume Matcher AI</span>, I prioritize clean architectural boundaries and reliable code execution.
              </p>
            </div>
          </motion.div>

          {/* Core Pillars */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (<div key={idx} className="p-5 rounded-2xl bg-[#131722]/60 hover:bg-[#171D2B] border border-[#232B3B] hover:border-[#C45D38]/40 transition-all group shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-[#B9522C]/10 border border-[#C45D38]/25 flex items-center justify-center text-[#D97745] group-hover:scale-105 transition-all mb-4">
                    <Icon className="w-5 h-5"/>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>);
        })}
          </motion.div>
        </div>
      </div>
    </section>);
};
