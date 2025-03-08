import LiveStreamCard from "@/components/live-streams/live-stream-card"
import UpcomingStreams from "@/components/live-streams/upcoming-streams"
import StreamHighlights from "@/components/live-streams/stream-highlights"
import StreamCategories from "@/components/live-streams/stream-categories"

const liveStreams = [
  {
    id: 1,
    title: "Vegan Italian Feast",
    description: "Join Chef Anna as she creates a delicious vegan feast with Italian classics reimagined.",
    chefName: "Chef Anna Martinez",
    chefRestaurant: "Little Italy Restaurant",
    chefImage: "https://randomuser.me/api/portraits/women/44.jpg",
    streamImage: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=2574&auto=format&fit=crop",
    isLive: true,
    viewers: "1.2k",
  },
  {
    id: 2,
    title: "Artisan Bread Workshop",
    description: "Learn to make perfect sourdough and artisan bread with simple techniques at home.",
    chefName: "Chef Marco Lee",
    chefRestaurant: "Sweet Delights Bakery",
    chefImage: "https://randomuser.me/api/portraits/men/32.jpg",
    streamImage: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=2574&auto=format&fit=crop",
    isLive: false,
    startsIn: "15 mins",
    reminders: "43",
  },
  {
    id: 3,
    title: "Perfect Steak Mastery",
    description: "Discover the secrets to grilling the perfect steak every time with Chef James.",
    chefName: "Chef James Wilson",
    chefRestaurant: "The Grill House",
    chefImage: "https://randomuser.me/api/portraits/men/47.jpg",
    streamImage: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=2574&auto=format&fit=crop",
    isLive: true,
    viewers: "2.7k",
  },
]

export default function LiveStreamsPage() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-primary-800 mb-2">Live Chef's Cooking Streams</h1>
          <p className="text-neutral-600">
            Join our talented chefs for exclusive cooking demonstrations and learn their secrets
          </p>
        </header>

        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveStreams.map((stream) => (
              <LiveStreamCard key={stream.id} stream={stream} />
            ))}
          </div>
        </section>

        <UpcomingStreams />
        <StreamHighlights />
        <StreamCategories />
      </div>
    </div>
  )
}

