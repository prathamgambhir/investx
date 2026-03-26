"use client";

import { AiCloudIcon, AlgorithmIcon, Analytics01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@workspace/ui/lib/utils";

export default function FeatureSection() {
  const features = [
    {
      icon: <HugeiconsIcon icon={AlgorithmIcon} size={24} className="text-blue-600 dark:text-blue-400" />,
      title: "Predictive K-Score AI",
      description: "Our proprietary ranking engine analyzes 200+ factors to assign every stock a rating from 1 to 9, identifying high-alpha opportunities before the market moves.",
      className: "md:col-span-1"
    },
    {
      icon: <HugeiconsIcon icon={AiCloudIcon} size={24} className="text-blue-600 dark:text-blue-400" />,
      title: "Agentic Market Research",
      description: "Deploy specialized AI agents to scan SEC filings, earnings calls, and global news sentiment to generate institutional-grade research in seconds.",
      className: "md:col-span-1"
    },
    {
      icon: <HugeiconsIcon icon={Analytics01Icon} size={24} className="text-blue-600 dark:text-blue-400" />,
      title: "Unified Portfolio Command",
      description: "Connect unlimited brokers and crypto wallets into a single glass-pane view. Track your real-time net worth, risk exposure, and sector allocation across all global asset classes seamlessly.",
      // This makes the 3rd card take full width on tablets, then back to 1 column on desktops
      className: "md:col-span-2 lg:col-span-1" 
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Badge */}
      <div className="z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 dark:bg-slate-900/40 dark:border-slate-800/80 backdrop-blur-sm text-xs font-medium dark:text-slate-300 mb-6 sm:mb-8">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] dark:bg-blue-400 dark:shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
        Intelligence
      </div>

      {/* Heading */}
      <h2 className="z-10 text-3xl md:text-5xl lg:text-5xl font-semibold text-center tracking-tight text-slate-900 dark:text-slate-50 mb-6 leading-tight max-w-3xl px-4">
        <span className="text-slate-500 dark:text-slate-400">Institutional Tech for</span><br /> 
        Modern Alpha Generation
      </h2>
      
      {/* Subtext */}
      <p className="z-10 max-w-2xl text-center text-sm md:text-base text-slate-600 dark:text-slate-400 mb-16 px-4">
        Harness the power of Quantamental analysis. Our AI-driven engine processes millions of data points to give you a clear edge in the markets.
      </p>

      {/* Cards Grid */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={cn(
              "group relative flex flex-col items-center text-center p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-[#0a0a0a]/40 border border-slate-200 dark:border-white/5 transition-all duration-500 hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] cursor-default",
              feature.className
            )}
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-500/[0.03] dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Icon Wrapper */}
            <div className="relative w-16 h-16 flex items-center justify-center rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] mb-8 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500/50">
               {feature.icon}
            </div>
            
            {/* Title */}
            <h3 className="relative text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className={cn(
                "relative text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
                feature.className.includes("md:col-span-2") ? "max-w-2xl" : "max-w-xs"
            )}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}