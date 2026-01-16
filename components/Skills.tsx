
import React from 'react';
import { SKILLS } from '../data';

const CATEGORY_STYLES: Record<string, string> = {
  "Languages": "text-blue-400 border-blue-500/20 bg-blue-500/5",
  "Frontend": "text-purple-400 border-purple-500/20 bg-purple-500/5",
  "Backend & APIs": "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  "AI/ML": "text-pink-400 border-pink-500/20 bg-pink-500/5",
  "NLP/Generative AI": "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
  "Power Platform": "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
  "Cloud & Data": "text-orange-400 border-orange-500/20 bg-orange-500/5",
};

export const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold font-display mb-6 text-white tracking-tight">Technical Expertise</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((item, idx) => {
          const style = CATEGORY_STYLES[item.category] || "text-slate-400 border-slate-500/20 bg-slate-500/5";
          return (
            <div key={idx} className="glass p-10 rounded-[2.5rem] hover:border-white/20 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              
              <h3 className={`text-xl font-bold mb-8 flex items-center gap-3 ${style.split(' ')[0]}`}>
                <span className="w-2 h-2 rounded-full bg-current"></span>
                {item.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {item.technologies.split(',').map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-4 py-2 rounded-xl bg-slate-900/50 border border-white/5 text-slate-400 text-xs font-bold hover:text-white hover:border-white/20 transition-all cursor-default shadow-sm"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
