import { Button } from "@/components/ui/button"

interface MealPlanProps {
  plan: {
    id: number
    title: string
    description: string
    image: string
    days: number
    calories: number
  }
}

export default function MealPlanCard({ plan }: MealPlanProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-primary-300 hover:border-primary-500 transition-all transform hover:scale-105 hover:shadow-xl group">
      <div className="h-48 overflow-hidden">
        <img src={plan.image || "/placeholder.svg"} alt={plan.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-2">{plan.title}</h3>
        <p className="text-neutral-600 mb-4">{plan.description}</p>

        <div className="flex gap-2 mb-4">
          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">{plan.days} days</span>
          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
            {plan.calories} cal/meal
          </span>
        </div>

        <Button className="w-full py-3 bg-primary-500 text-white rounded-lg font-semibold group-hover:bg-primary-600 transition-colors">
          Explore This Plan
        </Button>
      </div>
    </div>
  )
}

