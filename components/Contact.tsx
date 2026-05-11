'use client'

import Link from 'next/link'
import React from 'react'

export function Contact() {
    return (
        <section className="section bg-gradient-to-b from-card-bg/30 to-background" id="contacts">
            <div className="section-container">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="section-title text-5xl md:text-6xl mb-6">
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </h2>

                    <p className="text-lg md:text-xl text-text-secondary mb-12">
                        Interested in collaborating or discussing backend engineering challenges? I&apos;d love to hear from you.
                    </p>

                    <div className="mb-12">
                        <Link
                            href="mailto:danielviana18@gmail.com"
                            className="inline-flex items-center gap-2 text-2xl font-semibold text-accent hover:text-accent-light transition-colors duration-base hover-lift"
                        >
                            <span>📧</span>
                            danielviana18@gmail.com
                        </Link>
                    </div>

                    <div className="flex gap-4 justify-center mb-12">
                        <Link
                            href="https://www.linkedin.com/in/danieljvsa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary hover-lift"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="https://github.com/danieljvsa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary hover-lift"
                        >
                            GitHub
                        </Link>
                    </div>

                    <p className="text-text-tertiary text-sm pt-12 border-t border-card-border">
                        Built with precision. © 2024 Daniel Sá.
                    </p>
                </div>
            </div>
        </section>
    )
}
