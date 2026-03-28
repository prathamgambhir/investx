"use client";

import { useState } from "react";
import { cn } from "@workspace/ui/lib/utils";

/** Icons **/
const TagIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/** Reusable Pricing Card Component **/
interface PricingCardProps {
  title: string;
  price: string | number;
  period?: string;
  description: string;
  buttonText: string;
  features: string[];
  isPopular?: boolean;
  colorVariant: "blue" | "slate" | "emerald";
}

function PricingCard({
  title,
  price,
  period = "/month",
  description,
  buttonText,
  features,
  isPopular,
  colorVariant,
}: PricingCardProps) {
  // Map color variants to specific style classes
  const variantStyles = {
    blue: {
      glow: "bg-blue-500/10 dark:bg-blue-500/20 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30",
      icon: "from-blue-300 to-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.4)]",
      button: "bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white border-slate-200 dark:border-white/10",
      check: "text-blue-500 dark:text-blue-400",
      card: "bg-white dark:bg-[#11131a] border border-slate-300 dark:border-white/10",
    },
    slate: {
      glow: "bg-slate-300/60 dark:bg-white/10 group-hover:bg-slate-300/80 dark:group-hover:bg-white/20",
      icon: "from-slate-300 to-slate-500 dark:from-slate-200 dark:to-slate-400 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
      button: "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 shadow-lg shadow-slate-900/20 dark:shadow-white/10",
      check: "text-slate-700 dark:text-slate-300",
      card: "bg-slate-50 dark:bg-[#151821] border-2 border-slate-300/80 dark:border-white/20",
    },
    emerald: {
      glow: "bg-emerald-500/10 dark:bg-emerald-500/15 group-hover:bg-emerald-500/20 dark:group-hover:bg-emerald-500/25",
      icon: "from-emerald-300 to-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
      button: "bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white border-slate-200 dark:border-white/10",
      check: "text-emerald-500 dark:text-emerald-400",
      card: "bg-white dark:bg-[#11131a] border border-slate-300 dark:border-white/10",
    },
  };

  const style = variantStyles[colorVariant];

  return (
    <div className={cn(
      "relative p-8 px-6 sm:px-8 rounded-3xl flex flex-col transition-all duration-500 hover:-translate-y-1 overflow-hidden group",
      style.card
    )}>
      {/* Top Glow Accent Inside Card */}
      <div className={cn("absolute -top-10 -left-10 w-50 h-50 blur-[60px] rounded-full pointer-events-none transition-colors duration-500", style.glow)}></div>

      {isPopular && (
        <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white dark:bg-white/10 dark:text-slate-200 text-[10px] font-semibold tracking-widest uppercase border border-transparent dark:border-white/10 backdrop-blur-md shadow-lg shadow-black/10 z-20">
          <StarIcon className="w-3 h-3" />
          POPULAR
        </div>
      )}

      <div className="relative z-10 flex flex-col grow">
        <div className={cn("w-10 h-10 rounded-xl bg-linear-to-br mb-6 flex items-center justify-center border border-white/20", style.icon)}></div>
        <h3 className="text-xl font-medium text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
        <div className="flex items-end gap-1 mb-4 h-12 lg:h-15">
          <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {typeof price === "number" ? `$${price}` : price}
          </span>
          {typeof price === "number" && (
            <span className="text-slate-500 dark:text-slate-400 text-sm mb-1.5 font-medium">{period}</span>
          )}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 min-h-12 leading-relaxed">
          {description}
        </p>
        
        <button className={cn("w-full py-3.5 rounded-xl font-semibold tracking-wide text-sm transition-all duration-300 mb-8 border", style.button)}>
          {buttonText}
        </button>

        <div className="w-full flex items-center gap-4 mb-6 opacity-60">
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700"></div>
          <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">Features</span>
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700"></div>
        </div>

        <ul className="flex flex-col gap-4 grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
              <CheckCircleIcon className={cn("w-4.5 h-4.5 shrink-0 mt-0.5", style.check)} />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Main Pricing Section **/
export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="relative w-full py-8 md:py-16 flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Subtle Background Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-100 bg-blue-500/5 dark:bg-slate-500/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <TagIcon className="w-3.5 h-3.5" />
          PRICING
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-center tracking-tight text-slate-900 dark:text-slate-50 mb-6">
          Plans and Pricing
        </h2>
        
        <p className="max-w-xl text-center text-sm md:text-base text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Level up your investing with Quantamental AI. Choose the plan that aligns with your portfolio goals.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center p-1 bg-slate-200/50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-full mb-16">
          <button 
            onClick={() => setIsAnnual(false)}
            className={cn(
              "px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
              !isAnnual ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            )}
          >
            Bill Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={cn(
              "px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
              isAnnual ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            )}
          >
            Bill Annually
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          
          <PricingCard
            title="Starter"
            price={0}
            colorVariant="blue"
            description="Perfect for new investors exploring the power of Quantamental AI."
            buttonText="Start for Free"
            features={[
              "Sync 1 Brokerage account",
              "Basic Predictive K-Score",
              "10 InvestGPT queries / day",
              "Standard market tracking",
              "Mobile App access"
            ]}
          />

          <PricingCard
            title="Pro"
            price={isAnnual ? 49 : 59}
            colorVariant="slate"
            isPopular={true}
            description="Our most popular plan for active investors seeking market alpha."
            buttonText="Start 7-Day Free Trial"
            features={[
              "Unlimited Brokerage Syncing",
              "Full Predictive K-Score AI",
              "Unlimited InvestGPT Chat",
              "Alternative Data Analytics",
              "Real-time Smart Alerts",
              "Priority Data Exports (CSV/PDF)"
            ]}
          />

          <PricingCard
            title="Advanced"
            price="Custom"
            colorVariant="emerald"
            description="Tailored intelligence for high-net-worth individuals and institutions."
            buttonText="Contact Sales"
            features={[
              "Dedicated Account Manager",
              "Custom AI Strategy Backtesting",
              "Institutional Grade API Access",
              "White-glove onboarding",
              "Multi-user team workspace"
            ]}
          />

        </div>

        <p className="mt-16 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 text-center">
          Experience smarter investing risk-free — No credit card required.
        </p>
      </div>
    </section>
  );
}