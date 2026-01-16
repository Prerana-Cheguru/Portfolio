
import React, { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Framework } from './components/Framework';
import { ExperienceSection } from './components/ExperienceSection';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { ChatBot } from './components/ChatBot';
import { Footer } from './components/Footer';
import { SUMMARY, EXPERIENCES, SKILLS, CERTIFICATIONS } from './data';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadResume = () => {
    const divider = "\n" + "=".repeat(80) + "\n";
    let resumeText = `PRERANA CHEGURU\nAI Solution Architect\nEmail: preranacheguru@shodat.com\nLinkedIn: https://www.linkedin.com/in/prerana-cheguru09/\n\n${divider}PROFESSIONAL SUMMARY\n${divider}${SUMMARY}\n\n${divider}CERTIFICATIONS\n${divider}${CERTIFICATIONS.map(c => `* ${c.name}: ${c.description}`).join('\n')}\n\n${divider}TECHNICAL SKILLS\n${divider}${SKILLS.map(s => `[${s.category}]\n${s.technologies}`).join('\n\n')}\n\n${divider}PROFESSIONAL EXPERIENCE\n${divider}\n`;
    EXPERIENCES.forEach(exp => {
      resumeText += `\n${exp.client} | ${exp.role}\n${exp.location} | ${exp.period}\nImpact: ${(exp as any).impact}\n\nResponsibilities:\n${exp.responsibilities.map(r => `- ${r}`).join('\n')}\n${"-".repeat(40)}\n`;
    });
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeText));
    element.setAttribute('download', 'Prerana_Cheguru_Full_Resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-black">
      <Nav scrolled={scrolled} />
      
      <main>
        <Hero />
        
        <section id="framework" className="py-24 border-y border-slate-900">
          <Framework />
        </section>

        <section id="experience" className="py-24 bg-slate-950/20">
          <ExperienceSection />
        </section>

        <section id="skills" className="py-24 border-y border-slate-900">
          <Skills />
        </section>

        <section id="certifications" className="py-24">
          <Certifications />
        </section>

        <section className="py-24 bg-gradient-to-t from-indigo-950/20 to-black flex flex-col items-center text-center px-4">
           <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">Ready to Transform Enterprise Solutions?</h2>
           <p className="text-slate-400 text-lg mb-10 max-w-2xl">
             Let's discuss how AI, Process Automation, Business Intelligence, and Full-Stack Engineering can drive measurable business impact.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:preranacheguru@shodat.com" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all">
                Get In Touch
              </a>
              <button 
                onClick={downloadResume}
                className="px-10 py-4 border border-slate-800 text-white font-bold rounded-full hover:bg-white/5 transition-all"
              >
                Download Resume
              </button>
           </div>
        </section>
      </main>

      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;
