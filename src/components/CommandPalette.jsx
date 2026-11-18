import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit2, Briefcase, GraduationCap, Award, Mail, FileText, ArrowRight, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
export const CommandPalette = ({ isOpen, onClose, onOpenResume, onNotify }) => {
    const [query, setQuery] = useState('');
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (isOpen)
                    onClose();
                else {
                    // Open
                }
            }
            else if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    const items = [
        {
            label: 'Featured Projects',
            category: 'Navigation',
            icon: FolderGit2,
            action: () => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }
        },
        {
            label: 'Ameriprise Financial Internship',
            category: 'Experience',
            icon: Briefcase,
            action: () => {
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }
        },
        {
            label: 'Technical Skills Matrix',
            category: 'Skills',
            icon: Award,
            action: () => {
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }
        },
        {
            label: 'Bennett University & Education',
            category: 'Education',
            icon: GraduationCap,
            action: () => {
                document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }
        },
        {
            label: 'Verified NIIT / Coursera Certificate',
            category: 'Credentials',
            icon: Award,
            action: () => {
                window.open('https://coursera.org/verify/EHM3POQTDLUT', '_blank');
                onClose();
            }
        },
        {
            label: 'View / Download Resume (PDF)',
            category: 'Actions',
            icon: FileText,
            action: () => {
                onClose();
                onOpenResume();
            }
        },
        {
            label: 'Copy Email Address',
            category: 'Contact',
            icon: Mail,
            action: () => {
                navigator.clipboard.writeText(personalInfo.email);
                onNotify('Email copied to clipboard!');
                onClose();
            }
        }
    ];
    const filteredItems = items.filter(item => item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()));
    return (<AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/85 backdrop-blur-sm"/>

        <motion.div initial={{ opacity: 0, scale: 0.96, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: -10 }} transition={{ duration: 0.15 }} className="relative w-full max-w-xl bg-[#131722] border border-[#232B3B] rounded-2xl shadow-2xl overflow-hidden z-10">
          {/* Search Input Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-[#232B3B] bg-[#0E1117]/80">
            <Search className="w-5 h-5 text-[#FF643D] shrink-0 mr-3"/>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type to search sections, projects, or actions..." className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-mono" autoFocus/>
            <button onClick={onClose} className="p-1 rounded-md text-slate-400 hover:text-white">
              <X className="w-4 h-4"/>
            </button>
          </div>

          {/* Results list */}
          <div className="p-2 max-h-72 overflow-y-auto space-y-1">
            {filteredItems.length === 0 ? (<div className="p-6 text-center text-xs text-slate-400 font-mono">
                No commands matching "{query}"
              </div>) : (filteredItems.map((item, idx) => {
            const Icon = item.icon;
            return (<button key={idx} onClick={item.action} className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FF5733]/15 text-left text-xs transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#1A202E] flex items-center justify-center text-slate-400 group-hover:text-[#FF7B59] group-hover:bg-[#FF5733]/20 transition-colors">
                        <Icon className="w-4 h-4"/>
                      </div>
                      <div>
                        <p className="font-medium text-slate-200 group-hover:text-white">{item.label}</p>
                        <p className="text-[11px] text-slate-500 font-mono">{item.category}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#FF5733] transition-colors"/>
                  </button>);
        }))}
          </div>

          {/* Footer Helper */}
          <div className="px-4 py-2 bg-[#0E1117] border-t border-[#232B3B] flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>Fast Navigation // Command Mode</span>
            <span>ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>);
};
