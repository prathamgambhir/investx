import HeroSection from "@/components/landing/hero"
import { ToggleThemeButton } from "@/components/theme/toggle-theme"
import LogoTicker from "@/components/landing/logo-ticker"
import FeatureSection from "@/components/landing/feature"
import DeepInsights from "@/components/landing/deep-insights"
import TrackPerformance from "@/components/landing/track-performance"
import AIFeature from "@/components/landing/ai-feature"
import FAQSection from "@/components/landing/faq"

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-12 items-center pb-24">
      <HeroSection />
      <LogoTicker />
      <FeatureSection />
      <DeepInsights />
      <TrackPerformance />
      <AIFeature />
      <FAQSection />
    </div>
  )
}
