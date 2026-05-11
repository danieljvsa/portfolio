'use client'

import React from 'react'

const explorations = [
    {
        topic: 'GNSS Integrity Verification',
        description: 'Researching spoofing detection and multi-constellation GNSS reliability in safety-critical applications.',
    },
    {
        topic: 'Edge Computing Architectures',
        description: 'Exploring distributed inference and real-time processing at the edge for IoT deployments.',
    },
    {
        topic: 'Event Sourcing Patterns',
        description: 'Implementing event-driven architectures for audit trails, temporal queries, and system resilience.',
    },
    {
        topic: 'Zero-Copy Data Structures',
        description: 'Optimizing memory efficiency in high-throughput systems with innovative data serialization.',
    },
]

export function CurrentExploration() {
    return (
        <section className="section bg-gradient-to-b from-background to-card-bg/30">
            <div className="section-container max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="section-title">Currently Exploring</h2>
                    <p className="section-subtitle">
                        Topics at the frontier of my engineering interests
                    </p>
                </div>

                <div className="space-y-4">
                    {explorations.map((item) => (
                        <div
                            key={item.topic}
                            className="card hover-lift group border-l-4 border-l-accent"
                        >
                            <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-base mb-2">
                                {item.topic}
                            </h3>
                            <p className="text-text-secondary">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
