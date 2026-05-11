'use client'

import React from 'react'
import Link from 'next/link'

export interface ProjectCardProps {
    title: string
    description: string
    technicalDetails: string
    technologies: string[]
    link: string
    impact?: string
}

export function ProjectCard({
    title,
    description,
    technicalDetails,
    technologies,
    link,
    impact,
}: ProjectCardProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex flex-col h-full hover-lift cursor-pointer"
        >
            {/* Header gradient */}
            <div className="relative h-32 -mx-6 -mt-6 mb-4 bg-gradient-to-br from-accent/20 to-highlight/20 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base" />
                <div className="absolute inset-0 flex items-end justify-end text-6xl opacity-5 group-hover:opacity-10 transition-opacity duration-base pr-4 pb-2">
                    →
                </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-base">
                {title}
            </h3>

            <p className="text-lg text-text-secondary mb-4 line-clamp-2">
                {description}
            </p>

            <p className="text-sm text-text-secondary mb-6 flex-grow">
                {technicalDetails}
            </p>

            {impact && (
                <div className="mb-6 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                    <p className="text-sm text-accent font-medium">
                        <span className="font-bold">Impact:</span> {impact}
                    </p>
                </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-card-border">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded group-hover:bg-accent/20 transition-colors duration-base"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </a>
    )
}
