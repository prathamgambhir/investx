"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const FAQ_DATA = [
  {
    question: "How can I track my investment portfolio using InvestX?",
    answer:
      "InvestX provides an intuitive portfolio tracker where you can manually add your assets or sync directly with your brokerage account. Once added, you can monitor real-time performance, diversification, and overall growth.",
  },
  {
    question: "Is InvestX free to use?",
    answer:
      "Yes, our core features are completely free to use. We also offer premium tiers with advanced AI analytics and agentic market research tools for power users.",
  },
  {
    question: "How do I add my assets to the InvestX portfolio tracker?",
    answer:
      "You can securely connect your brokerages using our integrations, or manually input your hold amounts. We support stocks, crypto, ETFs, and more.",
  },
  {
    question: "What features does InvestX offer for beginner investors?",
    answer:
      "Beginners can leverage our Predictive K-Score AI to understand stock health at a glance, and use our InvestGPT assistant to ask natural language questions about market concepts or specific assets.",
  },
  {
    question: "Can I connect my brokerage account to InvestX?",
    answer:
      "Absolutely. We support integrations with over 50+ major brokerages and crypto exchanges globally for seamless, real-time syncing.",
  },
  {
    question:
      "Can I see insights or analysis from other investors in the community?",
    answer:
      "Yes! Our platform features a community hub where you can view public portfolios, read thesis breakdowns, and follow top-performing investors.",
  },
]

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
)

const MinusIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
)

function AccordionItem({
  item,
  isOpen,
  onClick,
}: {
  item: any
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-blue-300 bg-slate-50 shadow-sm dark:border-white/10 dark:bg-[#1a1c23]/60"
          : "border-slate-300 bg-slate-50 hover:border-blue-300 dark:border-slate-800 dark:bg-white/2 dark:hover:bg-white/4"
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-5 text-left md:p-6"
      >
        <h3
          className={`text-sm font-medium transition-colors duration-300 md:text-base ${isOpen ? "text-slate-900 dark:text-slate-100" : "text-slate-700 dark:text-slate-300"}`}
        >
          {item.question}
        </h3>
        <div
          className={`ml-4 shrink-0 p-1 transition-colors duration-300 ${isOpen ? "text-slate-500 dark:text-slate-400" : "text-slate-400 dark:text-slate-500"}`}
        >
          {isOpen ? (
            <MinusIcon className="h-5 w-5" />
          ) : (
            <PlusIcon className="h-5 w-5" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600 md:px-6 md:pb-6 dark:text-slate-400">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-transparent py-24 md:py-32">
      {/* Background Glow */}
      {/* <div className="pointer-events-none absolute top-1/2 left-1/2 h-100 w-[80%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/10"></div> */}

      <div className="z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 sm:px-6">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] dark:bg-blue-400 dark:shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
          FAQ
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-slate-50">
          Frequently Asked Questions
        </h2>

        {/* Subtext */}
        <p className="mb-12 max-w-2xl text-center text-sm leading-relaxed text-slate-600 md:mb-16 md:text-base dark:text-slate-400">
          If you have any further inquiries or doubts about our services, please
          don't hesitate to reach out. Rest assured, all communications are
          handled with the utmost confidentiality.
        </p>

        {/* Accordion List */}
        <div className="flex w-full flex-col gap-3 md:gap-4">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
