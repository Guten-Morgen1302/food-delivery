import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const highlights = [
  {
    id: 1,
    title: "Chef Alex's Secret Pizza Recipe",
    description: "Learn how to make a perfect Neapolitan pizza dough and the secret sauce that made Chef Alex famous.",
    image: "https://images.unsplash.com/photo-1610452220299-5edf90b8a6ed?q=80&w=2574&auto=format&fit=crop",
    chef: {
      name: "Chef Alex Johnson",
      image: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    views: "48K",
  },
  {
    id: 2,
    title: "5 Minute Desserts with Chef Sophie",
    description: "Quick and easy dessert recipes that will impress your guests without spending hours in the kitchen.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2574&auto=format&fit=crop",
    chef: {
      name: "Chef Sophie Chen",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    views: "36K",
  },
]

export default function StreamHighlights() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-neutral-800 mb-6">Stream Highlights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <img
                src={highlight.image || "/placeholder.svg"}
                alt={highlight.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  size="icon"
                  className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform"
                >
                  <Play className="h-8 w-8 fill-current" />
                </Button>
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-bold text-lg text-neutral-800 mb-2">{highlight.title}</h3>
              <p className="text-neutral-600 mb-4">{highlight.description}</p>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={highlight.chef.image || "/placeholder.svg"}
                    alt={highlight.chef.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-neutral-600">{highlight.chef.name}</span>
                </div>
                <span className="text-sm text-neutral-500">{highlight.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

