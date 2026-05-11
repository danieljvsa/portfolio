'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuItems = [
        { label: 'About', href: '#about-me' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#known' },
        { label: 'Contact', href: '#contacts' },
    ]

    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xs border-b border-card-border">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="#" className="text-2xl font-bold bg-gradient-to-r from-accent to-highlight-light bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-base">
                        DSá
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-text-secondary hover:text-accent transition-colors duration-base font-medium"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden btn-icon bg-card-bg hover:bg-accent/10"
                    aria-label="Toggle menu"
                >
                    <span className="text-xl">☰</span>
                </button>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-card-bg border-b border-card-border md:hidden animate-slideUp">
                        <nav className="flex flex-col p-4 gap-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-text-secondary hover:text-accent transition-colors duration-base font-medium py-2"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
