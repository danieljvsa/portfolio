import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Expertise() {
  const areas = [
    {
      title: 'Distributed Systems',
      description: 'Microservices architecture, event-driven systems, and message queues',
      skills: ['Microservices', 'Event Sourcing', 'Message Queues', 'Load Balancing']
    },
    {
      title: 'Data & Databases',
      description: 'SQL optimization, time-series data, and geospatial queries',
      skills: ['PostgreSQL', 'Query Optimization', 'Geospatial', 'Time-Series']
    },
    {
      title: 'IoT & Real-Time',
      description: 'Device management, telemetry aggregation, and real-time processing',
      skills: ['MQTT', 'IoT Protocols', 'Real-Time APIs', 'Data Streaming']
    },
    {
      title: 'Infrastructure & DevOps',
      description: 'Containerization, orchestration, and cloud deployment',
      skills: ['Kubernetes', 'Docker', 'AWS', 'CI/CD']
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
