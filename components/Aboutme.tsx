'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export function Aboutme() {
    return (
        <section className="section" id="about-me">
            <div className="section-container">
                <div className="animate-fadeIn">
                    <h2 className="section-title">Sobre mim</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
                    {/* Image */}
                    <div className="flex justify-center animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg hover-lift">
                            <Image
                                src="/assets/profile.png"
                                alt="Daniel Sá - Perfil"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            O meu nome é Daniel, tenho 22 anos, moro em Portugal, mais especificamente no Porto.
                        </p>

                        <p className="text-lg text-text-secondary leading-relaxed">
                            Atualmente, estou a procura de trabalho e tenho me dedicado também, sozinho, a aprender novas tecnologias.
                        </p>

                        <p className="text-lg text-text-secondary leading-relaxed">
                            Iniciei os meus estudos em programação em 2019, com a introdução de programação na licenciatura, o que me levou a investir meu tempo nesta área.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="https://www.linkedin.com/in/danieljvsa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary hover-lift"
                            >
                                Conectar no LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
