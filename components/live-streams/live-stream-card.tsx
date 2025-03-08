import { Button } from "@/components/ui/button"
import { Clock, Circle } from "lucide-react"

interface LiveStreamProps {
  stream: {
    id: number
    title: string
    description: string
    chefName: string
    chefRestaurant: string
    chefImage: string
    streamImage: string
    isLive: boolean
    viewers?: string
    startsIn?: string
    reminders?: string
  }
}

export default function LiveStreamCard({ stream }: LiveStreamProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={stream.streamImage || "/placeholder.svg"}
          alt={`${stream.chefName} cooking ${stream.title}`}
          className="w-full h-48 object-cover"
        />

        {stream.isLive ? (
          <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full font-semibold text-sm flex items-center animate-pulse">
            <Circle className="h-2 w-2 fill-white mr-2" />
            LIVE
          </div>
        ) : (
          <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full font-semibold text-sm flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            Starts in {stream.startsIn}
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center mb-3">
          <img
            src={stream.chefImage || "/placeholder.svg"}
            alt={stream.chefName}
            className="w-10 h-10 rounded-full border-2 border-primary-400"
          />
          <div className="ml-3">
            <h3 className="font-semibold text-neutral-800">{stream.chefName}</h3>
            <p className="text-xs text-neutral-500">{stream.chefRestaurant}</p>
          </div>
        </div>

        <h4 className="font-bold text-neutral-800 mb-2">{stream.title}</h4>
        <p className="text-sm text-neutral-600 mb-4">{stream.description}</p>

        <div className="flex justify-between items-center">
          {stream.isLive ? (
            <>
              <span className="text-xs text-neutral-500">Viewers: {stream.viewers}</span>
              <Button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full transition-colors font-medium">
                Join Now
              </Button>
            </>
          ) : (
            <>
              <span className="text-xs text-neutral-500">{stream.reminders} reminders set</span>
              <Button
                variant="outline"
                className="bg-neutral-100 hover:bg-neutral-200 text-primary-600 border border-primary-500 px-4 py-2 rounded-full transition-colors font-medium"
              >
                Set Reminder
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

