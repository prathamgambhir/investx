import { Navbar } from "@/components/investgpt/navbar";
import { MainChat } from "@/components/investgpt/main-chat";

export default function InvestGPTPage() {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden font-sans">
      {/* Mesh Background moved from MainChat */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-landing-radial" aria-hidden />
      <div className="investgpt-mesh" aria-hidden>
        <div className="investgpt-mesh-blob investgpt-mesh-blob--1" />
        <div className="investgpt-mesh-blob investgpt-mesh-blob--2" />
      </div>

      {/* Navbar imported here */}
      <Navbar />

      {/* MainChat content */}
      <MainChat />
    </div>
  );
}