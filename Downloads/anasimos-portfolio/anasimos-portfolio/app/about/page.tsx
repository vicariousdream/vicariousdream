import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Anasimos Abrha</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            I'm an adaptable and results-driven professional with a dynamic skill set that spans IT support, cloud solutions, virtual assistance, and creative design. With hands-on experience in troubleshooting, customer support, and managing remote workflows, I bring efficiency, creativity, and technical expertise to diverse roles, delivering impactful solutions across multiple domains.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Core Competencies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "IT Support",
              "Cloud Architecture",
              "Graphic Design",
              "Virtual Assistance",
              "Project Management",
              "Customer Service",
              "Adobe Creative Suite",
              "AWS & Oracle Cloud",
              "Time Management"
            ].map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="justify-center py-2 transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Professional Philosophy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            I believe in the power of continuous learning and adaptability in the ever-evolving tech landscape. My approach combines technical expertise with creative problem-solving, always striving to deliver solutions that not only meet but exceed expectations. I'm passionate about leveraging technology to drive efficiency and innovation in every project I undertake.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Personal Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Outside of my professional life, I'm an avid tech enthusiast, always exploring the latest trends in cloud computing and graphic design. I enjoy participating in online coding challenges and contributing to open-source projects. In my free time, I love hiking and photography, finding inspiration in nature for my creative work.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

