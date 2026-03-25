import HeroSection from "@/components/landing/hero"
import { ToggleThemeButton } from "@/components/theme/toggle-theme"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <div className="h-screen w-full flex flex-col gap-12 items-center">
      <HeroSection />
    </div>
  )
}
