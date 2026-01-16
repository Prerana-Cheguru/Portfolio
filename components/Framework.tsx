
import React from 'react';

const CORE_DATA = [
  {
    title: "AI Development",
    subtitle: "LLM Integration, Generative AI, Conversational AI, RAG Pipelines",
    tags: ["GPT-4, Claude, Llama", "LangChain, LlamaIndex", "Vector DBs", "Fine-tuning, LoRA"]
  },
  {
    title: "Process Automation",
    subtitle: "Power Automate, Workflow Orchestration, RPA, Governance",
    tags: ["Power Automate Cloud/Desktop", "Complex Logic & Error Handling", "Custom Connectors", "DLP Policies"]
  },
  {
    title: "Business Intelligence",
    subtitle: "Power BI, Data Visualization, Advanced DAX, ETL",
    tags: ["Power BI with Advanced DAX", "Complex Data Models", "Real-time Dashboards", "AWS Glue, Azure Data Factory"]
  },
  {
    title: "Full-Stack Engineering",
    subtitle: "React, Node.js, Python, .NET, REST/GraphQL APIs",
    tags: ["React, Angular, Node.js", "Python, .NET, FastAPI", "Secure APIs, OAuth 2.0", "Docker, Kubernetes"]
  }
];

export const Framework: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-[64px] font-bold font-display mb-8 text-white tracking-tight">
          The Quad-Core Framework
        </h2>
        <p className="text-slate-400 text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed font-medium">
          Four pillars of expertise working in perfect harmony to deliver enterprise-grade intelligent solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CORE_DATA.map((core, idx) => (
          <div key={idx} className="bg-slate-900/30 border border-slate-800/50 p-8 rounded-[2rem] flex flex-col hover:border-indigo-500/30 transition-all group">
            <div className="flex justify-end items-start mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{core.title}</h3>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-6 leading-tight h-10">
              {core.subtitle}
            </p>
            
            <div className="space-y-3 mt-auto">
              {core.tags.map((tag, tIdx) => (
                <div key={tIdx} className="text-sm text-slate-400 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
