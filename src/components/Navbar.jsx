import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { personalInfo } from '../data/portfolioData';
export const Navbar = ({ onOpenResume }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);
    const navLinks = [
        { label: 'Projects', to: '/projects' },
        { label: 'Skills', to: '/skills' },
        { label: 'Education & Experience', to: '/experience' },
        { label: 'Contact', to: '/contact' },
    ];
    const isActive = (to) => location.pathname === to;
    return (<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-[#0B0D13]/90 backdrop-blur-md border-b border-[#232B3B]/80 py-4 shadow-xl shadow-black/40'
            : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand — arrow + name */}
        <Link to="/" className="flex items-center gap-2 group">
          <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#FF5733] transition-colors"/>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-display">
            {personalInfo.name}
            <span className="brand-dot text-[#FF5733] ml-0.5" aria-hidden="true">.</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (<Link key={link.to} to={link.to} className={`relative text-xs sm:text-sm font-medium transition-colors group ${isActive(link.to)
                ? 'text-white'
                : 'text-slate-400 hover:text-white'}`}>
              {link.label}
              {/* Active underline indicator */}
              <span className={`absolute -bottom-1 left-0 h-px bg-[#FF5733] transition-all duration-300 ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}/>
            </Link>))}
        </nav>

        {/* Desktop right: theme toggle + resume */}
        <div className="hidden lg:flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-[#181E2C] transition-colors" aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={theme === 'light'} title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
            {theme === 'dark' ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4 text-[#FF5733]"/>}
          </button>

          <button onClick={onOpenResume} className="navbar-resume-button px-6 py-2.5 rounded-full bg-[#FF5733] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 border border-[#232B3B] hover:border-[#FF5733] shadow-lg shadow-black/50 hover:shadow-[#FF5733]/25">
            DOWNLOAD RESUME
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-full text-slate-400" aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={theme === 'light'} title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
            {theme === 'dark' ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg text-slate-300 hover:text-white" aria-label="Toggle navigation menu">
            {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (<div className="lg:hidden border-b border-[#232B3B] bg-[#0B0D13]/98 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (<Link key={link.to} to={link.to} className={`text-base font-medium py-2.5 border-b border-[#1A2030] transition-colors ${isActive(link.to)
                    ? 'text-[#FF5733]'
                    : 'text-slate-200 hover:text-[#FF5733]'}`}>
                {link.label}
              </Link>))}
          </div>

          <div className="pt-4 border-t border-[#232B3B]">
            <button onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
            }} className="w-full py-3 rounded-full bg-[#FF5733] text-white text-xs font-bold tracking-wider uppercase shadow-md shadow-[#FF5733]/25">
              DOWNLOAD RESUME
            </button>
          </div>
        </div>)}
    </header>);
};
