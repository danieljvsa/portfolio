'use client'

import Link from 'next/link'
import React from 'react'

const projects = [
    {
        title: 'Smart Bracelet',
        description: 'Projeto desenvolvido para detetar quedas de pacientes e avisar os enfermeiros.',
        url: 'https://github.com/danieljvsa/smart-bracelet-guardian',
    },
    {
        title: 'Plate Recon',
        description: 'Projeto desenvolvido para servir de sistema de segurança de garagens particulares.',
        url: 'https://github.com/danieljvsa/plate-recon',
    },
    {
        title: 'Harkonnen Auto',
        description: 'App de agendamento de reparação de automóveis.',
        url: 'https://github.com/danieljvsa/harkonnen-auto',
    },
    {
        title: 'Pickup Robot',
        description: 'Agente (IA) para determinar o melhor percurso a realizar por um robô, que se movimenta num espaço conhecido onde deve recolher objetos, procurando minimizar a distância percorrida.',
        url: 'https://github.com/danieljvsa/pickup_robot',
    },
    {
        title: 'Lockheed',
        description: 'Projecto foi desenvolvido para investigar contratos suspeitos de fraude do site Base.gov.',
        url: 'https://github.com/danieljvsa/lockheed',
    },
    {
        title: 'Naped',
        description: 'Portal de noticias de entretenimento.',
        url: 'https://github.com/danieljvsa/naped',
    },
]

export function Projects() {
    return (
        <section className="section" id="projects">
            <div className="section-container">
                <div className="animate-fadeIn">
                    <h2 className="section-title">Projetos</h2>
                    <p className="section-subtitle">
                        Conheça alguns dos projetos em que trabalhei
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <a
                            key={project.url}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card group hover-lift"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="relative h-32 mb-4 -mx-6 -mt-6 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-t-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base" />
                                <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-10 group-hover:opacity-20 transition-opacity duration-base">
                                    →
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-base">
                                {project.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed text-sm">
                                {project.description}
                            </p>
                        </a>
                    ))}
                </div>

                <div className="flex justify-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                    <Link
                        href="https://github.com/danieljvsa?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary text-base hover-lift"
                    >
                        Ver todos os repositórios →
                    </Link>
                </div>
            </div>
        </section>
    )
}
