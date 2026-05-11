'use client'

import React from 'react'
import { faCss3, faHtml5, faNode, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'

const skills = [
    { name: 'HTML', icon: faHtml5, isFontAwesome: true },
    { name: 'CSS', icon: faCss3, isFontAwesome: true },
    { name: 'Firebase', icon: 'bx:bxl-firebase', isFontAwesome: false },
    { name: 'Sass', icon: faSass, isFontAwesome: true },
    { name: 'ReactJS', icon: faReact, isFontAwesome: true },
    { name: 'Next.js', icon: 'file-icons:nextjs', isFontAwesome: false },
    { name: 'NodeJS', icon: faNode, isFontAwesome: true },
    { name: 'MongoDB', icon: 'cib:mongodb', isFontAwesome: false },
    { name: 'MySQL', icon: 'cib:mysql', isFontAwesome: false },
    { name: 'Java', icon: 'fontisto:java', isFontAwesome: false },
    { name: 'C#', icon: 'teenyicons:c-sharp-solid', isFontAwesome: false },
    { name: 'C', icon: 'teenyicons:c-solid', isFontAwesome: false },
]

export function Knowledge() {
    return (
        <section className="section bg-gradient-to-b from-background to-card-bg/30" id="known">
            <div className="section-container">
                <div className="animate-fadeIn">
                    <h2 className="section-title">Conhecimentos</h2>
                    <p className="section-subtitle">
                        Tecnologias e ferramentas que domino
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
