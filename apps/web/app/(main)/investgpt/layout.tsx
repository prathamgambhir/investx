import { Sidebar } from "@/components/investgpt/sidebar";
import React from "react";

export default function InvestGPTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Using absolute and z-50 to ensure this dashboard completely takes over the screen without rendering the global layout's footer from (main)/layout.tsx natively visible.
  return (
    <div className="absolute inset-0 z-50 flex h-screen w-full bg-background overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {children}
      </main>
    </div>
  );
}
