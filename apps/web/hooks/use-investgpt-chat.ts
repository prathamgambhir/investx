"use client";

import { useCallback, useState } from "react";
import { INVESTGPT_ASSISTANT_PLACEHOLDER } from "@/config/investgpt";
import type { ChatMessage } from "@/types/investgpt";

export function useInvestgptChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");

  const sendMessage = useCallback(() => {
    const trimmed = draft.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setDraft("");

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: INVESTGPT_ASSISTANT_PLACEHOLDER,
        },
      ]);
    }, 500);
  }, [draft]);

  return {
    messages,
    draft,
    setDraft,
    sendMessage,
  };
}

