import Image from "next/image"
import TrackPerformanceImage from "@/public/images/track-performance.png"
import { cn } from "@workspace/ui/lib/utils"

export default function TrackPerformance() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent py-8 md:py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-4">
          
          {/* Content Side */}
          <div className="order-1 flex w-full flex-col items-center text-center md:items-start md:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] dark:bg-blue-400 dark:shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
              Performance
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-4xl lg:text-5xl lg:leading-tight dark:text-slate-50">
              Track Performance
              <br/>
              <span className="text-slate-500 dark:text-slate-400">
                at a Glance.
              </span>
            </h2>

            {/* Subtext */}
            <p className="mb-10 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400">
              Monitor growth trends and analyze key metrics to make smarter investment decisions.
            </p>

            {/* CTA Button */}
            <button className="group relative flex items-center justify-center overflow-hidden rounded-full bg-blue-200 px-6 py-3 text-sm font-semibold text-blue-900 shadow-sm transition-all hover:bg-blue-300 active:scale-95 dark:bg-[#a8c7fa] dark:hover:bg-[#8ab4f8] dark:text-slate-900">
              Get Started Today
            </button>
          </div>

          {/* Image Side */}
          <div className="relative order-2 flex w-full justify-center md:justify-end md:col-span-2">
            <div
              className="relative w-full max-w-xl md:max-w-none"
              style={{
                // Masking to fade out the bottom of the image
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 60%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 60%, transparent 100%)",
              }}
            >
              <Image
                src={TrackPerformanceImage}
                alt="Track Performance Data"
                priority
                className={cn(
                  "h-auto w-full object-contain transition-all duration-1000 bg-transparent rounded-2xl brightness-105 contrast-105",
                  // Dark mode inversion if it's a light image (but standard dashboard images often look better kept original or slightly inverted)
                  // The user mentioned dark theme invert for deep-insights, let's keep the same styling
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
