
import React, { useState } from 'react';
import { EXPERIENCES } from '../data';

export const ExperienceSection: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-[64px] font-bold font-display mb-6 text-white tracking-tight">Work History</h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-10">
        {EXPERIENCES.map((exp: any, idx) => (
          <div key={idx} className="relative group">
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-[2.5rem] overflow-hidden transition-all hover:border-cyan-500/30">
              <div 
                className="p-8 md:p-10 cursor-pointer"
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black border border-slate-800 flex items-center justify-center text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-cyan-400">
                      {exp.client.charAt(0)}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{exp.client}</h3>
                        <div className="text-xl text-slate-300 font-medium">
                          {exp.role} <span className="text-slate-500 mx-2">|</span> <span className="text-slate-400 font-normal">{exp.period}</span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex flex-col items-end">
                        <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">
                          {exp.location}
                        </span>
                        <div className={`p-2 rounded-full bg-slate-800/50 transition-transform ${expandedIdx === idx ? 'rotate-180' : ''}`}>
                          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ${expandedIdx === idx ? 'max-h-[1500px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                      <div className="mb-8 p-8 bg-black/40 rounded-3xl border border-slate-800/40">
                         <div className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-6">Key Responsibilities & Achievements</div>
                         <ul className="space-y-4">
                          {exp.responsibilities.map((resp: string, rIdx: number) => (
                            <li key={rIdx} className="flex items-start space-x-4 leading-relaxed text-slate-300">
                              <span className="text-cyan-400 mt-1.5 flex-shrink-0 font-bold">→</span>
                              <span className="text-lg font-light">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                      <div className="text-emerald-400 font-bold text-lg md:text-xl flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        {exp.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
