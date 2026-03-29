"use client";

import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  ArrowUp, 
  ArrowUpRight, 
  Paperclip, 
  Settings, 
  Sparkles, 
  Menu01Icon, 
  Moon01Icon, 
  Sun01Icon,
  AiChatIcon 
} from "@hugeicons/core-free-icons";
import { cn } from "@workspace/ui/lib/utils";

/** * Reusable Agent Card Component 
 * Optimized for the minimalist Qubi-style box format
 */
const AgentCard = ({ title, description }: { title: string; description: string }) => (
  <button className="group relative flex flex-col items-start p-6 bg-white dark:bg-[#15161A]/80 rounded-[1.25rem] border border-[#f0f0f0] dark:border-white/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#e0e0e0] dark:hover:border-white/10 transition-all text-left min-h-[160px] active:scale-[0.98]">
    <div className="flex items-start justify-between w-full mb-6">
      <span className="font-semibold text-[#1a1a1a] dark:text-slate-200 text-lg leading-[1.3] w-3/4 pr-2">
        {title}
      </span>
      <div className="p-[3px] rounded-full border border-[#eaeaea] dark:border-white/10 text-[#888] group-hover:text-[#444] dark:group-hover:text-slate-200 transition-colors">
        <HugeiconsIcon icon={ArrowUpRight} className="h-[14px] w-[14px]" />
      </div>
    </div>
    <p className="text-[11px] text-[#777] dark:text-slate-400 leading-[1.6]">
      {description}
    </p>
  </button>
);

export function MainChat({ onMenuClick }: { onMenuClick?: () => void }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync with system or local storage theme if necessary
  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const agentCards = [
    {
      title: "Market Prediction Agent",
      description: "Proprietary AI forecasting market anomalies and identifying high-alpha trends."
    },
    {
      title: "Portfolio Audit Agent",
      description: "Get an AI review of your diversified holdings, sector exposure, and K-Score risk."
    },
    {
      title: "Global Macro Analysis",
      description: "Deep dive into macroeconomic data, interest rates, and global events."
    },
    {
      title: "Quantitative Modeling",
      description: "Access advanced tools for algorithmic strategy building, backtesting, and factor modeling."
    }
  ];

  return (
    <div className="relative flex-1 h-screen flex flex-col bg-[#fdfdfd] dark:bg-[#0b0c10] overflow-hidden font-sans transition-colors duration-300">
      
      {/* Mesh Background - Matches the original pastel theme */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.85] dark:opacity-20">
        <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[80%] bg-[#f3e8ff] dark:bg-indigo-900/30 blur-[130px] rounded-full"></div>
        <div className="absolute top-[10%] right-[-20%] w-[60%] h-[70%] bg-[#faf5ff] dark:bg-purple-900/20 blur-[110px] rounded-full"></div>
      </div>

      {/* Top Navbar - Responsive with Menu for Mobile */}
      <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 py-6 w-full">
        <div className="flex items-center gap-4">
          {/* Menu Toggle for Mobile (Hides on MD+) */}
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
          >
            <HugeiconsIcon icon={Menu01Icon} size={20} />
          </button>
          <span className="text-xl font-bold text-[#1a1a1a] dark:text-slate-200 tracking-tight">
            InvestGPT
          </span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-all"
            title="Toggle Theme"
          >
            <HugeiconsIcon icon={isDarkMode ? Sun01Icon : Moon01Icon} size={18} />
          </button>
          <button className="hidden sm:flex items-center gap-2 rounded-full bg-[#dcfce3] dark:bg-emerald-500/20 text-[#0f5132] dark:text-emerald-400 px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors hover:bg-[#cbf5d5]">
            <HugeiconsIcon icon={Sparkles} className="h-3.5 w-3.5" />
            Update
          </button>
          <button className="flex items-center gap-2 rounded-full bg-[#333] dark:bg-[#1a1c23] text-[#f8f8f8] px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors hover:bg-[#222]">
            <HugeiconsIcon icon={Settings} className="h-3.5 w-3.5" />
            <span className="hidden xs:inline">Settings</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 max-w-[1000px] mx-auto w-full mb-32 md:mt-[-5vh] overflow-y-auto no-scrollbar">
        
        <div className="flex flex-col items-center text-center mb-12 md:mb-[4.5rem]">
          
          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#1a1a1a] dark:text-slate-50 mb-5 leading-[1.2]">
            How can <span className="text-[#6d28d9] dark:text-[#8b5cf6]">InvestGPT</span> assist you today?
          </h1>
        </div>

        {/* Agent Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {agentCards.map((card, idx) => (
            <AgentCard key={idx} title={card.title} description={card.description} />
          ))}
        </div>
      </div>

      {/* Fixed Bottom Input Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 px-4 flex justify-center bg-gradient-to-t from-[#fdfdfd] via-[#fdfdfd] to-transparent dark:from-[#0b0c10] dark:via-[#0b0c10] dark:to-transparent pt-12 pointer-events-none">
        <div className="w-full max-w-[850px] relative flex items-center bg-[#f4f4f5] dark:bg-[#1d1f27] rounded-full p-[6px] shadow-sm border border-transparent dark:border-white/5 pointer-events-auto">
          <button className="flex items-center justify-center w-[42px] h-[42px] bg-[#333] hover:bg-[#222] dark:bg-[#2c2f3a] text-white rounded-full transition-colors ml-1 shrink-0 active:scale-90">
            <HugeiconsIcon icon={Paperclip} className="h-5 w-5" />
          </button>
          
          <input 
            type="text" 
            placeholder="Describe your investment query..." 
            className="flex-1 bg-transparent px-4 sm:px-5 py-3 text-[14px] sm:text-[15px] font-medium text-[#1a1a1a] dark:text-slate-100 placeholder:text-[#999] placeholder:font-normal focus:outline-none"
          />
          
          <button className="hidden sm:flex p-3 text-[#999] hover:text-[#555] dark:hover:text-slate-200 transition-colors mr-1 shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </button>
          
          <button className="flex items-center justify-center w-[42px] h-[42px] bg-[#dcfce3] hover:bg-[#cbf5d5] dark:bg-blue-600 dark:hover:bg-blue-500 text-[#0f5132] dark:text-white rounded-full transition-all mr-1 shrink-0 active:scale-90">
            <HugeiconsIcon icon={ArrowUp} className="h-[22px] w-[22px]" />
          </button>
        </div>
      </div>

    </div>
  );
}