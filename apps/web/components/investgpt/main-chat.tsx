"use client";

import { useCallback, useEffect, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp, Paperclip } from "@hugeicons/core-free-icons";
import { cn } from "@workspace/ui/lib/utils";
import { useInvestgptChat } from "@/hooks/use-investgpt-chat";

export function MainChat() {
  const { messages, draft, setDraft, sendMessage } = useInvestgptChat();
  const endRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const hasConversation = messages.length > 0;

  return (
    <div className="relative z-10 flex min-h-0 flex-1 flex-col bg-transparent">
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-4 sm:px-6 md:px-8 custom-scrollbar">
        {!hasConversation ? (
          <div className="flex h-full w-full flex-col items-center justify-center pt-2 md:pt-4">
            <div className="mb-8 flex flex-col items-center text-center">
              <h1 className="max-w-4xl text-2xl font-semibold leading-[1.15] tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl lg:text-4xl">
                How can InvestGPT assist you today?
              </h1>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex w-full max-w-208 flex-col gap-6 py-6">
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

      <div className="relative z-20 shrink-0 investgpt-input-gradient px-4 pb-8 pt-4 sm:px-6 md:px-8">
        <div className="investgpt-chat-input-shell">
          <button
            type="button"
            className="investgpt-icon-btn ml-1 bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
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
            className="investgpt-icon-btn mr-1 bg-[#1a1a1a] text-white hover:opacity-90 dark:bg-white dark:text-black"
          >
            <HugeiconsIcon icon={ArrowUp} className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}