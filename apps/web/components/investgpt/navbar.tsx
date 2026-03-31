"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Sparkles, Menu01Icon, UserIcon } from "@hugeicons/core-free-icons";
import { ToggleThemeButton } from "@/components/theme/toggle-theme";
import { InvestGPTLogo } from "@/components/common/investgpt-logo";
import { useInvestGPTUi } from "@/components/investgpt/investgpt-shell";
import { Button } from "@workspace/ui/components/button";

export function Navbar() {
  const { openMobileSidebar } = useInvestGPTUi();

  return (
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
  );
}