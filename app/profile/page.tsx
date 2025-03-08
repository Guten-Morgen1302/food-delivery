import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">My Profile</h1>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="john.doe@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" type="tel" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>View your past orders and track current deliveries.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="font-medium">Order #12345</h3>
                    <p className="text-sm text-gray-500">March 8, 2025</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Delivered</span>
                </div>
                <p className="text-sm">2 items • $32.50</p>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="font-medium">Order #12344</h3>
                    <p className="text-sm text-gray-500">March 1, 2025</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Delivered</span>
                </div>
                <p className="text-sm">3 items • $45.75</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Dietary Preferences</CardTitle>
              <CardDescription>Customize your food preferences for better recommendations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Dietary Restrictions</Label>
                <div className="flex flex-wrap gap-2">
                  {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free"].map((diet) => (
                    <div key={diet} className="flex items-center space-x-2">
                      <input type="checkbox" id={diet} className="rounded border-gray-300" />
                      <label htmlFor={diet} className="text-sm">
                        {diet}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Cuisine Preferences</Label>
                <div className="flex flex-wrap gap-2">
                  {["Italian", "Mexican", "Chinese", "Indian", "Thai", "Japanese"].map((cuisine) => (
                    <div key={cuisine} className="flex items-center space-x-2">
                      <input type="checkbox" id={cuisine} className="rounded border-gray-300" defaultChecked />
                      <label htmlFor={cuisine} className="text-sm">
                        {cuisine}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

