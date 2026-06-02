import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'OpenFuel Platform',
      description: 'Distributed fuel logistics optimization system with real-time vehicle tracking and route optimization.',
      impact: '50+ concurrent users, <500ms query response',
      techs: ['Node.js', 'PostgreSQL', 'Redis', 'AWS']
    },
    {
      title: 'Teltonika-Go Platform',
      description: 'IoT device management system handling telemetry from thousands of connected devices.',
      impact: '10k+ devices managed, real-time metrics',
      techs: ['Go', 'PostgreSQL', 'MQTT', 'Kubernetes']
    },
    {
      title: 'GNSS Integrity Platform',
      description: 'Multi-constellation GNSS signal validation and spoofing detection system with ML integration.',
      impact: '99.9% spoofing detection accuracy',
      techs: ['Python', 'TensorFlow', 'Signal Processing', 'AWS']
    },
    {
      title: 'Football Sanctions Dashboard',
      description: 'Real-time sports data aggregation platform processing multi-source APIs with complex business logic.',
      impact: '<100ms update latency, real-time analytics',
      techs: ['Node.js', 'MongoDB', 'GraphQL', 'React']
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Production systems I&apos;ve architected and deployed</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-2">Impact</p>
                  <p className="text-sm text-foreground">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techs.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="https://github.com/danieljvsa" target="_blank" className="text-primary hover:underline">
            View more on GitHub →
          </Link>
        </div>
      </div>
    </section>
  )
}
