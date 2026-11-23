import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
export const Contact = ({ onNotify }) => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: 'Internship Opportunity / Full Stack Engineering',
        message: ''
    });
    const quickTemplates = [
        {
            title: 'Internship Inquiry',
            subject: 'Frontend / Software Engineering Internship Opportunity',
            message: `Hi Naman,\n\nWe came across your portfolio and were impressed by your work on WorkLens, Githired, and your internship at Ameriprise Financial. We would love to discuss an internship opportunity with our engineering team.\n\nBest regards,`
        },
        {
            title: 'Project Collaboration',
            subject: 'Full Stack Project Collaboration',
            message: `Hi Naman,\n\nI noticed your experience in React, TypeScript, and Node.js. Are you available for a brief technical discussion regarding a web project?\n\nThanks!`
        },
        {
            title: 'General Discussion',
            subject: 'Developer Discussion & Networking',
            message: `Hi Naman,\n\nI came across your profile and would love to connect and follow your software engineering journey.\n\nCheers!`
        }
    ];
    const handleCopyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopiedEmail(true);
        onNotify('Email address copied to clipboard!');
        setTimeout(() => setCopiedEmail(false), 2000);
    };
    const handleCopyPhone = () => {
        navigator.clipboard.writeText(personalInfo.phone);
        setCopiedPhone(true);
        onNotify('Phone number copied to clipboard!');
        setTimeout(() => setCopiedPhone(false), 2000);
    };
    const handleApplyTemplate = (tpl) => {
        setForm(prev => ({
            ...prev,
            subject: tpl.subject,
            message: tpl.message
        }));
        onNotify(`Applied template: ${tpl.title}`);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
        window.location.href = mailtoUrl;
        onNotify('Opening email client with pre-filled message!');
    };
    return (<section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="mb-16 pb-8 border-b border-[#232B3B]">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C45D38] block mb-2">
            // 04. GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display">
            Let's Connect<span className="text-[#C45D38]">.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Open to software engineering and frontend developer internship opportunities, hackathons, and high-impact full-stack collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels & Quick Connect */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-8 rounded-3xl bg-[#121620]/90 border border-[#232B3B] space-y-6 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-wider">
                Direct Channels
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1117] border border-[#232B3B]">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#B9522C]/15 flex items-center justify-center text-[#D97745]">
                    <Mail className="w-4 h-4"/>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="break-all text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#D97745] transition-colors font-mono">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button onClick={handleCopyEmail} className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1A202E] transition-colors" title="Copy email">
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400"/> : <Copy className="w-4 h-4"/>}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0E1117] border border-[#232B3B]">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#B9522C]/15 flex items-center justify-center text-[#D97745]">
                    <Phone className="w-4 h-4"/>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Phone Contact</span>
                    <a href={`tel:${personalInfo.phone}`} className="break-all text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#D97745] transition-colors font-mono">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button onClick={handleCopyPhone} className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1A202E] transition-colors" title="Copy phone">
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400"/> : <Copy className="w-4 h-4"/>}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#0E1117] border border-[#232B3B]">
                <div className="w-9 h-9 rounded-xl bg-[#B9522C]/15 flex items-center justify-center text-[#D97745]">
                  <MapPin className="w-4 h-4"/>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Current Base</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 font-mono">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-2">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#181E2C] border border-[#232B3B] hover:border-[#C45D38] text-slate-300 hover:text-white text-xs font-bold tracking-wider uppercase transition-colors">
                  <Linkedin className="w-4 h-4 text-[#D97745]"/>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500"/>
                </a>

                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#181E2C] border border-[#232B3B] hover:border-[#C45D38] text-slate-300 hover:text-white text-xs font-bold tracking-wider uppercase transition-colors">
                  <Github className="w-4 h-4 text-slate-300"/>
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500"/>
                </a>
              </div>
            </div>

            {/* Quick Templates */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#121620]/60 border border-[#232B3B] space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D97745] block">
                Message Scenarios
              </span>
              <p className="text-xs text-slate-400">
                Click to load a draft directly into the composer:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickTemplates.map((tpl) => (<button key={tpl.title} onClick={() => handleApplyTemplate(tpl)} className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#181E2C] hover:bg-[#B9522C]/15 text-slate-300 hover:text-[#D97745] border border-[#232B3B] hover:border-[#C45D38]/40 transition-colors">
                    {tpl.title}
                  </button>))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Email Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-5 sm:p-10 rounded-3xl bg-[#121620]/90 border border-[#232B3B] space-y-5 shadow-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2 font-display uppercase tracking-wider">
                Send A Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Your Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Alex Morgan" className="w-full px-4 py-3 text-xs rounded-2xl bg-[#0E1117] border border-[#232B3B] text-white placeholder-slate-600 focus:outline-none focus:border-[#C45D38] transition-colors font-mono"/>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Your Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="alex@company.com" className="w-full px-4 py-3 text-xs rounded-2xl bg-[#0E1117] border border-[#232B3B] text-white placeholder-slate-600 focus:outline-none focus:border-[#C45D38] transition-colors font-mono"/>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Subject</label>
                <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject of message..." className="w-full px-4 py-3 text-xs rounded-2xl bg-[#0E1117] border border-[#232B3B] text-white placeholder-slate-600 focus:outline-none focus:border-[#C45D38] transition-colors font-mono"/>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea rows={6} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message details..." className="w-full px-4 py-3 text-xs rounded-2xl bg-[#0E1117] border border-[#232B3B] text-white placeholder-slate-600 focus:outline-none focus:border-[#C45D38] transition-colors resize-none font-sans"/>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                <span className="text-[11px] font-mono text-slate-500">
                  Sends directly via your default email client
                </span>

                <button type="submit" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#B9522C] hover:bg-[#9C472B] text-white font-bold text-xs tracking-widest uppercase transition-all shadow-lg shadow-[#C45D38]/25 flex items-center justify-center gap-2 hover:scale-105">
                  <span>SEND MESSAGE</span>
                  <Send className="w-3.5 h-3.5"/>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);
};
