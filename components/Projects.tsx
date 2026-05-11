'use client'

import Link from 'next/link'
import React from 'react'
import { ProjectCard } from './ProjectCard'

const featuredProjects = [
    {
        title: 'OpenFuel Platform',
        description: 'Distributed fuel logistics optimization system with real-time vehicle tracking.',
        technicalDetails: 'Built a scalable backend handling real-time GPS data streams with geospatial queries, implementing event sourcing for audit trails and microservices architecture.',
        technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Geospatial', 'Microservices'],
        impact: '50+ concurrent users, <500ms query response times',
        url: 'https://github.com/danieljvsa/openFuel',
    },
    {
        title: 'Teltonika-Go Platform',
        description: 'IoT device management and telemetry aggregation system.',
        technicalDetails: 'Architected distributed system for managing thousands of IoT devices, implementing MQTT broker integration with time-series database optimization.',
        technologies: ['Go', 'PostgreSQL', 'InfluxDB', 'MQTT', 'Kubernetes'],
        impact: '10k+ IoT devices managed, real-time metrics aggregation',
        url: 'https://github.com/danieljvsa/teltonika-go',
    },
    {
        title: 'GNSS Integrity Platform',
        description: 'Multi-constellation GNSS signal validation and spoofing detection system.',
        technicalDetails: 'Implemented signal processing pipeline for GNSS data validation with machine learning integration for anomaly detection.',
        technologies: ['Python', 'PostgreSQL', 'TensorFlow', 'Signal Processing', 'AWS'],
        impact: '99.9% accuracy in spoofing detection',
        url: 'https://github.com/danieljvsa/gnss-integrity',
    },
    {
        title: 'Football Sanctions Dashboard',
        description: 'Real-time sports data aggregation and analysis platform.',
        technicalDetails: 'Built data pipeline processing multi-source sports APIs with complex business logic, implementing efficient caching strategies.',
        technologies: ['Node.js', 'MongoDB', 'Redis', 'GraphQL', 'React'],
        impact: 'Real-time dashboard with <100ms update latency',
        url: 'https://github.com/danieljvsa/football-sanctions',
    },
    {
        title: 'Smart Bracelet Guardian',
        description: 'Healthcare IoT solution for fall detection and emergency alerting.',
        technicalDetails: 'Embedded systems integration with backend API handling real-time sensor data and alert routing to medical staff.',
        technologies: ['IoT', 'Node.js', 'Mobile', 'Real-time Alerts'],
        url: 'https://github.com/danieljvsa/smart-bracelet-guardian',
    },
    {
        title: 'Plate Recon System',
        description: 'Intelligent parking garage security system with ANPR technology.',
        technicalDetails: 'Computer vision integration with backend processing for license plate recognition and access control.',
        technologies: ['Computer Vision', 'Node.js', 'PostgreSQL', 'Security'],
        url: 'https://github.com/danieljvsa/plate-recon',
    },
]

export function Projects() {
    return (
        <section className="section" id="projects">
            <div className="section-container">
                <div className="mb-16">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Production-grade systems and technical implementations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            technicalDetails={project.technicalDetails}
                            technologies={project.technologies}
                            link={project.url}
                            impact={project.impact}
                        />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="https://github.com/danieljvsa?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary text-base hover-lift"
                    >
                        View all repositories →
                    </Link>
                </div>
            </div>
        </section>
    )
}
