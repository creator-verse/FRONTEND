"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import styles from './Navbar.module.css';

const navLinks = [
    { name: 'Why Creatorverse', href: '#why' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    Creatorverse
                </Link>

                {/* Desktop Menu - Centered */}
                <nav className={styles.desktopMenu}>
                    <Link href="#schedule" className={styles.navLink}>Schedule</Link>
                    <Link href="#speakers" className={styles.navLink}>Speakers</Link>
                    <Link href="#tickets" className={styles.navLink}>Tickets</Link>
                    <Link href="#blog" className={styles.navLink}>Blog</Link>
                    <Link href="#faq" className={styles.navLink}>FAQ&apos;s</Link>
                </nav>

                {/* Right Side Button */}
                <div className={styles.authButtons}>
                    <Button variant="primary" size="md" onClick={() => window.open('#tickets', '_self')}>
                        Buy Tickets
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                    <Link href="#schedule" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Schedule</Link>
                    <Link href="#speakers" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Speakers</Link>
                    <Link href="#tickets" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Tickets</Link>
                    <Link href="#blog" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Blog</Link>
                    <Link href="#faq" className={styles.mobileLink} onClick={() => setIsOpen(false)}>FAQ&apos;s</Link>

                    <Button variant="primary" size="lg" className="w-full" onClick={() => {
                        setIsOpen(false);
                        window.open('#tickets', '_self');
                    }}>
                        Buy Tickets
                    </Button>
                </div>
            </div>
        </header>
    );
}
