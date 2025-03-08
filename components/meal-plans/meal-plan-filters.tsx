import { Button } from "@/components/ui/button"

const filterCategories = ["All Plans", "Vegan", "Gluten-Free", "Low-Calorie", "High-Protein", "Family Meals"]

export default function MealPlanFilters() {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {filterCategories.map((category, index) => (
        <Button
          key={index}
          variant={index === 0 ? "default" : "outline"}
          className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
            index === 0
              ? "bg-primary-500 text-white hover:bg-primary-600"
              : "bg-white text-primary-600 hover:bg-primary-100"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

