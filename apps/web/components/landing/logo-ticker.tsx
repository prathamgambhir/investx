"use client"

import { motion } from "motion/react"

// Repeating array elements implicitly to ensure seamless infinite looping.
// The list is duplicated 4 times so the animation can scroll continuously
// and seamlessly jump back to the start exactly at the halfway point (-50% translateX).
const COMPANIES = [
  "Nifty 50",
  "Sensex",
  "Google",
  "Microsoft",
  "Apple",
  "Amazon",
  "Meta",
  "Tesla",
  "Nvidia",
  "Netflix",
  "Spotify",
  "PayPal",
  "Binance",
]

const LOGOS = [...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES]

export default function LogoTicker() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-24 overflow-hidden bg-transparent py-16 md:py-24">
      <div className="space-y-2 text-center">
        <h2 className="text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase opacity-80 md:text-xs dark:text-slate-400">
          Global Market Coverage
        </h2>
        <p className="text-lg max-w-xl mx-auto font-medium text-slate-800 md:text-xl dark:text-slate-200">
          Analyze assets across major indices <br className="block sm:hidden"/>and tech giants
        </p>
      </div>
      <div
        className="relative mx-auto flex w-full max-w-7xl items-center"
        style={{
          // Gradient mask creates the smooth fade effect on the left and right edges
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {LOGOS.map((company, index) => (
            <div
              key={index}
              className="flex cursor-default items-center justify-center px-8 font-serif text-lg whitespace-nowrap text-slate-500 opacity-70 transition-opacity hover:opacity-100 sm:px-12 sm:text-2xl md:px-16 dark:text-slate-500"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
