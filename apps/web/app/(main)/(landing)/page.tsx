import HeroSection from "@/components/landing/hero"
import { ToggleThemeButton } from "@/components/theme/toggle-theme"
import LogoTicker from "@/components/landing/logo-ticker"

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-12 items-center pb-24">
      <HeroSection />
      <LogoTicker />
    </div>
  )
}
