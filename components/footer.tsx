import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg
                className="h-8 w-8 text-orange-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="text-xl font-bold dark:text-white">FoodieHub</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Discover delicious food near you with personalized recommendations, chef-curated meals, and eco-friendly
              delivery options.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href="/meal-plans"
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Meal Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/live-streams"
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Live Streams
                </Link>
              </li>
              <li>
                <Link
                  href="/challenges"
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Challenges
                </Link>
              </li>
              <li>
                <Link
                  href="/eco-friendly"
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Eco-Friendly
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Subscribe</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get the latest updates on new features, special offers, and delicious recipes.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} FoodieHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

