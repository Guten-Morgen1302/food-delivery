import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

const upcomingStreams = [
  {
    id: 1,
    title: "Quick Lunch Ideas",
    time: "Tomorrow, 12:30 PM",
  },
  {
    id: 2,
    title: "Dessert Masterclass",
    time: "Friday, 7:00 PM",
  },
  {
    id: 3,
    title: "Family Dinner Ideas",
    time: "Saturday, 5:30 PM",
  },
  {
    id: 4,
    title: "Vegan Breakfast",
    time: "Sunday, 9:00 AM",
  },
]

export default function UpcomingStreams() {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-neutral-800">Upcoming Streams</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full bg-neutral-100 hover:bg-primary-100">
            <ChevronLeft className="h-5 w-5 text-primary-600" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full bg-neutral-100 hover:bg-primary-100">
            <ChevronRight className="h-5 w-5 text-primary-600" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {upcomingStreams.map((stream) => (
          <div key={stream.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary-100 text-primary-700 p-2 rounded-lg">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">{stream.title}</h4>
                <p className="text-xs text-neutral-500">{stream.time}</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full py-1.5 bg-neutral-100 hover:bg-neutral-200 text-primary-600 rounded-lg text-sm font-medium transition-colors mt-2"
            >
              Notify Me
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

