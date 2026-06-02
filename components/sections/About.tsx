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
              I&apos;m a Software Engineer specializing in backend development, distributed systems and IoT platforms. Throughout my career, I&apos;ve worked on vehicle tracking systems, telemetry platforms, AI-powered retail solutions and enterprise-grade backend services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My interests include GNSS/Galileo technologies, aerospace software, event-driven architectures and open-source development. I enjoy building practical tools that solve real-world problems and sharing them with the developer community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Porto, Portugal, I&apos;m currently at CEiiA developing backend services and distributed systems for mobility and sustainability platforms.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">4+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">49</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Repositories</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">68</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">GitHub Stars</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">OSS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Open Source Focus</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
