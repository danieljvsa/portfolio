import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">Engineer focused on production systems and architectural excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a backend engineer based in Porto, Portugal, passionate about building distributed systems that scale reliably. 
              My expertise spans IoT platforms, geospatial technology, GNSS systems, and real-time data processing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the years, I&apos;ve architected solutions handling thousands of concurrent connections, optimized complex database queries, 
              and implemented microservices that process millions of data points daily.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and designing systems where complexity is hidden behind elegant abstractions. 
              Every decision is driven by reliability, performance, and operational clarity.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">5+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Years in Backend Engineering</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">10k+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Concurrent Connections Handled</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">99.9%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">System Uptime Target</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Languages Fluent</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
