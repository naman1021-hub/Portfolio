import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export const NotFoundPage = () => {
    return (<main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-xs font-mono tracking-widest text-[#C45D38] uppercase mb-6">404 — Page Not Found</p>
      <h1 className="text-7xl sm:text-9xl font-black font-display text-white leading-none mb-4">
        LOST.
      </h1>
      <p className="text-slate-400 text-sm max-w-sm mb-10">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B9522C] hover:bg-[#9C472B] text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#C45D38]/25 hover:scale-105">
        <ArrowLeft className="w-4 h-4"/>
        BACK TO HOME
      </Link>
    </main>);
};
