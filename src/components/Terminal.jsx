import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { personalInfo, experience, projects, skillCategories } from '../data/portfolioData';
export const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        {
            command: 'welcome',
            output: (<div className="space-y-1.5 text-xs font-mono">
          <p className="text-[#D97745] font-semibold">Naman Gupta // Developer Environment v3.2.0 [Active]</p>
          <p className="text-slate-400">Type or select a command below to inspect verified experience, production projects, and technical skills.</p>
        </div>)
        }
    ]);
    const terminalEndRef = useRef(null);
    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);
    const handleCommand = (cmdText) => {
        const trimmed = cmdText.trim().toLowerCase();
        if (!trimmed)
            return;
        let outputNode = null;
        switch (trimmed) {
            case 'help':
                outputNode = (<div className="grid grid-cols-2 gap-2 text-xs text-slate-300 py-1 font-mono">
            <div><span className="text-[#D97745] font-medium">projects</span> : View production software</div>
            <div><span className="text-[#D97745] font-medium">experience</span> : Ameriprise internship details</div>
            <div><span className="text-[#D97745] font-medium">skills</span> : Verified engineering stack</div>
            <div><span className="text-[#D97745] font-medium">contact</span> : Email, LinkedIn & GitHub links</div>
            <div><span className="text-[#D97745] font-medium">whoami</span> : Concise engineer profile</div>
            <div><span className="text-[#D97745] font-medium">clear</span> : Clear terminal history</div>
          </div>);
                break;
            case 'whoami':
                outputNode = (<div className="text-xs space-y-1 text-slate-300 font-mono">
            <p className="text-white font-medium">{personalInfo.name} — {personalInfo.headline}</p>
            <p className="text-slate-400">Bennett University B.Tech CSE (2024-2028). Former Software Developer Intern @ Ameriprise Financial.</p>
            <p className="text-[#D97745]">Status: {personalInfo.status}</p>
          </div>);
                break;
            case 'experience':
                outputNode = (<div className="text-xs space-y-2 text-slate-300 font-mono">
            {experience.map(e => (<div key={e.id} className="p-2 rounded bg-[#131722] border border-[#232B3B]">
                <p className="font-semibold text-white">{e.role} @ <span className="text-[#D97745]">{e.company}</span> ({e.period})</p>
                <p className="text-slate-400 mt-1">Project: {e.project}</p>
                <p className="text-slate-400">Tech: {e.technologies.join(', ')}</p>
              </div>))}
          </div>);
                break;
            case 'projects':
                outputNode = (<div className="space-y-1.5 text-xs text-slate-300 font-mono">
            {projects.map(p => (<div key={p.id} className="flex items-center justify-between py-1 border-b border-[#232B3B]">
                <span className="text-[#D97745] font-medium">{p.title}</span>
                <span className="text-slate-400 text-[11px]">{p.category}</span>
              </div>))}
            <p className="text-[11px] text-slate-500 pt-1">Explore interactive architecture breakdowns below in the Projects section.</p>
          </div>);
                break;
            case 'skills':
                outputNode = (<div className="space-y-2 text-xs text-slate-300 font-mono">
            {skillCategories.slice(0, 3).map(cat => (<div key={cat.title}>
                <span className="text-[#D97745] font-medium">{cat.title}: </span>
                <span className="text-slate-400">{cat.skills.map(s => s.name).join(', ')}</span>
              </div>))}
          </div>);
                break;
            case 'contact':
                outputNode = (<div className="text-xs space-y-1.5 text-slate-300 font-mono">
            <p><span className="text-slate-500">Email:</span> <a href={`mailto:${personalInfo.email}`} className="text-[#D97745] underline">{personalInfo.email}</a></p>
            <p><span className="text-slate-500">Phone:</span> <span className="text-slate-200">{personalInfo.phone}</span></p>
            <p><span className="text-slate-500">GitHub:</span> <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-[#D97745] underline">{personalInfo.github}</a></p>
            <p><span className="text-slate-500">LinkedIn:</span> <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-[#D97745] underline">{personalInfo.linkedin}</a></p>
          </div>);
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            default:
                outputNode = (<p className="text-xs text-rose-400 font-mono">
            command not found: {trimmed}. Type <span className="text-[#D97745] font-mono">help</span> for available commands.
          </p>);
        }
        setHistory(prev => [...prev, { command: cmdText, output: outputNode }]);
        setInput('');
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCommand(input);
    };
    const quickCommands = ['help', 'skills', 'projects', 'experience', 'contact'];
    return (<div className="w-full rounded-2xl bg-[#0E1117] border border-[#232B3B] shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#131722] border-b border-[#232B3B]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"/>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"/>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"/>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-[#D97745]"/>
            naman@engineer:~
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300 bg-[#1A202E] px-2.5 py-0.5 rounded border border-[#2B3547]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B9522C]"/>
          <span>zsh session</span>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-5 font-mono text-xs max-h-72 sm:max-h-80 overflow-y-auto space-y-3 scrollbar-thin">
        {history.map((item, index) => (<div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-[#D97745]">naman@portfolio:~$</span>
              <span className="text-white font-medium">{item.command}</span>
            </div>
            <div className="pl-4 text-slate-300 border-l border-[#232B3B]">{item.output}</div>
          </div>))}
        <div ref={terminalEndRef}/>
      </div>

      {/* Quick Action Chips */}
      <div className="px-4 py-2 bg-[#131722]/60 border-t border-[#232B3B] flex items-center gap-2 overflow-x-auto">
        <span className="text-[11px] text-slate-500 font-mono shrink-0">
          // quick:
        </span>
        {quickCommands.map(cmd => (<button key={cmd} onClick={() => handleCommand(cmd)} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#1A202E] hover:bg-[#B9522C]/15 text-slate-300 hover:text-[#D97745] border border-[#2B3547] hover:border-[#C45D38]/40 transition-colors shrink-0">
            {cmd}
          </button>))}
      </div>

      {/* Command Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center px-4 py-2.5 bg-[#131722]/90 border-t border-[#232B3B]">
        <span className="text-[#D97745] font-mono text-xs mr-2">naman@portfolio:~$</span>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type 'help' or command..." className="flex-1 bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none font-mono"/>
        <button type="submit" className="p-1 rounded text-slate-400 hover:text-[#D97745] transition-colors" title="Execute command">
          <CornerDownLeft className="w-3.5 h-3.5"/>
        </button>
      </form>
    </div>);
};
