import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (<footer className="border-t border-[#232B3B] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#232B3B]/60">
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tight text-white font-display">
              {personalInfo.name}
              <span className="brand-dot text-[#FF5733]" aria-hidden="true">.</span>
            </span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
              // Full-Stack & Frontend Software Engineer
            </span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#121620] text-slate-400 hover:text-white hover:border-[#FF5733] border border-[#232B3B] transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4"/>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#121620] text-slate-400 hover:text-white hover:border-[#FF5733] border border-[#232B3B] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4"/>
            </a>

            <button onClick={scrollToTop} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#121620] text-slate-400 hover:text-white text-xs font-mono font-bold tracking-wider uppercase border border-[#232B3B] hover:border-[#FF5733] transition-colors" title="Back to top">
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5"/>
            </button>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Naman Gupta. Built with React 19, JavaScript & Tailwind CSS.</p>
          <p className="text-slate-400 uppercase tracking-widest text-[11px]">
            Bennett University // Full-Stack Specialization
          </p>
        </div>
      </div>
    </footer>);
};
