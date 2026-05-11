'use client'

import React from 'react'

const experiences = [
    {
        period: '2023 - Present',
        title: 'Senior Backend Engineer',
        company: 'Teltonika Solutions',
        description: 'Leading backend development for IoT platforms with focus on scalability and reliability.',
        highlights: ['Microservices', 'Node.js/Go', 'PostgreSQL', 'AWS'],
    },
    {
        period: '2022 - 2023',
        title: 'Backend Engineer',
        company: 'OpenFuel Platform',
        description: 'Architected distributed systems for fuel logistics optimization and real-time tracking.',
        highlights: ['Distributed Systems', 'Geospatial', 'Real-time APIs'],
    },
    {
        period: '2021 - 2022',
        title: 'Full-Stack Developer',
        company: 'Various Startups',
        description: 'Built end-to-end solutions with emphasis on backend performance and data integrity.',
        highlights: ['Full-Stack', 'Database Design', 'DevOps'],
    },
]

export function ExperienceTimeline() {
    return (
        <section className="section">
            <div className="section-container">
                <div className="mb-16">
                    <h2 className="section-title">Professional Experience</h2>
                    <p className="section-subtitle">
                        Journey through backend engineering roles
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div key={exp.period} className="mb-12 relative">
                            {/* Timeline line */}
                            {index !== experiences.length - 1 && (
                                <div className="hidden md:block absolute left-8 top-20 w-1 h-20 bg-gradient-to-b from-accent to-accent/20" />
                            )}

                            <div className="flex gap-6">
                                {/* Timeline dot */}
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="card flex-grow hover-lift">
                                    <p className="text-sm text-accent font-semibold mb-2">
                                        {exp.period}
                                    </p>
                                    <h3 className="text-xl font-bold text-foreground mb-1">
                                        {exp.title}
                                    </h3>
                                    <p className="text-text-secondary font-medium mb-3">
                                        {exp.company}
                                    </p>
                                    <p className="text-text-secondary mb-4">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.highlights.map((highlight) => (
                                            <span
                                                key={highlight}
                                                className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
