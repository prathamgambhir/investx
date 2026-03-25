import InvestgptTextarea from "./investgpt-textarea";

export default function HeroSection() {
  return (
    <section className="relative w-full py-6 md:py-8 lg:py-12 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Optional faint background grid or dots could go here */}
      
      {/* Tittle */}
      <div className="z-10 flex flex-col items-center gap-4 md:gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20 backdrop-blur-sm text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
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
      
    </section>
  );
}