import MealPlanFilters from "@/components/meal-plans/meal-plan-filters"
import MealPlanCard from "@/components/meal-plans/meal-plan-card"
import CustomPlanCTA from "@/components/meal-plans/custom-plan-cta"

const mealPlans = [
  {
    id: 1,
    title: "Healthy Breakfast Combo",
    description: "Start your day right with our nutrient-packed breakfast options designed to energize your morning.",
    image:
      "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 7,
    calories: 500,
  },
  {
    id: 2,
    title: "Vegan Lunch Delight",
    description: "Plant-based meals packed with flavor and nutrition to keep you satisfied throughout the day.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 5,
    calories: 450,
  },
  {
    id: 3,
    title: "Family Dinner Feast",
    description: "Hearty, delicious meals designed to please the whole family while maintaining nutritional balance.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 7,
    calories: 650,
  },
  {
    id: 4,
    title: "High-Protein Power Pack",
    description: "Protein-rich meals perfect for fitness enthusiasts and those looking to build muscle.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 6,
    calories: 700,
  },
  {
    id: 5,
    title: "Low-Calorie Weight Loss",
    description:
      "Satisfying meals with reduced calories to help you reach your weight loss goals without sacrificing taste.",
    image:
      "https://images.unsplash.com/photo-1499125562588-29fb8a56b5d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 7,
    calories: 350,
  },
  {
    id: 6,
    title: "Gluten-Free Gourmet",
    description: "Delicious gluten-free options that don't compromise on flavor, perfect for those with sensitivities.",
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 5,
    calories: 550,
  },
]

export default function MealPlansPage() {
  return (
    <div className="bg-primary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">Curated Meal Plans</h1>
          <p className="text-xl text-neutral-800 mb-8">
            Discover delicious and healthy meal plans tailored to your preferences
          </p>
        </div>

        <MealPlanFilters />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mealPlans.map((plan) => (
            <MealPlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <CustomPlanCTA />
      </div>
    </div>
  )
}

