
import React from 'react';
import { CERTIFICATIONS } from '../data';

const CERT_COLORS = [
  "border-orange-500/30 text-orange-400 bg-orange-500/5",
  "border-blue-500/30 text-blue-400 bg-blue-500/5",
  "border-purple-500/30 text-purple-400 bg-purple-500/5",
  "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
  "border-pink-500/30 text-pink-400 bg-pink-500/5",
  "border-cyan-500/30 text-cyan-400 bg-cyan-500/5",
  "border-indigo-500/30 text-indigo-400 bg-indigo-500/5",
];

export const Certifications: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-6xl font-bold font-display mb-6 text-white tracking-tight">Certifications & Credentials</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATIONS.map((cert, idx) => {
          const color = CERT_COLORS[idx % CERT_COLORS.length];
          return (
            <div key={idx} className={`flex flex-col p-10 glass rounded-[2.5rem] hover:border-white/20 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2`}>
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-20" style={{color: color.split(' ')[1]}}></div>
              
              <div className="flex items-center justify-between mb-8">
                <div className="text-4xl filter group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all">🏆</div>
                <div className={`w-8 h-8 rounded-full border border-current opacity-20 flex items-center justify-center ${color.split(' ')[1]}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                {cert.name}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {cert.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
