'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Title() {
    return (
        <section className="section pt-32 md:pt-40 bg-gradient-to-b from-background to-card-bg/30">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 md:order-1 animate-fadeIn">
                        <p className="text-lg md:text-xl text-text-secondary mb-4">
                            Olá, eu sou o
                        </p>

                        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
                            Daniel <span className="gradient-text">Sá</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-text-secondary mb-8">
                            Desenvolvedor Full-Stack
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="/cv/danieljvsa_cv.pdf"
                                download
                                className="btn btn-primary hover-lift"
                            >
                                Baixar CV
                            </a>
                            <a
                                href="#projects"
                                className="btn btn-secondary hover-lift"
                            >
                                Ver Projetos
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 md:order-2 flex justify-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            <Image
                                src="/assets/logo-header.svg"
                                alt="Daniel Sá - Developer"
                                fill
                                className="object-contain drop-shadow-lg"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
