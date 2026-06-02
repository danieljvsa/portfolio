import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Backend Engineer',
      company: 'OpenFuel',
      period: '2023 - Present',
      description: 'Architected and maintained distributed logistics platform handling real-time vehicle tracking and optimization.',
      highlights: ['Microservices architecture', 'Real-time APIs', 'PostgreSQL optimization', 'AWS deployment']
    },
    {
      role: 'Backend Engineer',
      company: 'Teltonika',
      period: '2021 - 2023',
      description: 'Developed IoT platform for device management and telemetry aggregation across 10k+ connected devices.',
      highlights: ['Go backend', 'MQTT integration', 'Kubernetes', 'Real-time data processing']
    },
    {
      role: 'Full Stack Developer',
      company: 'Various Startups',
      period: '2019 - 2021',
      description: 'Built multiple products from concept to production, focusing on backend architecture and database design.',
      highlights: ['Product development', 'System design', 'Database optimization', 'Infrastructure setup']
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
