import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Plus, ChevronLeft, ChevronRight } from "lucide-react"

const recommendedItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh basil and mozzarella",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=828&q=80",
    price: 12.99,
    rating: 4.8,
    badge: { text: "Eco-Friendly", color: "green" },
  },
  {
    id: 2,
    name: "Garden Fresh Salad",
    description: "Mixed greens with seasonal vegetables and vinaigrette",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    price: 9.99,
    rating: 4.6,
    badge: { text: "Chef's Special", color: "red" },
  },
  {
    id: 3,
    name: "Creamy Pesto Pasta",
    description: "Al dente pasta with homemade pesto cream sauce",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    price: 14.99,
    rating: 4.9,
    badge: { text: "Popular", color: "purple" },
  },
  {
    id: 4,
    name: "Sushi Platter",
    description: "Assortment of fresh nigiri and maki rolls",
    image:
      "https://images.unsplash.com/photo-1625631975966-884c7a747320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    price: 18.99,
    originalPrice: 24.99,
    rating: 4.7,
    badge: { text: "Last Minute Deal", color: "blue" },
  },
]

export default function RecommendedSection() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold dark:text-white">Recommended For You</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="relative h-48">
              {item.badge && (
                <Badge
                  className={`absolute top-2 right-2 ${
                    item.badge.color === "green"
                      ? "bg-green-500"
                      : item.badge.color === "red"
                        ? "bg-red-500"
                        : item.badge.color === "purple"
                          ? "bg-purple-500"
                          : "bg-blue-500"
                  }`}
                >
                  {item.badge.text}
                </Badge>
              )}
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
            </div>

            <CardHeader className="p-4 pb-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold dark:text-white">{item.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm dark:text-white">{item.rating}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-4 pt-0">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <div className="flex justify-between items-center w-full">
                <div>
                  <span className="font-bold dark:text-white">${item.price.toFixed(2)}</span>
                  {item.originalPrice && (
                    <span className="text-sm line-through text-gray-500 ml-2">${item.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <Button size="icon" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

