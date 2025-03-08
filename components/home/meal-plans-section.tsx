import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const mealPlans = [
  {
    id: 1,
    title: "Healthy Breakfast Combo",
    image:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    rating: 4.8,
    reviews: 256,
    tags: ["Vegan", "High Protein", "Gluten Free"],
    description: "Start your day right with this nutritious breakfast combo curated by our community nutritionists.",
    price: 16.99,
  },
  {
    id: 2,
    title: "Family Dinner Feast",
    image:
      "https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 4.9,
    reviews: 342,
    tags: ["Family Size", "Comfort Food", "Eco-Friendly"],
    description: "A complete dinner package for 4-6 people with main course, sides, and dessert included.",
    price: 42.99,
  },
  {
    id: 3,
    title: "Weekend Party Platter",
    image:
      "https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    rating: 4.7,
    reviews: 189,
    tags: ["Party Size", "Finger Food", "Mixed Cuisine"],
    description: "A diverse selection of appetizers, snacks, and desserts perfect for hosting parties.",
    price: 55.99,
  },
]

export default function MealPlansSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Community-Curated Meal Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mealPlans.map((plan) => (
          <Card key={plan.id} className="overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="relative h-56">
              <img src={plan.image || "/placeholder.svg"} alt={plan.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white text-xl font-bold">{plan.title}</h3>
                <div className="flex items-center text-white">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1">
                    {plan.rating} ({plan.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="flex mb-3">
                {plan.tags.map((tag, index) => {
                  const colors = {
                    Vegan: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                    "High Protein": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
                    "Gluten Free": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
                    "Family Size": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
                    "Comfort Food": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
                    "Eco-Friendly": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                    "Party Size": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
                    "Finger Food": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
                    "Mixed Cuisine": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
                  }

                  return (
                    <Badge key={index} variant="outline" className={`mr-2 ${colors[tag] || ""}`}>
                      {tag}
                    </Badge>
                  )
                })}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <div className="flex justify-between items-center w-full">
                <span className="font-bold dark:text-white">${plan.price.toFixed(2)}</span>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link href={`/meal-plans/${plan.id}`}>View Plan</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

