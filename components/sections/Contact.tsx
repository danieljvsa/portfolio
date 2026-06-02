import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground text-lg">
            Interested in collaborating? I&apos;m always open to discussing distributed systems, 
            architecture challenges, and interesting backend problems.
          </p>
        </div>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-2xl">Get In Touch</CardTitle>
            <CardDescription>Reach out via email or connect on professional networks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Email */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <Link 
                href="mailto:danielviana18@gmail.com" 
                className="text-primary hover:underline font-medium"
              >
                danielviana18@gmail.com
              </Link>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Connect With Me</p>
              <div className="flex gap-3 justify-center">
                <Link href="https://github.com/danieljvsa" target="_blank">
                  <Button variant="outline">
                    GitHub
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/danieljvsa" target="_blank">
                  <Button variant="outline">
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </div>

            {/* Download CV */}
            <div className="pt-4 border-t border-border">
              <Link href="/cv/danieljvsa_cv.pdf" target="_blank" className="block">
                <Button className="w-full">
                  Download Full CV
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-xs text-muted-foreground mt-12">
          Built with precision. © 2024 Daniel Sá.
        </p>
      </div>
    </section>
  )
}
