import Link from "next/link"
import { Plus, Heart, MapPin, Clock } from "lucide-react"

const categories = [
  {
    id: 1,
    title: "Try Something New",
    description: "Step outside your comfort zone and discover new flavors and cuisines you've never tried before.",
    icon: <Plus className="w-8 h-8 text-orange-500" />,
  },
  {
    id: 2,
    title: "Healthy Eating",
    description:
      "Discover delicious ways to incorporate more nutritious foods into your diet without sacrificing taste.",
    icon: <Heart className="w-8 h-8 text-orange-500" />,
  },
  {
    id: 3,
    title: "Food Adventures",
    description:
      "Embark on culinary journeys to explore hidden eateries, food markets, and local specialties in your area.",
    icon: <MapPin className="w-8 h-8 text-orange-500" />,
  },
  {
    id: 4,
    title: "Seasonal Challenges",
    description:
      "Make the most of seasonal ingredients and try special limited-time challenges that change with the calendar.",
    icon: <Clock className="w-8 h-8 text-orange-500" />,
  },
]

export default function ChallengeCategories() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-6 text-orange-600">Challenge Categories</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white border-2 border-orange-400 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              {category.icon}
            </div>

            <h4 className="text-xl font-bold mb-2 text-orange-600">{category.title}</h4>
            <p className="text-gray-600 mb-4">{category.description}</p>

            <Link
              href={`/challenges/category/${category.id}`}
              className="text-orange-500 font-semibold flex items-center hover:text-orange-600 transition-colors"
            >
              Explore Challenges
              <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

