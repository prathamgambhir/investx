"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Sidebar } from "@/components/investgpt/sidebar";

type InvestGPTUi = {
  openMobileSidebar: () => void;
  closeMobileSidebar: () => void;
  mobileSidebarOpen: boolean;
};

const InvestGPTUiContext = createContext<InvestGPTUi | null>(null);

export function useInvestGPTUi(): InvestGPTUi {
  const ctx = useContext(InvestGPTUiContext);
  if (!ctx) {
    throw new Error("useInvestGPTUi must be used within InvestGPTShell");
  }
  return ctx;
}

export function InvestGPTShell({ children }: { children: ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const openMobileSidebar = useCallback(() => setMobileSidebarOpen(true), []);
  const closeMobileSidebar = useCallback(() => setMobileSidebarOpen(false), []);

  const value = useMemo(
    () => ({
      openMobileSidebar,
      closeMobileSidebar,
      mobileSidebarOpen,
    }),
    [mobileSidebarOpen, openMobileSidebar, closeMobileSidebar],
  );

  return (
    <InvestGPTUiContext.Provider value={value}>
      {mobileSidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onMobileClose={closeMobileSidebar}
      />
      <main className="relative z-0 flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        {children}
      </main>
    </InvestGPTUiContext.Provider>
  );
}
