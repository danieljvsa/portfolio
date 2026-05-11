'use client'

import React from 'react'
import { faCss3, faHtml5, faNode, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'

const skills = [
    { name: 'Node.js', icon: faNode, isFontAwesome: true },
    { name: 'PostgreSQL', icon: 'cib:postgresql', isFontAwesome: false },
    { name: 'AWS', icon: 'cib:amazon-aws', isFontAwesome: false },
    { name: 'Redis', icon: 'cib:redis', isFontAwesome: false },
    { name: 'Docker', icon: 'cib:docker', isFontAwesome: false },
    { name: 'Kubernetes', icon: 'cib:kubernetes', isFontAwesome: false },
    { name: 'Go', icon: 'cib:go', isFontAwesome: false },
    { name: 'TypeScript', icon: 'cib:typescript', isFontAwesome: false },
    { name: 'GraphQL', icon: 'cib:graphql', isFontAwesome: false },
    { name: 'MongoDB', icon: 'cib:mongodb', isFontAwesome: false },
    { name: 'Message Queues', icon: 'cib:rabbitmq', isFontAwesome: false },
    { name: 'Python', icon: 'cib:python', isFontAwesome: false },
]

export function Knowledge() {
    return (
        <section className="section bg-gradient-to-b from-background to-card-bg/30" id="known">
            <div className="section-container">
                <div className="mb-16">
                    <h2 className="section-title">Technical Toolkit</h2>
                    <p className="section-subtitle">
                        Core technologies and tools I specialize in
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="card flex flex-col items-center justify-center py-8 hover:bg-accent/5 group hover-lift transition-all duration-base"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="text-4xl mb-3 transition-transform duration-base group-hover:scale-110 group-hover:text-accent">
                                {skill.isFontAwesome ? (
                                    <FontAwesomeIcon icon={skill.icon as any} />
                                ) : (
                                    <Icon icon={skill.icon as string} />
                                )}
                            </div>
                            <span className="text-sm font-medium text-text-secondary group-hover:text-foreground transition-colors duration-base">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
