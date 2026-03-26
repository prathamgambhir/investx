"use client"

import { BrainIcon, IdeaIcon, NotificationIcon, SettingsIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "@workspace/ui/lib/utils"

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
)

const AI_FEATURES = [
  {
    icon: BrainIcon,
    title: "Personalized Insights",
    description: "Receive tailored recommendations and insights based on your portfolio and investment goals.",
  },
  {
    icon: NotificationIcon,
    title: "Smart Alerts",
    description: "Get notified about market trends, price changes, and opportunities that align with your strategy.",
  },
  {
    icon: SettingsIcon,
    title: "Portfolio Optimization",
    description: "Leverage AI to identify underperforming assets and suggest strategies to maximize returns.",
  },
  {
    icon: IdeaIcon,
    title: "Interactive Learning",
    description: "Access AI-driven tutorials and simulations to enhance your investment knowledge and decision-making skills.",
  },
]

export default function AIFeature() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-transparent flex flex-col items-center justify-center overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center px-4 max-w-3xl mb-16 md:mb-24 z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] dark:bg-blue-400 dark:shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
          AI Feature
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-slate-50 mb-6">
          InvestX with an AI assistant
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          InvestX&apos;s AI Assistant simplifies investing with real-time insights, tailored recommendations, and intelligent market tracking.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Grid lines */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent -translate-y-1/2" />
        <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-linear-to-b from-transparent via-slate-200 dark:via-slate-800 to-transparent -translate-x-1/2" />

        {/* Center Orb */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl dark:bg-blue-600/30" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-blue-200 bg-linear-to-b from-blue-100 to-blue-50 shadow-[0_0_20px_rgba(59,130,246,0.4)] dark:border-blue-400/80 dark:from-blue-500 dark:to-blue-700 dark:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
            <SparklesIcon className="h-6 w-6 text-blue-600 dark:text-white" />
          </div>
        </div>

        {/* The 4 Quadrants mapped */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-24 gap-x-8 md:gap-x-16">
          {AI_FEATURES.map((feature, index) => {
            return (
              <div 
                key={feature.title}
                className={cn(
                  "flex flex-col justify-center p-4 items-center group transition-all duration-300",
                )}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50 transition-colors group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30">
                  <HugeiconsIcon  
                    icon={feature.icon} 
                    className="h-7 w-7 text-slate-700 dark:text-slate-300 transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400" 
                  />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100 max-w-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm text-center mx-auto">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}