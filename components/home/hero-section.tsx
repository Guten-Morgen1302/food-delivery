import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-90"></div>
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        alt="Food background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8">
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Discover Delicious Food Near You</h1>
        <p className="text-xl mb-8 max-w-2xl animate-fadeIn">
          Personalized recommendations, chef-curated meals, and eco-friendly delivery options
        </p>
        <div className="flex space-x-4">
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-100 rounded-full font-semibold transform hover:scale-105 transition-all shadow-lg"
            asChild
          >
            <Link href="/explore">Order Now</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 rounded-full font-semibold transform hover:scale-105 transition-all"
            asChild
          >
            <Link href="/meal-plans">Explore Meal Plans</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

