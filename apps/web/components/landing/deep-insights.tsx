import Image from "next/image"
import DeepInsightsImage from "@/public/images/deep-insights.jpg"
import { cn } from "@workspace/ui/lib/utils"

export default function DeepInsights() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent py-8 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Content Side - Ordered first on small devices (order-1), second on desktop/tablet (md:order-2) */}
          <div className="order-1 flex w-full flex-col items-center text-center md:order-2 md:items-start md:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] dark:bg-blue-400 dark:shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
              Analytics
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-4xl lg:text-5xl lg:leading-tight dark:text-slate-50">
              <span className="text-slate-500 dark:text-slate-400">
                Deep insights
              </span>
              <br/> Smarter strategies.
            </h2>

            {/* Subtext */}
            <p className="mb-10 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400">
              Harness the power of Quantamental AI. Our engine processes
              alternative data to identify market anomalies and alpha
              opportunities before they go mainstream.
            </p>

            {/* CTA Button */}
            <button className="group relative flex items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 active:scale-95 dark:bg-blue-500 dark:shadow-blue-500/20 dark:hover:bg-blue-400">
              Explore Intelligence
            </button>
          </div>

          {/* Image Side - Ordered second on small devices (order-2), first on desktop/tablet (md:order-1) */}
          <div className="relative order-2 flex w-full justify-center md:order-1 md:justify-end">
            <div
              className="relative w-full max-w-xl md:max-w-none"
              style={{
                // Masking to fade from the left (on desktop) and keep center focus
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
              }}
            >
              <Image
                src={DeepInsightsImage}
                alt="AI Analytics Dashboard"
                priority
                className={cn(
                  "h-auto w-full object-contain transition-all duration-1000",
                  // Dark mode inversion to turn light UI images into dark-themed assets
                  "dark:brightness-95 dark:contrast-125 dark:hue-rotate-180 dark:invert"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
