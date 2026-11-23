import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Code2, RefreshCw } from 'lucide-react';
import { Github } from './SocialIcons';
import { githubShowcase } from '../data/portfolioData';
export const GitHubActivity = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/naman1021-hub/repos?sort=updated&per_page=6');
                if (response.ok) {
                    const data = await response.json();
                    setRepos(data);
                }
                else {
                    useFallback();
                }
            }
            catch {
                useFallback();
            }
            finally {
                setLoading(false);
            }
        };
        const useFallback = () => {
            setRepos(githubShowcase.publicRepos.map((r, i) => ({
                id: i + 1,
                name: r.name,
                html_url: r.url,
                description: r.description,
                language: r.language,
                stargazers_count: r.stars,
                forks_count: r.forks,
                updated_at: 'Recently'
            })));
        };
        fetchRepos();
    }, []);
    return (<section className="py-20 relative bg-[#0C0E14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#D97745] font-mono text-xs uppercase tracking-wider font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#B9522C]"/>
              <span>SOURCE REPOSITORIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <Github className="w-7 h-7 text-white"/>
              <span>Public Developer Repositories</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Synchronized directly with <a href={githubShowcase.profileUrl} target="_blank" rel="noreferrer" className="text-[#D97745] underline font-mono hover:text-[#E3926E]">github.com/{githubShowcase.username}</a>
            </p>
          </div>

          <a href={githubShowcase.profileUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#131722] border border-[#232B3B] text-slate-200 hover:text-white hover:border-[#C45D38]/40 text-xs font-medium transition-colors self-start sm:self-auto">
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5"/>
          </a>
        </div>

        {/* Repositories Cards */}
        {loading ? (<div className="flex items-center justify-center p-12 text-xs font-mono text-slate-400">
            <RefreshCw className="w-4 h-4 animate-spin text-[#D97745] mr-2"/>
            <span>Fetching repositories...</span>
          </div>) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {repos.map((repo) => (<motion.a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" whileHover={{ y: -3 }} transition={{ duration: 0.2 }} className="p-5 rounded-2xl bg-[#131722]/80 hover:bg-[#171D2B] border border-[#232B3B] hover:border-[#C45D38]/40 transition-all flex flex-col justify-between group shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white group-hover:text-[#D97745] transition-colors font-mono">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#D97745] transition-colors"/>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {repo.description || 'Public software engineering repository.'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#232B3B] text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Code2 className="w-3.5 h-3.5 text-[#D97745]"/>
                    {repo.language || 'Codebase'}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400"/>
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-slate-400"/>
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.a>))}
          </div>)}
      </div>
    </section>);
};
