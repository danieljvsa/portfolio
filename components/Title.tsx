'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Title() {
    return (
        <section className="section pt-32 md:pt-40 pb-24 bg-gradient-to-b from-background via-background to-card-bg/20">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 md:order-1 animate-fadeIn">
                        <p className="text-sm md:text-base text-accent font-semibold uppercase tracking-widest mb-4">
                            Backend Engineer & Distributed Systems
                        </p>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground text-balance">
                            Building Resilient <span className="gradient-text">Infrastructure</span> at Scale
                        </h1>

                        <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-lg">
                            Specializing in geospatial platforms, distributed systems, and GNSS technology. Focused on building production-grade backends that handle complexity with elegance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a
                                href="/cv/danieljvsa_cv.pdf"
                                download
                                className="btn btn-primary hover-lift"
                            >
                                Download CV
                            </a>
                            <a
                                href="#projects"
                                className="btn btn-secondary hover-lift"
                            >
                                View My Work
                            </a>
                        </div>

                        <div className="pt-8 border-t border-card-border">
                            <p className="text-sm text-text-tertiary mb-4">Core Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                                {['Node.js', 'PostgreSQL', 'Geospatial', 'AWS', 'Microservices'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium bg-card-bg border border-card-border rounded-full text-text-secondary hover:border-accent hover:text-accent transition-colors duration-base"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 md:order-2 flex justify-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden bg-card-bg/50 border border-card-border/50 shadow-lg">
                            <Image
                                src="/assets/logo-header.svg"
                                alt="Daniel Sá - Backend Engineer"
                                fill
                                className="object-contain p-8"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
