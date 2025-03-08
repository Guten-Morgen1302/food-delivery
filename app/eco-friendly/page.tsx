import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bike, Car, Leaf, Recycle, Award } from "lucide-react"

export default function EcoFriendlyPage() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-gray-900">
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-300 mb-4">Eco-Friendly Food Delivery</h1>
          <p className="text-xl text-green-700 dark:text-green-400 mb-8 max-w-3xl mx-auto">
            Making sustainable choices has never been tastier. Discover how we're reducing our carbon footprint while
            delivering delicious food.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900"
            >
              Join Green Program
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white dark:bg-gray-800 border-green-100 dark:border-green-900">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <Bike className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-green-800 dark:text-green-300">Bike Delivery</CardTitle>
              <CardDescription>Zero-emission delivery for orders within 3 miles</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Our bike couriers deliver your food fresh and hot while producing zero carbon emissions. Perfect for
                urban areas and short distances.
              </p>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-green-600 dark:text-green-400">
                Reduces CO₂ by 100% compared to car delivery
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-green-100 dark:border-green-900">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-green-800 dark:text-green-300">Electric Vehicles</CardTitle>
              <CardDescription>Low-emission delivery for longer distances</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                For deliveries beyond biking distance, we use electric vehicles to minimize our carbon footprint while
                ensuring your food arrives promptly.
              </p>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-green-600 dark:text-green-400">
                Reduces CO₂ by 85% compared to gas-powered vehicles
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-green-100 dark:border-green-900">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-green-800 dark:text-green-300">Sustainable Packaging</CardTitle>
              <CardDescription>Eco-friendly containers and utensils</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                All our packaging is made from compostable or recyclable materials. We're committed to eliminating
                single-use plastics from our service.
              </p>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-green-600 dark:text-green-400">
                Over 90% of our packaging is biodegradable
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-8 text-center">Our Green Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">25%</div>
              <p className="text-gray-600 dark:text-gray-400">Carbon Footprint Reduction</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">50K+</div>
              <p className="text-gray-600 dark:text-gray-400">Eco-Friendly Deliveries</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">10K+</div>
              <p className="text-gray-600 dark:text-gray-400">Trees Planted</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">5 Tons</div>
              <p className="text-gray-600 dark:text-gray-400">Plastic Waste Avoided</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-8 text-center">
            Green Rewards Program
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">Earn Green Points</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Choose eco-friendly delivery options and sustainable restaurants to earn Green Points. Redeem your
                points for discounts, free meals, or donate them to environmental causes.
              </p>

              <Tabs defaultValue="earn">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="earn">Earn Points</TabsTrigger>
                  <TabsTrigger value="redeem">Redeem Points</TabsTrigger>
                  <TabsTrigger value="impact">Your Impact</TabsTrigger>
                </TabsList>

                <TabsContent value="earn">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                      <div className="flex items-center">
                        <Bike className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                        <span>Choose Bike Delivery</span>
                      </div>
                      <span className="font-bold text-green-600 dark:text-green-400">+50 points</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                      <div className="flex items-center">
                        <Leaf className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                        <span>Order from Eco-Certified Restaurant</span>
                      </div>
                      <span className="font-bold text-green-600 dark:text-green-400">+25 points</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                      <div className="flex items-center">
                        <Recycle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                        <span>Opt for No Utensils</span>
                      </div>
                      <span className="font-bold text-green-600 dark:text-green-400">+10 points</span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="redeem">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                        <span>$5 Off Your Next Order</span>
                      </div>
                      <span className="font-bold text-green-600 dark:text-green-400">200 points</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                        <span>Free Delivery</span>
                      </div>
                      <span className="font-bold text-green-600 dark:text-green-400">150 points</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                      <div className="flex items-center">
                        <Leaf className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                        <span>Plant a Tree</span>
                      </div>
                      <span className="font-bold text-green-600 dark:text-green-400">300 points</span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="impact">
                  <div className="text-center p-6">
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">0</div>
                      <p className="text-gray-600 dark:text-gray-400">Your Current Points</p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Start earning points today by choosing eco-friendly options during checkout!
                    </p>

                    <Button className="bg-green-600 hover:bg-green-700 text-white">Place an Eco-Friendly Order</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

