import { Button } from "@/components/ui/button"

const categories = [
  "All Streams",
  "Quick Meals",
  "Vegan",
  "Desserts",
  "Cooking for Kids",
  "Breakfast",
  "International Cuisine",
]

export default function StreamCategories() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-neutral-800 mb-4">Stream Categories</h2>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category, index) => (
          <Button
            key={category}
            variant={index === 0 ? "default" : "outline"}
            className={`px-5 py-2 rounded-full transition-colors ${
              index === 0
                ? "bg-primary-500 hover:bg-primary-600 text-white"
                : "bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-700"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="flex items-center bg-neutral-50 p-4 rounded-lg border border-neutral-200">
        <div className="flex-1">
          <h3 className="font-bold text-neutral-800">Join our Live Chat & Q&A!</h3>
          <p className="text-neutral-600 text-sm">
            Ask our chefs questions in real-time and get personalized cooking advice.
          </p>
        </div>
        <Button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full transition-colors">
          Ask the Chef
        </Button>
      </div>
    </section>
  )
}

