'use client'

import React from 'react'

const focusAreas = [
    {
        title: 'Backend Architecture',
        description: 'Designing scalable, fault-tolerant systems with proper separation of concerns and clean abstractions.',
        icon: '⚙️',
    },
    {
        title: 'Distributed Systems',
        description: 'Building reliable systems across multiple nodes with consensus algorithms and eventual consistency patterns.',
        icon: '🔗',
    },
    {
        title: 'Geospatial Technology',
        description: 'Leveraging GNSS, mapping APIs, and spatial databases to solve location-based problems at scale.',
        icon: '🗺️',
    },
    {
        title: 'Database Optimization',
        description: 'Designing efficient schemas, optimizing queries, and implementing caching strategies for high-throughput systems.',
        icon: '📊',
    },
]

export function EngineeringFocus() {
    return (
        <section className="section bg-gradient-to-b from-card-bg/30 to-background">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Engineering Focus</h2>
                    <p className="section-subtitle">
                        What drives my work as a backend engineer
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {focusAreas.map((area) => (
                        <div
                            key={area.title}
                            className="card hover-lift group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-base">
                                {area.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-base">
                                {area.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
