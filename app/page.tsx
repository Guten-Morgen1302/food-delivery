import HeroSection from "@/components/home/hero-section"
import RecommendedSection from "@/components/home/recommended-section"
import MealPlansSection from "@/components/home/meal-plans-section"
import LiveStreamSection from "@/components/home/live-stream-section"
import EcoFriendlySection from "@/components/home/eco-friendly-section"

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection />
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RecommendedSection />
        <MealPlansSection />
        <LiveStreamSection />
        <EcoFriendlySection />
      </div>
    </div>
  )
}

