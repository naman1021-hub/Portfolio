import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Briefcase, GraduationCap, Award, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, experience, education, certifications } from '../data/portfolioData';
export const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen)
        return null;
    return (<AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/85 backdrop-blur-sm"/>

        {/* Modal Window */}
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.2 }} className="relative w-full max-w-4xl max-h-[90vh] bg-[#131722] border border-[#232B3B] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-4 border-b border-[#232B3B] bg-[#0E1117]/95 backdrop-blur">
            <div className="flex min-w-0 items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#B9522C]/15 border border-[#C45D38]/30 flex items-center justify-center text-[#D97745] font-bold">
                NG
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-slate-100">Naman Gupta — Verified Resume</h3>
                <p className="text-xs text-slate-400">{personalInfo.headline}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <a href={personalInfo.resumeUrl} download="Naman_Gupta_Resume.pdf" className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#B9522C] hover:bg-[#9C472B] text-white text-xs font-medium transition-colors shadow-lg shadow-[#C45D38]/25">
                <Download className="w-3.5 h-3.5"/>
                <span>Download PDF</span>
              </a>

              <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-[#1A202E] transition-colors" title="Open in new tab">
                <ExternalLink className="w-4 h-4"/>
              </a>

              <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-[#1A202E] transition-colors" aria-label="Close modal">
                <X className="w-5 h-5"/>
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#0E1117] text-slate-200 font-sans">
            {/* Header info */}
            <div className="border-b border-[#232B3B] pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{personalInfo.name}</h1>
                <p className="text-sm font-medium text-[#D97745] mt-1">{personalInfo.headline}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3 font-mono">
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-500"/> {personalInfo.location}</span>
                  <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-500"/> {personalInfo.email}</span>
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-slate-500"/> {personalInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D97745] mb-2"> // PROFESSIONAL SUMMARY</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Computer Science undergraduate specializing in full-stack web development, AI-powered applications, backend systems, and application security. Experienced in building REST APIs, authentication systems, and responsive web applications using JavaScript, TypeScript, Python, React, Next.js, Node.js, and MongoDB. Proven enterprise experience at Ameriprise Financial working with React and Redux architectures.
              </p>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-[#D97745]"/>
                <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D97745]"> // INTERNSHIP & EXPERIENCE</h2>
              </div>
              <div className="space-y-4">
                {experience.map((item) => (<div key={item.id} className="p-4 rounded-xl bg-[#131722] border border-[#232B3B]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <div>
                        <span className="text-sm font-semibold text-white">{item.role}</span>
                        <span className="text-xs text-[#D97745] ml-2 font-mono">@ {item.company}</span>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">{item.period}</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-300">
                      {item.responsibilities.map((r, i) => (<li key={i}>{r}</li>))}
                    </ul>
                  </div>))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-[#D97745]"/>
                <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D97745]"> // EDUCATION</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.map((edu) => (<div key={edu.id} className="p-4 rounded-xl bg-[#131722] border border-[#232B3B]">
                    <div className="flex items-start justify-between">
                      <h3 className="text-sm font-semibold text-white">{edu.institution}</h3>
                      <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                    </div>
                    <p className="text-xs text-[#D97745] mt-0.5">{edu.degree}</p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{edu.description}</p>
                  </div>))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-[#D97745]"/>
                <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D97745]"> // VERIFIED CERTIFICATIONS</h2>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (<div key={cert.id} className="p-4 rounded-xl bg-[#131722] border border-[#232B3B] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{cert.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{cert.issuer} • Issued {cert.issueDate}</p>
                      <p className="text-xs text-[#D97745] font-mono mt-1">Credential ID: {cert.credentialId}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <a href={cert.verificationUrl} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg bg-[#B9522C]/15 hover:bg-[#B9522C]/25 border border-[#C45D38]/30 text-[#D97745] text-xs font-medium transition-colors">
                        Verify on {cert.issuer} ↗
                      </a>
                    </div>
                  </div>))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>);
};
