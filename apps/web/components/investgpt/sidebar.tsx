"use client";

import { cn } from "@workspace/ui/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown,
  Cancel01Icon,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
} from "@hugeicons/core-free-icons";
import { INVESTGPT_CHAT_HISTORY } from "@/config/investgpt";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-2 flex items-center justify-between px-1">
      <div className="flex items-center gap-2">
        {/* <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-muted-foreground"
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg> */}
        <HugeiconsIcon icon={ArrowDown}className="size-3"/>
        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          {title}
        </span>
      </div>
    </div>
  );
}

function ChatItem({ title }: { title: string }) {
  return (
    <button
      type="button"
      className="group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-[1.25rem] px-3 py-3 text-left text-[13px] text-muted-foreground transition-all hover:bg-accent/60 hover:text-foreground"
    >
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <HugeiconsIcon
          icon={MessageSquare}
          className="h-[18px] w-[18px] shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
        />
        <span className="truncate font-medium tracking-wide">{title}</span>
      </div>
      <span className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
        <HugeiconsIcon icon={MoreHorizontal} className="h-4 w-4" />
      </span>
    </button>
  );
}

type SidebarProps = {
  mobileOpen: boolean;
  onMobileClose: () => void;
};

export function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <aside
      className={cn(
        "z-50 flex h-full w-[min(280px,85vw)] shrink-0 flex-col border-sidebar-border bg-sidebar font-sans text-sidebar-foreground transition-transform duration-300 ease-out",
        "fixed inset-y-0 left-0 border-r lg:relative lg:z-10 lg:translate-x-0",
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}
    >
      <div className="flex shrink-0 items-center justify-between gap-2 px-5 pb-4 pt-6">
        <span className="text-sm font-bold tracking-tight text-foreground">
          History
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground lg:hidden"
            aria-label="Close sidebar"
            onClick={onMobileClose}
          >
            <HugeiconsIcon icon={Cancel01Icon} className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden text-muted-foreground transition-colors hover:text-foreground lg:inline-flex"
            aria-label="More options"
          >
            <HugeiconsIcon icon={MoreHorizontal} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mb-4 shrink-0 space-y-3 px-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-[1.25rem] bg-accent px-4 py-3.5 text-[13px] font-semibold text-accent-foreground transition-all hover:opacity-90"
        >
          <HugeiconsIcon icon={Plus} className="h-4 w-4" />
          New Chat
        </button>
        <div className="relative">
          <HugeiconsIcon
            icon={Search}
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            placeholder="Search Intelligence"
            className="w-full rounded-[1.25rem] border border-border bg-transparent py-3.5 pl-11 pr-4 text-[13px] text-foreground transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none hover:bg-accent/40"
          />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-4 pb-6">
        <div className="min-h-0 flex-1 space-y-8 overflow-y-auto overscroll-contain pr-1 [scrollbar-gutter:stable]">
          <div>
            <SectionHeader title="Pinned Strategies" />
            <div className="flex flex-col gap-1">
              <ChatItem title="Market Prediction Model" />
              <ChatItem title="K-Score High Growth" />
            </div>
          </div>
          <div>
            <SectionHeader title="Recent History" />
            <div className="flex flex-col gap-1">
              {INVESTGPT_CHAT_HISTORY.map((chat) => (
                <ChatItem key={chat.title} title={chat.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
