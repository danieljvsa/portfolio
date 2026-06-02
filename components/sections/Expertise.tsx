import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Expertise() {
  const areas = [
    {
      title: 'Backend Systems',
      description: 'Reliable and scalable backend architectures',
      skills: ['Go', 'Java', 'Spring Boot', 'Node.js', 'REST APIs', 'gRPC']
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Modern cloud platforms and deployment strategies',
      skills: ['Docker', 'Kafka', 'PostgreSQL', 'Redis', 'Linux', 'CI/CD']
    },
    {
      title: 'IoT & Telemetry',
      description: 'Device communication and real-time data processing',
      skills: ['TCP', 'UDP', 'GPS', 'GNSS', 'Device Communication', 'Real-time Ingestion']
    },
    {
      title: 'Architecture',
      description: 'System design and distributed patterns',
      skills: ['Microservices', 'Event-driven Systems', 'Hexagonal Architecture', 'Distributed Systems']
    }
  ]

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Expertise</h2>
          <p className="text-muted-foreground text-lg">Areas where I focus and excel</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area) => (
            <Card key={area.title} className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
