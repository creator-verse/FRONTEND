"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import '../app/sections.css';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-card">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hero-badge">
                            <Calendar size={18} />
                            <span>May 2nd, 2026 . Enugu, Nigeria</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Creatorverse<span>2026</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Shaping The Future Of The Creator Economy
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Button variant="primary" size="lg" className="hero-buy-button" onClick={() => window.open('#tickets', '_self')}>
                            Buy Tickets
                        </Button>

                        <a href="#" className="hero-link-button">
                            Join Our Newsletter <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>

                {/* Collage Images */}
                <div className="hero-collage-container">
                    {/* Pink Image */}
                    <motion.div
                        className="hero-collage-image hero-pink-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <img src="/images/imgpink.jpg" alt="Creator" />
                    </motion.div>

                    {/* Blue Image */}
                    <motion.div
                        className="hero-collage-image hero-blue-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <img src="/images/imgblue.jpg" alt="Creator" />
                    </motion.div>

                    {/* Green Image */}
                    <motion.div
                        className="hero-collage-image hero-green-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <img src="/images/imggreen.jpg" alt="Creator" />
                    </motion.div>

                    {/* Red Image */}
                    <motion.div
                        className="hero-collage-image hero-red-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <img src="/images/imgred.jpg" alt="Creator" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
