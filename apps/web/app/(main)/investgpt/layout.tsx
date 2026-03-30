import { InvestGPTShell } from "@/components/investgpt/investgpt-shell";
import React from "react";

export default function InvestGPTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute inset-0 z-50 flex h-[100dvh] w-full overflow-hidden bg-background">
      <InvestGPTShell>{children}</InvestGPTShell>
    </div>
  );
}
