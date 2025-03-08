import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin } from "lucide-react"

const restaurants = [
  {
    id: 1,
    name: "Bella Italia",
    cuisine: "Italian",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.8,
    reviews: 342,
    deliveryTime: "25-35 min",
    distance: "1.2 miles",
    tags: ["Pasta", "Pizza", "Wine"],
  },
  {
    id: 2,
    name: "Sakura Sushi",
    cuisine: "Japanese",
    image:
      "https://images.unsplash.com/photo-1514537099923-4c9be7f8d22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    rating: 4.9,
    reviews: 512,
    deliveryTime: "30-40 min",
    distance: "0.8 miles",
    tags: ["Sushi", "Ramen", "Bento"],
  },
  {
    id: 3,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    image:
      "https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    rating: 4.6,
    reviews: 287,
    deliveryTime: "20-30 min",
    distance: "1.5 miles",
    tags: ["Tacos", "Burritos", "Margaritas"],
  },
  {
    id: 4,
    name: "Spice Garden",
    cuisine: "Indian",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.7,
    reviews: 412,
    deliveryTime: "35-45 min",
    distance: "2.1 miles",
    tags: ["Curry", "Tandoori", "Naan"],
  },
  {
    id: 5,
    name: "Golden Dragon",
    cuisine: "Chinese",
    image:
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.5,
    reviews: 328,
    deliveryTime: "25-35 min",
    distance: "1.7 miles",
    tags: ["Dim Sum", "Noodles", "Peking Duck"],
  },
  {
    id: 6,
    name: "Thai Orchid",
    cuisine: "Thai",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.7,
    reviews: 256,
    deliveryTime: "30-40 min",
    distance: "1.3 miles",
    tags: ["Pad Thai", "Curry", "Spring Rolls"],
  },
]

export default function PopularRestaurants() {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold dark:text-white">Popular Restaurants</h2>
        <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            className="overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-48">
              <img
                src={restaurant.image || "/placeholder.svg"}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-primary-500">{restaurant.cuisine}</Badge>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold dark:text-white">{restaurant.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
                  <span className="text-xs text-neutral-600 ml-1">({restaurant.reviews})</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-3">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{restaurant.distance}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {restaurant.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-primary-50 text-primary-700 hover:bg-primary-100">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

