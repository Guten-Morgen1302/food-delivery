import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function FoodMap() {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold dark:text-white">Food Map</h2>
        <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
          <MapPin className="h-4 w-4 mr-2" />
          Change Location
        </Button>
      </div>

      <div className="bg-neutral-100 rounded-xl h-64 flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-600 mb-4">Interactive map will be displayed here</p>
          <Button className="bg-primary-600 hover:bg-primary-700">View Full Map</Button>
        </div>
      </div>
    </section>
  )
}

