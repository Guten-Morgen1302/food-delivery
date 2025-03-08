import Link from "next/link"
import { Bike, Car } from "lucide-react"

export default function EcoFriendlySection() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold dark:text-white">Eco-Friendly Options</h2>
        <Link
          href="/eco-friendly"
          className="text-orange-500 hover:text-orange-600 flex items-center transition-colors"
        >
          View All
          <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 dark:bg-opacity-30 p-8 rounded-2xl mb-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-4">Reduce Your Carbon Footprint</h3>
            <p className="text-green-700 dark:text-green-400 mb-6">
              Choose eco-friendly delivery options and earn green points with every sustainable choice. Redeem points
              for discounts and exclusive rewards.
            </p>

            <div className="flex space-x-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center shadow-sm">
                <Bike className="text-green-600 dark:text-green-400 mr-3 h-6 w-6" />
                <div>
                  <h4 className="font-bold dark:text-white">Bike Delivery</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Zero emissions</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center shadow-sm">
                <Car className="text-green-600 dark:text-green-400 mr-3 h-6 w-6" />
                <div>
                  <h4 className="font-bold dark:text-white">Electric Vehicle</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Reduced carbon</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
                alt="Eco friendly delivery"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                <div className="font-bold text-lg">25%</div>
                <div className="text-xs">CO₂ Reduced</div>
                <div className="text-xs mt-1">This Month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

