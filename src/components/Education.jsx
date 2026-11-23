import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, Download, CheckCircle2, BookOpen } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';
export const Education = () => {
    return (<section id="education" className="py-24 bg-[#0A0C10] border-t border-[#1C2230] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-[#FF643D] font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#FF5733]"/>
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Verified Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Formal computer science engineering foundations paired with verified industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#FF643D]"/>
              <span>Academic Institutions</span>
            </h3>

            {education.map((edu, idx) => (<motion.div key={edu.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="p-6 rounded-2xl bg-[#131722]/80 border border-[#232B3B] hover:border-[#FF5733]/40 transition-all space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                    <p className="text-xs font-medium text-[#FF7B59]">{edu.field}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 self-start sm:self-auto px-2.5 py-1 rounded bg-[#1A202E] border border-[#2B3547]">
                    {edu.period}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  {edu.highlights.map((h, i) => (<div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5733] shrink-0 mt-0.5"/>
                      <span>{h}</span>
                    </div>))}
                </div>
              </motion.div>))}
          </div>

          {/* Right: Verified Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FF643D]"/>
              <span>Verified Industry Credentials</span>
            </h3>

            {certifications.map((cert) => (<motion.div key={cert.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="p-6 rounded-2xl bg-gradient-to-b from-[#1C1820] to-[#131722] border border-[#FF5733]/30 space-y-4 relative overflow-hidden shadow-xl">
                <div className="flex items-start justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5733]/15 border border-[#FF5733]/30 flex items-center justify-center text-[#FF643D] shrink-0">
                    <BookOpen className="w-5 h-5"/>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#1A202E] text-slate-300 border border-[#2B3547] font-semibold">
                    VERIFIED CREDENTIAL
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">{cert.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">Authorized by <strong className="text-slate-200">{cert.issuer}</strong></p>
                  <p className="text-[11px] font-mono text-slate-500 mt-0.5">Completed {cert.issueDate}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#0E1117] border border-[#232B3B] text-[11px] font-mono text-slate-400">
                  <span className="text-slate-500 block mb-1">Credential Verification ID:</span>
                  <span className="text-[#FF7B59] font-bold">{cert.credentialId}</span>
                </div>

                {cert.skillsCovered?.length > 0 && (<div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-400">Core Competencies Tested:</span>
                  <ul className="text-xs text-slate-300 space-y-1 pl-1">
                    {cert.skillsCovered.slice(0, 3).map((s, idx) => (<li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733]"/>
                        <span>{s}</span>
                      </li>))}
                  </ul>
                </div>)}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                  <a href={cert.verificationUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FF5733] hover:bg-[#E64522] text-white text-xs font-medium transition-colors shadow-md shadow-[#FF5733]/25">
                    <span>Verify on {cert.issuer}</span>
                    <ExternalLink className="w-3.5 h-3.5"/>
                  </a>

                  {cert.downloadUrl && (<a href={cert.downloadUrl} download="Server_Side_JavaScript_Node_NIIT.pdf" className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#1A202E] hover:bg-[#222A3D] text-slate-200 text-xs font-medium border border-[#2B3547] transition-colors">
                    <Download className="w-3.5 h-3.5"/>
                    <span>PDF</span>
                  </a>)}
                </div>
              </motion.div>))}
          </div>
        </div>
      </div>
    </section>);
};
