
import React from 'react';

interface NavProps {
  scrolled: boolean;
}

export const Nav: React.FC<NavProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${
      scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          <span className="text-3xl font-bold font-display tracking-tighter transition-all hover:scale-110">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">P</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">C</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10">
           {['Experience', 'Skills', 'Framework'].map((item) => (
             <a 
               key={item} 
               href={`#${item.toLowerCase()}`} 
               className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
             >
               {item}
             </a>
           ))}
           <a 
            href="mailto:preranacheguru@shodat.com"
            className="px-6 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-indigo-500 hover:text-white transition-all shadow-xl"
           >
             Contact
           </a>
        </div>

        <button className="md:hidden text-white hover:text-indigo-500 transition-colors p-2 glass rounded-xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
