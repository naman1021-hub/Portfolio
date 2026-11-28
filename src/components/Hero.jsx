import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import portrait from '../assets/naman-gupta.jpg';
import { personalInfo } from '../data/portfolioData';
import { HoloCard } from './HoloCard';
import { TechText } from './TechText';

const featuredSkills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AI'];

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

  return (
    <section
      onPointerMove={moveSpotlight}
      onPointerLeave={resetSpotlight}
      className="hero-section relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden py-24 sm:py-28 lg:py-20"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hero-intro text-center lg:text-left"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C45D38]/30 bg-[#B9522C]/10 px-4 py-2 text-xs font-medium tracking-wide text-[#E3926E]">
            <span className="h-2 w-2 rounded-full bg-[#D97745]" aria-hidden="true" />
            {personalInfo.status}
          </div>

          <p className="mb-3 text-sm font-medium tracking-wide text-slate-400">
            Hello, I&apos;m
          </p>
          <h1 className="hero-tech-heading font-display text-white">
            <TechText
              text="Naman Gupta"
              fontWeight={600}
              fontSize={150}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              intro="rise"
              introDuration={2}
              guides={false}
              className="hero-tech-name"
            />
          </h1>

          <p className="mt-7 text-xl font-semibold text-slate-100 sm:text-2xl">
            {personalInfo.headline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base lg:mx-0">
            I&apos;m a third-year Computer Science student at Bennett University and a former
            Ameriprise Financial intern. I build polished web experiences, scalable backends,
            and AI-powered products.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
            {featuredSkills.map((skill) => (
              <span key={skill} className="hero-skill-chip">
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to="/projects"
              className="hero-primary-cta rounded-full bg-[#B9522C] px-7 py-3.5 text-center text-xs font-bold tracking-widest text-white shadow-xl shadow-[#C45D38]/25 transition-all hover:bg-[#9C472B]"
            >
              EXPLORE MY WORK
            </Link>
            <Link
              to="/contact"
              className="hero-secondary-cta rounded-full border border-[#232B3B] bg-transparent px-7 py-3.5 text-center text-xs font-bold tracking-widest text-slate-200 transition-all hover:border-slate-500 hover:bg-[#181E2C] hover:text-white"
            >
              LET&apos;S CONNECT
            </Link>
          </div>

          <p className="mt-8 text-xs font-mono tracking-wide text-slate-500">
            {personalInfo.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <HoloCard
            image={portrait}
            alt="Portrait of Naman Gupta"
            preset="bursts"
            name={personalInfo.name}
            headline={personalInfo.headline}
            detail="Computer Science · Bennett University"
            status="Former intern at Ameriprise Financial"
          />
        </motion.div>
      </div>
    </section>
  );
};
