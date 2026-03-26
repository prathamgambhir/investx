import Image from "next/image";
import InvestgptTextarea from "./investgpt-textarea";
import HeroImage from "@/public/images/hero-dashboard.png"

export default function HeroSection() {
  return (
    <section className="relative w-full py-6 md:py-8 lg:py-12 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      {/* Optional faint background grid or dots could go here */}
      
      {/* Tittle */}
      <div className="z-10 flex flex-col items-center gap-4 md:gap-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20 backdrop-blur-sm text-xs font-medium text-blue-600 dark:text-blue-400 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)] dark:shadow-[0_0_8px_rgba(96,165,250,0.6)]"></span>
          Portfolio
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight md:leading-tight lg:leading-tight">
          Invest with Confidence
          <br className="hidden sm:block" />
          {' '}Grow with Purpose
        </h1>
        <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-sm md:max-w-md mx-auto">
          Your trusted platform for building wealth with tailored strategies and smart automation.
        </div>
      </div>

      {/* InvestGPT */}
      <div className="w-full max-w-2xl mx-auto mt-16 md:mt-16 px-4">
        <InvestgptTextarea />
      </div>

      {/* Hero Image */}
      <div className="w-full mx-auto mt-16 md:mt-24 relative flex justify-center">
        {/* Background glow behind the image */}
        {/* <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-75 md:h-100 bg-blue-500/30 dark:bg-white/10 blur-[100px] pointer-events-none rounded-full"></div> */}
        
        <div 
          className="relative w-full rounded-xl md:rounded-2xl"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        >
          <div className="w-full drop-shadow-[0px_0px_20px_rgba(59,130,246,0.4)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.09)]">
            <Image 
              src={HeroImage}
              alt="InvestX Dashboard Preview" 
              priority
              className="w-full h-auto object-contain dark:invert-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}