"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@workspace/ui/components/button"
import { useState, useEffect } from "react"
import { Moon01Icon, Moon02Icon, Sun01Icon, Sun02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion, AnimatePresence } from "motion/react"

export function ToggleThemeButton() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <Button variant="ghost" size="icon" />

  return (
    <Button
      variant="ghost"
      className="relative overflow-hidden border border-slate-600/60 bg-white/80 dark:bg-transparent dark:border-neutral-700 hover:bg-white/70 dark:hover:bg-white/5 rounded-full h-9 hover:scale-95"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            // className="p-4"
          >
            <HugeiconsIcon icon={Sun02Icon} className="size-5" />
          </motion.div>
        ) : (
          <motion.div
          key="moon"
          initial={{ y: 20, opacity: 0, rotate: 45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: -45 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          // className="p-4"
          >
          <HugeiconsIcon icon={Moon02Icon} className="size-5"/>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}