export default function InvestgptTextarea() {
    return (
        <div className="relative group w-full">
          {/* Subtle glowing effect behind for premium feel */}
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500/20 to-indigo-500/20 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-[24px] blur-sm opacity-50 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative">
            {/* AI-Powered Badge */}
            <div className="absolute -top-3.5 left-4 sm:left-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm z-10 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)] dark:shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300">AI-Powered</span>
            </div>

            {/* Input Container */}
            <div className="relative flex items-center w-full bg-white dark:bg-[#181C25] border border-slate-200 dark:border-slate-700/80 rounded-[20px] shadow-lg overflow-hidden transition-all hover:border-slate-300 dark:hover:border-slate-600">
              
              {/* Search Icon */}
              <div className="pl-4 sm:pl-5 pr-2 sm:pr-3 flex items-center justify-center text-slate-400 dark:text-slate-500 pointer-events-none">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Text Input */}
               <input 
                type="text"
                placeholder="Ask anything..."
                className="flex-1 w-full bg-transparent border-none outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base py-3.5 sm:py-4.5"
              />

              {/* Action Button */}
              <div className="pr-2 sm:pr-2.5 py-2">
                <button className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-[#232936] dark:hover:bg-[#2d3443] text-white text-xs sm:text-sm font-medium rounded-xl border border-slate-700 dark:border-slate-600/50 shadow-sm transition-colors whitespace-nowrap">
                  Ask AI
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    );
}