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

      <div className="relative z-10 flex flex-col min-h-screen">
        <LandingNavbar />
       
        {/* Main Content Area with mt-24 to create a gap from the fixed Navbar */}
        <main className="w-full container mx-auto px-2 lg:px-4 mt-24 pb-12">
          {children}
        </main>
      </div>
    </div>
  );
}