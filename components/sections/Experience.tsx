import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function Experience() {
  const experiences = [
    {
      role: 'Backend Developer',
      company: 'CEiiA',
      period: 'July 2025 – Present',
      description: 'Software Engineer developing backend services and distributed systems for mobility and sustainability platforms. Working with Java, Spring Boot, Kafka, PostgreSQL, Redis, Docker, and microservices architectures to build scalable solutions supporting carbon accounting, digital mobility, and environmental innovation initiatives.',
      highlights: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Microservices']
    },
    {
      role: 'Backend Developer',
      company: 'Reckon.ai',
      period: 'August 2023 - June 2025',
      description: 'Responsible for developing and maintaining all backend microservices that powered the company\'s core business platform — enabling users to manage and monitor AI-driven retail machines. Worked across a microservices architecture using Node.js for most backend services, and Python to integrate and automate various internal systems and processes.',
      highlights: ['Node.js', 'Python', 'Microservices', 'REST APIs', 'Docker']
    },
    {
      role: 'Software Developer',
      company: 'Gisgeo',
      period: 'September 2022 - July 2023',
      description: 'Responsible for developing and maintaining backend servers that handled real-time vehicle tracking data over TCP and UDP protocols. Worked primarily with Java to ensure reliable data ingestion and processing, and supported the web application layer built with PHP. Initiated a transition project to modernize infrastructure by migrating legacy Java servers to a Python-based architecture.',
      highlights: ['Java', 'PHP', 'Python', 'TCP/UDP', 'Real-time Systems']
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg">My career journey in backend engineering</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={exp.company}>
              <Card className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="whitespace-nowrap">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {idx < experiences.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
