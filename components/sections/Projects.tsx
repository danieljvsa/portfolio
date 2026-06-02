'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const projects = [
    {
      title: 'Teltonika-Go',
      description: 'Open-source Go library for decoding and communicating with Teltonika GPS tracking devices.',
      techs: ['Go', 'IoT', 'Telemetry', 'GPS', 'Networking'],
      github: 'https://github.com/danieljvsa/teltonika-go',
      category: 'Backend'
    },
    {
      title: 'Hopway',
      description: 'Interactive route planning and travel exploration tool focused on train and transport journeys.',
      techs: ['Maps', 'Travel', 'Routing', 'Web', 'JavaScript'],
      live: 'https://danieljvsa.github.io/hopway/',
      github: 'https://github.com/danieljvsa/hopway/',
      category: 'Web'
    },
    {
      title: 'Altivo',
      description: 'Personal portfolio and investment tracking platform supporting stocks, ETFs and crypto assets.',
      techs: ['Finance', 'Portfolio', 'Analytics', 'JavaScript'],
      live: 'https://danieljvsa.github.io/altivo/',
      github: 'https://github.com/danieljvsa/altivo/',
      category: 'Web'
    },
    {
      title: 'Plate-Recon',
      description: 'AI-powered license plate recognition platform combining computer vision, IoT devices and real-time processing.',
      techs: ['AI', 'Computer Vision', 'IoT', 'Automation'],
      github: 'https://github.com/danieljvsa/plate-recon',
      category: 'AI'
    }
  ]
  
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Production systems I&apos;ve architected and deployed</p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          {['All', 'Backend', 'Web', 'AI', 'Open Source'].map((filter) => (
            <Badge
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.title} className="flex flex-col hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  {project.github && (
                    <Link href={project.github} target="_blank" className="text-xs text-primary hover:underline">
                      GitHub
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank" className="text-xs text-primary hover:underline">
                      Live Demo
                    </Link>
                  )}
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
