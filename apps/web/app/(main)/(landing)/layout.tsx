import React from "react";
import LandingNavbar from "@/components/landing/landing-navbar";
import Footer from "@/components/common/footer";

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(0,163,255,0.1),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_50%_25%,rgba(120,119,198,0.22),rgba(0,0,0,1))]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <LandingNavbar />
       
        {/* Main Content Area with mt-24 to create a gap from the fixed Navbar */}
        {/* <main className="w-full container mx-auto px-2 lg:px-4 mt-24 pb-12"> */}
        <main className="w-full container mx-auto grow px-2 lg:px-4 mt-24 pb-12">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}