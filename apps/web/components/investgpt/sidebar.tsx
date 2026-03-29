"use client"

import { cn } from "@workspace/ui/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
} from "@hugeicons/core-free-icons"

// Flattened Chat History Data
const CHAT_HISTORY = [
  { title: "Nvidia Q3 Forecast Analysis" },
  { title: "ETF Pair Trading Strategy Review" },
  { title: "Understanding K-Score Ratios" },
  { title: "Bitcoin Adoption Thesis Breakdown" },
  { title: "Quantamental Model Backtest Results" },
  { title: "SEC Filing Summary for AAPL" },
]

// --- Reusable Sub-Components ---

const NavButton = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={cn(
    "flex cursor-pointer items-center gap-3 rounded-[1.25rem] px-3 py-3 transition-all duration-200",
    active ? "bg-[#2a2a2a] text-slate-200" : "text-[#999] hover:bg-[#1a1a1a] hover:text-slate-200"
  )}>
    {icon}
    <span className="text-[13px] font-medium">{label}</span>
  </div>
)

const SectionHeader = ({ title }: { title: string }) => (
  <div className="mb-2 flex items-center justify-between px-1">
    <div className="flex items-center gap-2">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#666]">
        <polyline points="6 9 12 15 18 9" />
      </svg>
      <span className="text-[11px] font-bold uppercase tracking-wider text-[#666]">
        {title}
      </span>
    </div>
    {/* <div className="flex items-center gap-2 text-[#666]">
      <button className="transition-colors hover:text-slate-300">
        <HugeiconsIcon icon={Plus} className="h-3.5 w-3.5" />
      </button>
      <button className="transition-colors hover:text-slate-300">
        <HugeiconsIcon icon={MoreHorizontal} className="h-3.5 w-3.5" />
      </button>
    </div> */}
  </div>
)

const ChatItem = ({ title }: { title: string }) => (
  <button className="group relative flex w-full items-center justify-between overflow-hidden rounded-[1.25rem] px-3 py-3 gap-3 text-left text-[13px] text-[#999] transition-all hover:bg-[#1a1a1a] hover:text-slate-200">
    <div className="flex items-center gap-3 overflow-hidden ">
      <HugeiconsIcon
        icon={MessageSquare}
        className="h-[18px] w-[18px] shrink-0 text-[#666] transition-colors group-hover:text-slate-300"
      />
      <span className="truncate font-medium tracking-wide">
        {title}
      </span>
    </div>
    <span className="text-[#666] opacity-0 transition-opacity group-hover:opacity-100">
      <HugeiconsIcon icon={MoreHorizontal} className="h-4 w-4" />
    </span>
  </button>
)

// --- Main Sidebar Component ---

export function Sidebar() {
  return (
    <aside className="z-10 hidden h-screen w-[280px] flex-col border-r border-[#1e1e1e] bg-[#121212] font-sans text-slate-300 md:flex">
      {/* Brand Header */}
      <div className="flex items-center justify-between px-5 pt-6 pb-4">
        <span className="text-sm font-bold tracking-tight text-white">InvestGPT</span>
        <button className="text-slate-500 transition-colors hover:text-slate-300">
          <HugeiconsIcon icon={MoreHorizontal} className="h-5 w-5" />
        </button>
      </div>

      {/* Main Action Buttons */}
      <div className="mt-2 mb-6 flex flex-col gap-3 px-4">
        <button className="flex w-full items-center gap-3 rounded-[1.25rem] bg-[#1f1f1f] px-4 py-3.5 text-[13px] font-semibold text-slate-100 transition-all hover:bg-[#2a2a2a] hover:shadow-lg">
          <HugeiconsIcon icon={Plus} className="h-4 w-4" />
          New Chat
        </button>
        <div className="relative">
          <HugeiconsIcon icon={Search} className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#666]" />
          <input
            type="text"
            placeholder="Search Intelligence"
            className="w-full rounded-[1.25rem] border border-[#1f1f1f] bg-transparent py-3.5 pr-4 pl-11 text-[13px] text-slate-200 transition-colors placeholder:text-[#555] focus:border-[#333] focus:outline-none hover:bg-[#161616]"
          />
        </div>
      </div>

      {/* Navigation & History */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-8 custom-scrollbar">

        {/* Pinned Section */}
        <div>
          <SectionHeader title="Pinned Strategies" />
          <div className="flex flex-col gap-1">
             <ChatItem title="Market Prediction Model" />
             <ChatItem title="K-Score High Growth" />
          </div>
        </div>

        {/* Flat Chat History */}
        <div>
          <SectionHeader title="Recent History" />
          <div className="flex flex-col gap-1">
            {CHAT_HISTORY.map((chat, index) => (
              <ChatItem key={index} title={chat.title} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}