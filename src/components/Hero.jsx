import React from 'react';
import avatar from '../assets/avatar.png';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Github } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
export const Hero = () => {
    const prefersReducedMotion = useReducedMotion();

    const moveSpotlight = (event) => {
        if (prefersReducedMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const pointerX = ((event.clientX - bounds.left) / bounds.width) * 100;
        const pointerY = ((event.clientY - bounds.top) / bounds.height) * 100;
        event.currentTarget.style.setProperty('--pointer-x', `${pointerX}%`);
        event.currentTarget.style.setProperty('--pointer-y', `${pointerY}%`);
        event.currentTarget.classList.add('is-pointer-active');
    };

    const resetSpotlight = (event) => {
        event.currentTarget.classList.remove('is-pointer-active');
        event.currentTarget.style.removeProperty('--pointer-x');
        event.currentTarget.style.removeProperty('--pointer-y');
    };

    return (<section onPointerMove={moveSpotlight} onPointerLeave={resetSpotlight} className="hero-section relative pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-36 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center">
        {/* Intro Subtitle from reference */}
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xs sm:text-sm font-medium tracking-widest text-slate-400 mb-6 uppercase">
          Hello, My Name Is Naman<span className="brand-dot text-[#C45D38]" aria-hidden="true">.</span> And I Am A
        </motion.p>

        {/* Massive Editorial Headline from reference */}
        <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="hero-title-wrap relative isolate w-full flex flex-col items-center justify-center select-none">
          {/* Line 1 */}
          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }} className="hero-title-line relative z-10 min-w-0 max-w-full text-[clamp(1.5rem,7.2vw,2.25rem)] sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tightest uppercase font-display leading-[0.92] text-white">
            FULL-STACK &
          </motion.h1>

          {/* Line 2 with embedded circular avatar peeking out */}
          <div className="relative z-10 flex items-center justify-center flex-wrap gap-2 sm:gap-4 mt-1 sm:mt-2">
            <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }} className="hero-title-line min-w-0 max-w-full text-[clamp(1.5rem,7.2vw,2.25rem)] sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tightest uppercase font-display leading-[0.92] text-white">
              AI
            </motion.h1>

            <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }} className="hero-title-line min-w-0 max-w-full text-[clamp(1.5rem,7.2vw,2.25rem)] sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tightest uppercase font-display leading-[0.92] text-white">
              ENGINEER
            </motion.h1>

            {/* Peeking Avatar Badge */}
            <div className="hero-avatar-float relative inline-flex items-center justify-center -my-2 sm:-my-4">
              <div className="hero-avatar-ring w-10 h-10 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden border-2 border-[#C45D38] bg-[#121620] shadow-2xl shadow-[#C45D38]/30">
                <img src={avatar} alt="Naman Gupta" className="w-full h-full object-cover scale-110" onError={(e) => {
            // Fallback to monogram if avatar fails
            const target = e.target;
            target.style.display = 'none';
        }}/>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-github-link absolute -right-3 -bottom-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0B0D13] bg-[#B9522C] text-white shadow-lg shadow-[#C45D38]/40"
                aria-label="Visit Naman Gupta's GitHub profile"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Metadata Row below giant title */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="w-full max-w-5xl mt-8 sm:mt-14 pt-5 sm:pt-6 border-t border-[#232B3B]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <span className="text-slate-300 font-medium">
            Full-Stack & AI Engineer // Ameriprise Financial Intern
          </span>

          <span className="tracking-widest uppercase text-slate-400 text-center sm:text-right">
            REACT.JS &nbsp;•&nbsp; NEXT.JS &nbsp;•&nbsp; NODE.JS &nbsp;•&nbsp; TYPESCRIPT &nbsp;•&nbsp; PYTHON &nbsp;•&nbsp; MONGODB
          </span>
        </motion.div>

        {/* Pill Action Buttons from reference */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="w-full max-w-xs sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <Link to="/projects" className="hero-primary-cta w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#B9522C] hover:bg-[#9C472B] text-white text-xs font-bold tracking-widest uppercase text-center transition-all duration-300 shadow-xl shadow-[#C45D38]/25 hover:scale-105">
            SEE MY WORK
          </Link>

          <Link to="/contact" className="hero-secondary-cta w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent hover:bg-[#181E2C] text-slate-200 hover:text-white text-xs font-bold tracking-widest uppercase text-center transition-all duration-300 border border-[#232B3B] hover:border-slate-500 hover:scale-105">
            LET'S CONNECT
          </Link>
        </motion.div>
      </div>
    </section>);
};
