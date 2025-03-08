import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Clock, CheckCircle } from "lucide-react"

export default function OrdersPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">My Orders</h1>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="active">Active Orders</TabsTrigger>
          <TabsTrigger value="past">Past Orders</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-6 mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Order #12346</h3>
                    <p className="text-sm text-gray-500">Placed today at 2:30 PM</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    In Transit
                  </span>
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Package className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Bella Italia</h4>
                    <p className="text-sm text-gray-600">2 items • $32.50</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">Order Confirmed</span>
                      <span className="text-xs font-medium">In Transit</span>
                      <span className="text-xs font-medium">Delivered</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-orange-500 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-gray-500" />
                    Estimated delivery: 3:15 PM
                  </p>
                  <Button variant="outline">Track Order</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past">
          <Card>
            <CardHeader>
              <CardTitle>Past Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-md border p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h3 className="font-medium">Order #1234{i}</h3>
                        <p className="text-sm text-gray-500">March {i}, 2025</p>
                      </div>
                      <span className="flex items-center text-green-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Delivered
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm">
                        {i + 1} items • ${(25 + i * 10).toFixed(2)}
                      </p>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-6 mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Weekly Meal Plan</h3>
                    <p className="text-sm text-gray-500">Next delivery: March 15, 2025</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Recurring
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Package className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Healthy Breakfast Combo</h4>
                    <p className="text-sm text-gray-600">5 meals • $89.99/week</p>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Modify Plan</Button>
                  <Button variant="destructive">Cancel Plan</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

