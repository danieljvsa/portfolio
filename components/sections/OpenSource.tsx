import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function OpenSource() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Open Source & Community</h2>
          <p className="text-muted-foreground text-lg">Contributions and projects shared with the community</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>GitHub Projects</CardTitle>
            <CardDescription>
              Active contributor to open source. Check out my repositories for more projects and contributions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm font-medium mb-2">Recent work includes:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Geospatial data processing libraries</li>
                  <li>• IoT device management utilities</li>
                  <li>• Database optimization tools</li>
                  <li>• Infrastructure automation scripts</li>
                </ul>
              </div>
              <div className="pt-4">
                <Link 
                  href="https://github.com/danieljvsa" 
                  target="_blank"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  View GitHub Profile →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
