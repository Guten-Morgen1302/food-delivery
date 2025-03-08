import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Clock, User } from "lucide-react"

export default function LiveStreamSection() {
  return (
    <section className="mb-16">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-4">Live Chef's Special Cooking Streams</h2>
            <p className="text-white mb-6">
              Watch renowned chefs prepare exclusive dishes and learn cooking techniques in real-time. Interact with
              them and order the featured dishes directly!
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg text-white">
                <Clock className="h-6 w-6 mb-2" />
                <h3 className="font-bold mb-1">Next Stream</h3>
                <p className="text-sm">Today at 7:00 PM</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg text-white">
                <User className="h-6 w-6 mb-2" />
                <h3 className="font-bold mb-1">Featured Chef</h3>
                <p className="text-sm">Chef Michael Roberts</p>
              </div>
            </div>

            <Button
              className="bg-white text-orange-600 hover:bg-orange-100 rounded-full font-semibold transform hover:scale-105 transition-all self-start flex items-center"
              asChild
            >
              <Link href="/live-streams">
                <Play className="mr-2 h-5 w-5" />
                Join Live Stream
              </Link>
            </Button>
          </div>

          <div className="lg:w-1/2 relative h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Chef cooking"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-opacity-50 transition-all">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

