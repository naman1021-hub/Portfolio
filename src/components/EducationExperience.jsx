import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, GraduationCap, Award, ExternalLink, Check } from 'lucide-react';
import { experience, education, certifications } from '../data/portfolioData';
export const EducationExperience = () => {
    return (<section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="mb-16 pb-8 border-b border-[#232B3B]">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5733] block mb-2">
            // 03. TRACK RECORD
          </span>
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display">
            Education & Experience<span className="text-[#FF5733]">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Enterprise industry training at Ameriprise Financial alongside computer science engineering foundations at Bennett University.
          </p>
        </div>

        {/* 2-Column Split: Experience on Left, Education & Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-[#232B3B]">
              <Building2 className="w-5 h-5 text-[#FF5733]"/>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white font-display">
                Industry Experience
              </h3>
            </div>

            {experience.map((item) => (<motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="p-8 rounded-3xl bg-[#121620]/90 border border-[#232B3B] hover:border-[#FF5733]/40 transition-all space-y-6 shadow-xl backdrop-blur-sm">
                <div>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#181E2C] text-[#FF7B59] font-mono text-xs font-bold border border-[#232B3B]">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5733]"/>
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-2xl font-black text-white font-display tracking-tight">
                    {item.company}
                  </h4>
                  <p className="text-sm font-semibold text-[#FF7B59] mt-0.5">{item.role}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-500"/>
                    {item.location} • Platform: {item.project}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2.5 pt-2">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Core Technical Deliverables
                  </h5>
                  <div className="space-y-2">
                    {item.responsibilities.map((r, i) => (<div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed font-mono">
                        <Check className="w-3.5 h-3.5 text-[#FF5733] shrink-0 mt-0.5"/>
                        <span>{r}</span>
                      </div>))}
                  </div>
                </div>

                {/* Tech applied */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((t) => (<span key={t} className="px-2.5 py-1 text-xs font-mono rounded-full bg-[#181E2C] text-slate-300 border border-[#232B3B]">
                        {t}
                      </span>))}
                  </div>
                </div>
              </motion.div>))}
          </div>

          {/* Right Column: Education & Verified Certifications */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-[#232B3B]">
              <GraduationCap className="w-5 h-5 text-[#FF5733]"/>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white font-display">
                Academic Background
              </h3>
            </div>

            {/* Institutions */}
            <div className="space-y-6">
              {education.map((edu) => (<motion.div key={edu.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="p-6 sm:p-7 rounded-3xl bg-[#121620]/90 border border-[#232B3B] hover:border-[#FF5733]/40 transition-all space-y-3 shadow-xl backdrop-blur-sm">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-white font-display">{edu.institution}</h4>
                      <p className="text-xs font-semibold text-[#FF7B59] mt-0.5">{edu.degree}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#181E2C] text-slate-300 font-mono text-xs border border-[#232B3B]">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>))}
            </div>

            {/* Verified Certifications */}
            <div className="pt-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#232B3B] mb-6">
                <Award className="w-5 h-5 text-[#FF5733]"/>
                <h3 className="text-xl font-bold uppercase tracking-wider text-white font-display">
                  Verified Credential
                </h3>
              </div>

              {certifications.map((cert) => (<div key={cert.id} className="verified-credential-card p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#1C1820] to-[#121620] border border-[#FF5733]/30 space-y-4 shadow-xl">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white font-display">{cert.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{cert.issuer} • Completed {cert.issueDate}</p>
                      <p className="text-xs font-mono text-[#FF7B59] mt-1">ID: {cert.credentialId}</p>
                    </div>

                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="credential-verify-button flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF5733] hover:bg-[#E64522] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-[#FF5733]/25">
                      <span>VERIFY</span>
                      <ExternalLink className="w-3.5 h-3.5"/>
                    </a>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
      </div>
    </section>);
};
