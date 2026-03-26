"use client";

import Link from "next/link";
import { Button } from "@workspace/ui/components/button"; // Adjust based on your turborepo alias
import { cn } from "@workspace/ui/lib/utils";
import { ToggleThemeButton } from "../theme/toggle-theme";
import { navLinks } from "@/config/navbar";


export default function LandingNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6  border-b-[0.5px] border-slate-400 dark:border-slate-700 backdrop-blur-lg">
      <nav className="flex w-full max-w-7xl items-center justify-between">
        
        {/* Logo - Adapts color based on theme */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          InvestX<span className="text-blue-500">.</span>
        </Link>

        {/* Floating Pill - Theme Adaptive */}
        <div className="hidden items-center gap-1 rounded-full border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-white/5 p-1 px-4 backdrop-blur-md md:flex shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-blue-600 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
            <ToggleThemeButton />
          <Button className="font-bold rounded-md h-9 w-24 bg-blue-600 dark:bg-white px-6 text-white dark:text-slate-900 hover:bg-blue-700 shadow-lg shadow-blue-500/20 dark:shadow-white/10">
            SignUp
          </Button>
        </div>
      </nav>
    </header>
  );
}