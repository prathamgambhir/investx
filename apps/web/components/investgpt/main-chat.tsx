"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUp,
  Paperclip,
  Sparkles,
  Menu01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@workspace/ui/lib/utils";
import { ToggleThemeButton } from "@/components/theme/toggle-theme";
import { InvestGPTLogo } from "@/components/common/investgpt-logo";
import { useInvestGPTUi } from "@/components/investgpt/investgpt-shell";
import { Button } from "@workspace/ui/components/button";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

const ASSISTANT_PLACEHOLDER =
  "Thanks for your message. This is a preview response — InvestGPT will connect to your models here.";

export function MainChat() {
  const { openMobileSidebar } = useInvestGPTUi();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const sendMessage = useCallback(() => {
    const trimmed = draft.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: `Math.random()`,
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setDraft("");

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `Math.random()`,
          role: "assistant",
          content: ASSISTANT_PLACEHOLDER,
        },
      ]);
    }, 500);
  }, [draft]);

  const hasConversation = messages.length > 0;

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden font-sans">
      {/* Mesh Background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-landing-radial" aria-hidden />
      <div className="investgpt-mesh" aria-hidden>
        <div className="investgpt-mesh-blob investgpt-mesh-blob--1" />
        <div className="investgpt-mesh-blob investgpt-mesh-blob--2" />
      </div>

      {/* Top Navigation */}
      <nav className="relative z-10 flex w-full shrink-0 items-center justify-between px-4 py-4 sm:px-6 md:px-8 md:py-6">
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0 rounded-xl border border-slate-200/80 bg-white/80 text-slate-600 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 lg:hidden"
            onClick={openMobileSidebar}
          >
            <HugeiconsIcon icon={Menu01Icon} className="size-4" />
          </Button>
          <InvestGPTLogo className="min-w-0" />
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ToggleThemeButton />
          {/* Credits Indicator */}
          <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-[#dcfce3] px-4 py-2 text-xs font-bold tracking-wide text-[#0f5132] dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 sm:flex">
            <HugeiconsIcon icon={Sparkles} className="h-3.5 w-3.5" />
            10 Credits left
          </div>
          {/* Login Button */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-all hover:bg-black dark:bg-white dark:text-black dark:hover:bg-slate-200"
          >
            <HugeiconsIcon icon={UserIcon} className="h-3.5 w-3.5" />
            Login
          </button>
        </div>
      </nav>

      {/* Main Chat/Landing Container */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col bg-transparent">
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-4 sm:px-6 md:px-8 custom-scrollbar">
          {!hasConversation ? (
            /* Centered Hero Section - Agent Cards Removed */
            <div className="flex h-full w-full flex-col items-center justify-center pt-2 md:pt-4">
              <div className="mb-8 flex flex-col items-center text-center">
                <h1 className="max-w-4xl text-2xl font-semibold leading-[1.15] tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl lg:text-4xl">
                  How can{" "}
                  {/* <span className="bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] bg-clip-text text-transparent"> */}
                    InvestGPT {" "}
                  {/* </span>{" "} */}
                  assist you today?
                </h1>
              </div>
            </div>
          ) : (
            /* Enhanced Message Thread */
            <div className="mx-auto flex w-full max-w-[52rem] flex-col gap-6 py-6">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex w-full animate-in fade-in slide-in-from-bottom-2 duration-300",
                    m.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[min(90%,38rem)] px-5 py-3.5 text-sm leading-relaxed shadow-sm sm:text-[15px]",
                      m.role === "user"
                        ? "rounded-[1.5rem] rounded-tr-none bg-slate-800 text-white"
                        : "rounded-[1.5rem] rounded-tl-none border border-slate-200 bg-white/70 text-slate-800 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200",
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={endRef} className="h-10 shrink-0" aria-hidden />
            </div>
          )}
        </div>

        {/* Input Bar Area */}
        <div className="relative z-20 shrink-0 investgpt-input-gradient px-4 pb-8 pt-4 sm:px-6 md:px-8">
          <div className="mx-auto flex w-full max-w-[850px] items-center rounded-full border border-slate-200/50 bg-white/80 p-1.5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#1d1f27]/90">
            <button
              type="button"
              className="ml-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-slate-200 active:scale-95 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
              aria-label="Attach file"
            >
              <HugeiconsIcon icon={Paperclip} className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask anything about the market..."
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm font-medium text-slate-900 placeholder:font-normal placeholder:text-slate-400 focus:outline-none dark:text-slate-100 sm:text-[15px]"
            />

            <button
              type="button"
              onClick={sendMessage}
              className="mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-all hover:opacity-90 active:scale-95 dark:bg-white dark:text-black"
              aria-label="Send message"
            >
              <HugeiconsIcon icon={ArrowUp} className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}