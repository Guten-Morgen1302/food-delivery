import ExploreHero from "@/components/explore/explore-hero"
import CuisineCategories from "@/components/explore/cuisine-categories"
import PopularRestaurants from "@/components/explore/popular-restaurants"
import FoodMap from "@/components/explore/food-map"

export default function ExplorePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ExploreHero />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <CuisineCategories />
        <PopularRestaurants />
        <FoodMap />
      </div>
    </div>
  )
}

