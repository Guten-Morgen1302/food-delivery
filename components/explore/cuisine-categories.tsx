import { Card } from "@/components/ui/card"

const cuisines = [
  {
    id: 1,
    name: "Italian",
    image:
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 2,
    name: "Japanese",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    name: "Mexican",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80",
  },
  {
    id: 4,
    name: "Indian",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
  },
  {
    id: 5,
    name: "Thai",
    image:
      "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 6,
    name: "Mediterranean",
    image:
      "https://images.unsplash.com/photo-1544250634-d6465ee028eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 7,
    name: "Chinese",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 8,
    name: "American",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
  },
]

export default function CuisineCategories() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Explore by Cuisine</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cuisines.map((cuisine) => (
          <Card
            key={cuisine.id}
            className="overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:shadow-primary-500/50"
          >
            <div className="relative h-48">
              <img
                src={cuisine.image || "/placeholder.svg"}
                alt={cuisine.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent flex items-end p-4">
                <h3 className="text-xl font-bold text-white">{cuisine.name}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

