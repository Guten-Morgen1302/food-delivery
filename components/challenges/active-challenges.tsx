import { Button } from "@/components/ui/button"

const activeChallenges = [
  {
    id: 1,
    title: "5 New Dishes in 7 Days",
    description: "Break out of your routine by trying 5 completely new dishes this week!",
    category: "Try Something New",
    progress: 60,
    completed: 3,
    total: 5,
    participants: 8,
  },
  {
    id: 2,
    title: "Plant-Based Power Month",
    description: "Try 15 delicious plant-based meals and discover new favorites!",
    category: "Healthy Eating",
    progress: 40,
    completed: 6,
    total: 15,
    participants: 15,
  },
  {
    id: 3,
    title: "Explore Street Food Near You",
    description: "Discover 8 local street food vendors and hidden gems in your city!",
    category: "Food Adventures",
    progress: 25,
    completed: 2,
    total: 8,
    participants: 10,
  },
]

export default function ActiveChallenges() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-6 text-orange-600">Active Challenges</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="h-40 bg-orange-400 relative">
              <div className="absolute bottom-0 left-0 p-4 bg-orange-500 text-white font-bold rounded-tr-lg">
                {challenge.category}
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">{challenge.title}</h4>
              <p className="text-gray-600 mb-4">{challenge.description}</p>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Progress</span>
                  <span className="font-medium">
                    {challenge.completed}/{challenge.total} dishes
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${challenge.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  {[...Array(Math.min(4, challenge.participants))].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-xs font-bold text-orange-600"
                    >
                      {String.fromCharCode(65 + i) + String.fromCharCode(65 + i + 1)}
                    </div>
                  ))}
                  {challenge.participants > 4 && (
                    <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold">
                      +{challenge.participants - 3}
                    </div>
                  )}
                </div>
                <Button className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

