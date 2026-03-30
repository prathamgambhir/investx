"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

type InvestGPTLogoProps = {
  className?: string;
  showBack?: boolean;
};

export function InvestGPTLogo({ className, showBack = true }: InvestGPTLogoProps) {
  return (
    <div className={cn("flex items-center gap-1 sm:gap-2", className)}>
      {showBack && (
        <Link
          href="/"
          aria-label="Back to home"
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-5 hidden lg:flex items-center justify-center shrink-0 rounded-full border border-slate-200/80 bg-white/80 text-slate-700 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10",
          )}
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="size-3" />
        </Link>
      )}
      <Link
        href="/"
        className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl"
      >
        Invest<span className="text-blue-500 ml-0.5">GPT</span>
      </Link>
    </div>
  );
}
