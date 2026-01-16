
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Prerana Cheguru. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="mailto:preranacheguru@shodat.com" className="text-slate-400 hover:text-white transition-colors">
              preranacheguru@shodat.com
            </a>
            <a href="https://www.linkedin.com/in/prerana-cheguru09/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1">
              <span>LinkedIn</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
