import FeaturedChallenges from "@/components/challenges/featured-challenges"
import ChallengeCategories from "@/components/challenges/challenge-categories"
import ActiveChallenges from "@/components/challenges/active-challenges"
import ProgressSection from "@/components/challenges/progress-section"

export default function ChallengesPage() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-orange-500">Foodie Challenges</h1>

        <FeaturedChallenges />
        <ChallengeCategories />
        <ActiveChallenges />
        <ProgressSection />
      </div>
    </div>
  )
}

