"use client";

import { motion } from "motion/react";
import {HugeiconsIcon} from "@hugeicons/react";
import { ArrowRightIcon, SparklesIcon } from "@hugeicons/core-free-icons";

export default function CTASection() {
  return (
    <section className="relative w-full py-8 md:py-16 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300"
        >
          <HugeiconsIcon icon={SparklesIcon} size={14} className="text-blue-500 dark:text-blue-400" />
          Join 2,000+ investors
        </motion.div>
        
        {/* Main Heading with Gradient Text */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-[1.1]"
        >
          Think better with <br />
          <span className="text-slate-900 dark:text-slate-50">InvestX Intelligence</span>
        </motion.h2>
        
        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Stop chasing the market. Start leading it with real-time AI insights 
          and unified portfolio management.
        </motion.p>
        
        {/* Action Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400">
            <span>Start your 14-day free trial</span>
            <HugeiconsIcon icon={ArrowRightIcon} size={18} className="transition-transform group-hover:translate-x-1" />
            
            {/* Glossy Reflection Effect */}
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </button>
          
          <p className="text-xs text-slate-500 dark:text-slate-500 font-medium tracking-wide uppercase">
            No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}