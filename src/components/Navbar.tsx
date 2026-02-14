"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import '../app/sections.css';

const navLinks = [
    { name: 'Schedule', href: '/schedule' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Tickets', href: '/#tickets' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar-header">
            <div className="navbar-container">
                <Link href="/" className="navbar-logo">
                    Creatorverse
                </Link>

                {/* Desktop Menu - Centered */}
                <nav className="navbar-desktop-menu">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="navbar-link">
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Side Button */}
                <div className="navbar-auth-buttons">
                    <Button variant="primary" size="md" className="navbar-buy-button" onClick={() => window.location.href = '/#tickets'}>
                        Buy Tickets
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="navbar-mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div className={`navbar-mobile-menu ${isOpen ? 'navbar-mobile-menu-open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="navbar-mobile-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Button variant="primary" size="lg" className="w-full" onClick={() => {
                        setIsOpen(false);
                        window.location.href = '/#tickets';
                    }}>
                        Buy Tickets
                    </Button>
                </div>
            </div>
        </header>
    );
}
