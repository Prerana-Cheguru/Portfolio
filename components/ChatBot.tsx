
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { EXPERIENCES, SKILLS, SUMMARY } from '../data';

const SYSTEM_PROMPT = `You are a professional AI assistant representing Prerana Cheguru, an AI Solution Architect. 
Your goal is to answer questions about her professional background based on her resume data.
Data:
Summary: ${SUMMARY}
Skills: ${JSON.stringify(SKILLS)}
Experience: ${JSON.stringify(EXPERIENCES)}

Be concise, professional, and highlight her achievements like the $5M incremental revenue and 12+ years of experience. Always speak in the third person or as her official representative.`;

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        },
        history: messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }))
      });

      const result = await chat.sendMessage({ message: userMsg });
      const reply = result.text || "I'm sorry, I couldn't process that. Feel free to reach out to Prerana directly.";
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Error connecting to AI. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="glass w-[380px] sm:w-[420px] h-[600px] rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300 border-indigo-500/20">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 blur-[40px] rounded-full translate-x-[50%] -translate-y-[50%]"></div>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <div className="text-lg font-bold font-display">Prerana's Agent</div>
                <div className="text-xs text-white/70 uppercase tracking-widest font-bold">Online • Gemini Flash</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors relative z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-950/80">
            {messages.length === 0 && (
              <div className="text-center space-y-4 pt-10">
                <div className="text-3xl">👋</div>
                <p className="text-slate-300 text-sm font-medium">
                  Ask me about Prerana's background, <br/>her specific work at Citizens Bank,<br/> or her AI architecture approach.
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none shadow-lg' 
                    : 'glass text-slate-200 rounded-bl-none shadow-md border-white/5'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass px-4 py-3 rounded-2xl flex space-x-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/5 bg-slate-900/50 flex space-x-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-grow bg-slate-950 border border-white/5 rounded-2xl px-5 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button 
              onClick={handleSend}
              className="bg-indigo-600 p-3 rounded-2xl hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center group"
            >
              <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-[0_20px_50px_-15px_rgba(79,70,229,0.5)] transition-all transform hover:scale-110 active:scale-95 flex items-center space-x-4 group"
        >
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-indigo-600 rounded-full animate-pulse"></span>
          </div>
          <span className="font-bold tracking-wide uppercase text-xs">Chat with Agent</span>
        </button>
      )}
    </div>
  );
};
