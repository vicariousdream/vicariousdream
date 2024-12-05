import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    title: "EcoPulse",
    description: "An innovative environmental tool focused on waste management and community education.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Project Management", "Sustainability", "Community Engagement"],
  },
  {
    title: "Cloud Migration Project",
    description: "Successfully migrated a large-scale application to AWS, improving performance and scalability.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["AWS", "Cloud Architecture", "Performance Optimization"],
  },
  {
    title: "Graphic Design Portfolio",
    description: "A collection of branding materials and marketing visuals created for various clients.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Graphic Design", "Branding", "Adobe Creative Suite"],
  },
  {
    title: "IT Support Dashboard",
    description: "Developed a comprehensive dashboard for managing and tracking IT support tickets.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["IT Support", "Dashboard Design", "Data Visualization"],
  },
]

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 luxury-text text-center">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="luxury-border overflow-hidden group bg-card transition-all duration-300 hover:shadow-lg hover:scale-105">
            <CardContent className="p-0 relative">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6">
                <h3 className="text-xl font-semibold luxury-text text-center mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

