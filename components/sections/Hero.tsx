import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-6">
          <Badge variant="outline" className="border-primary/50 text-primary">
            Backend Engineer & Distributed Systems
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
          Building Resilient <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">Infrastructure</span> at Scale
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          I specialize in distributed systems, IoT platforms, GNSS technology, and telemetry solutions. 
          Focused on building production-grade backends that handle complexity with elegance and precision.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="#contact">
            <Button size="lg" className="text-base">
              Get in Touch
            </Button>
          </Link>
          <Link href="/cv/danieljvsa_cv.pdf" target="_blank">
            <Button size="lg" variant="outline" className="text-base">
              Download CV
            </Button>
          </Link>
        </div>

        {/* Tech Stack Preview */}
        <div className="inline-block">
          <p className="text-sm text-muted-foreground mb-3">Core Technologies</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Node.js', 'PostgreSQL', 'AWS', 'Kubernetes', 'Go'].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
