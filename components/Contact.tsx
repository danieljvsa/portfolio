'use client'

import Link from 'next/link'
import React from 'react'

export function Contact() {
    return (
        <section className="section bg-gradient-to-b from-card-bg/30 to-background" id="contacts">
            <div className="section-container">
                <div className="text-center max-w-2xl mx-auto animate-fadeIn">
                    <h2 className="section-title text-5xl md:text-6xl mb-6">
                        Hello <span className="gradient-text">World!!</span>
                    </h2>

                    <p className="text-lg md:text-xl text-text-secondary mb-12">
                        Se quiser conversar comigo, não hesite em mandar uma mensagem
                    </p>

                    <div className="mb-12 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                        <Link
                            href="mailto:danielviana18@gmail.com"
                            className="inline-flex items-center gap-2 text-2xl font-semibold text-accent hover:text-accent-light transition-colors duration-base hover-lift"
                        >
                            <span>📧</span>
                            danielviana18@gmail.com
                        </Link>
                    </div>

                    <div className="flex gap-4 justify-center mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
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

                    <p className="text-text-tertiary text-sm pt-12 border-t border-card-border animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        Criado por Daniel Sá © 2024. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </section>
    )
}
