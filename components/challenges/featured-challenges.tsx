import { Button } from "@/components/ui/button"
import { Clock, Check, Download, X } from "lucide-react"

const featuredChallenges = [
  {
    id: 1,
    title: "Summer Grilling Challenge",
    description: "Master 5 grilling recipes before summer ends!",
    badge: "Limited Time!",
    progress: 60,
    completed: 3,
    total: 5,
    timeLeft: "3 days",
    icon: <Clock className="w-5 h-5 mr-1" />,
    iconText: "Ends in 3 days",
  },
  {
    id: 2,
    title: "Global Street Food Tour",
    description: "Discover 8 street food styles from around the world!",
    badge: "Popular",
    progress: 25,
    completed: 2,
    total: 8,
    icon: <X className="w-5 h-5 mr-1" />,
    iconText: "High rewards!",
  },
  {
    id: 3,
    title: "Plant-Based Power Month",
    description: "Eat 15 delicious plant-based meals in 30 days!",
    badge: "New",
    progress: 40,
    completed: 6,
    total: 15,
    icon: <Check className="w-5 h-5 mr-1" />,
    iconText: "20% discount reward",
  },
  {
    id: 4,
    title: "Ultimate Spice Challenge",
    description: "Try 10 different spice levels - from mild to wild!",
    badge: "Trending",
    progress: 70,
    completed: 7,
    total: 10,
    icon: <Download className="w-5 h-5 mr-1" />,
    iconText: "Free e-cookbook reward",
  },
]

export default function FeaturedChallenges() {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-orange-600">Featured Challenges</h3>

      <div className="relative">
        <div className="flex space-x-6 overflow-x-auto pb-4 snap-x">
          {featuredChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="snap-start flex-shrink-0 w-80 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6 text-white">
                <span className="inline-block px-3 py-1 bg-yellow-300 text-orange-800 rounded-full text-sm font-bold mb-4">
                  {challenge.badge}
                </span>

                <h4 className="text-xl font-bold mb-2">{challenge.title}</h4>
                <p className="mb-4 text-white/90">{challenge.description}</p>

                <div className="mb-4">
                  <div className="h-2 w-full bg-white/30 rounded-full">
                    <div
                      className="h-2 bg-yellow-300 rounded-full transition-all duration-500"
                      style={{ width: `${challenge.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>
                      {challenge.completed}/{challenge.total} completed
                    </span>
                    <span>{challenge.progress}%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {challenge.icon}
                    <span className="text-sm">{challenge.iconText}</span>
                  </div>
                  <Button className="px-4 py-2 bg-white text-orange-600 rounded-lg font-semibold hover:bg-yellow-100 transition-colors">
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 -left-4 -translate-y-1/2">
          <Button
            size="icon"
            className="w-10 h-10 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>

        <div className="absolute top-1/2 -right-4 -translate-y-1/2">
          <Button
            size="icon"
            className="w-10 h-10 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

