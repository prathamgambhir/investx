import React from "react";
import LandingNavbar from "@/components/landing/landing-navbar";

export default function SubFolderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // relative and overflow-x-hidden ensure the background gradients don't cause scrollbars
    <div className="relative flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {/* Background Glow Layer (Stays behind everything) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,163,255,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.4),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <LandingNavbar />
       
        {/* Main Content Area with mt-24 to create a gap from the fixed Navbar */}
        <main className="w-full container mx-auto px-4 mt-24 pb-12">
          {children}
        </main>
      </div>
    </div>
  );
}