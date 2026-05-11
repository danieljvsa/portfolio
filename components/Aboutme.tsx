'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export function Aboutme() {
    return (
        <section className="section" id="about-me">
            <div className="section-container">
                <div className="mb-16">
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="flex justify-center">
                        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg hover-lift">
                            <Image
                                src="/assets/profile.png"
                                alt="Daniel Sá - Backend Engineer"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <p className="text-lg text-text-secondary leading-relaxed">
                            I&apos;m Daniel Sá, a backend engineer based in Porto, Portugal, passionate about building resilient systems that scale. My focus is on architecting distributed systems, geospatial platforms, and GNSS technology.
                        </p>

                        <p className="text-lg text-text-secondary leading-relaxed">
                            Over the past years, I&apos;ve worked with cutting-edge technologies and complex challenges in production environments. I&apos;m committed to continuous learning and staying at the forefront of backend engineering innovations.
                        </p>

                        <p className="text-lg text-text-secondary leading-relaxed">
                            My journey started with programming fundamentals, evolving into specialized expertise in distributed systems, database optimization, and real-time data processing. I believe in writing clean, maintainable code and designing systems that are elegant in their simplicity.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="https://www.linkedin.com/in/danieljvsa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary hover-lift"
                            >
                                Connect on LinkedIn
                            </Link>
                            <a
                                href="/cv/danieljvsa_cv.pdf"
                                download
                                className="btn btn-secondary hover-lift"
                            >
                                Download Full CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
