"use client";

import React from 'react';
import { Instagram } from 'lucide-react';
import '../app/sections.css';

export default function Footer() {
    return (
        <footer className="footer">
            {/* Green accent line handled in CSS */}
            <div className="footer-container">
                <div className="footer-top-section">
                    <div className="footer-links-grid">
                        <div className="footer-link-column">
                            <a href="/schedule">Schedule</a>
                            <a href="/speakers">Speakers</a>
                            <a href="/#tickets">Tickets</a>
                        </div>
                        <div className="footer-link-column">
                            <a href="/faq">FAQs</a>
                            <a href="/blog">Blogs</a>
                            <a href="#dp">DP Generator</a>
                        </div>
                    </div>

                    <div className="footer-cta-wrapper">
                        <button className="footer-buy-tickets-btn" onClick={() => window.location.href = '/#tickets'}>Buy Tickets</button>
                    </div>
                </div>

                <div className="footer-bottom-section">
                    <h1 className="footer-big-logo">Creatorverse</h1>

                    <div className="footer-info">
                        <span className="footer-copyright">© Copyright 2026</span>

                        <div className="footer-socials">
                            <span className="footer-follow-us">Follow Us</span>
                            <div className="footer-icons">
                                <a
                                    href="https://www.instagram.com/creatorverse_events"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow us on Instagram"
                                >
                                    <Instagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
