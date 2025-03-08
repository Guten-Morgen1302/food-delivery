import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function ExploreHero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt="Food exploration"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/80"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-5xl font-bold text-white mb-6">Explore Culinary Delights</h1>
        <p className="text-xl text-neutral-200 mb-8 max-w-2xl">
          Discover new restaurants, cuisines, and dishes in your area. Filter by dietary preferences, price range, and
          more.
        </p>

        <div className="w-full max-w-2xl flex">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
            <input
              type="text"
              placeholder="Search for restaurants, cuisines, or dishes..."
              className="w-full py-3 pl-10 pr-4 rounded-l-md border-none focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <Button className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-r-md">Search</Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Button
            variant="outline"
            className="bg-white/30 text-white border-none hover:bg-white hover:text-primary-700"
          >
            Restaurants
          </Button>
          <Button
            variant="outline"
            className="bg-white/30 text-white border-none hover:bg-white hover:text-primary-700"
          >
            Delivery
          </Button>
          <Button
            variant="outline"
            className="bg-white/30 text-white border-none hover:bg-white hover:text-primary-700"
          >
            Pickup
          </Button>
          <Button
            variant="outline"
            className="bg-white/30 text-white border-none hover:bg-white hover:text-primary-700"
          >
            Outdoor Seating
          </Button>
          <Button
            variant="outline"
            className="bg-white/30 text-white border-none hover:bg-white hover:text-primary-700"
          >
            Reservations
          </Button>
        </div>
      </div>
    </div>
  )
}

