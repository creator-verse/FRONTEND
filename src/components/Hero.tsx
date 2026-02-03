"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.heroCard}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.badge}>
                            <Calendar size={16} />
                            <span>May 2nd, 2026 . Enugu, Nigeria</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Creatorverse<span>2026</span>
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Shaping The Future Of The Creator Economy
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Button variant="primary" size="lg" onClick={() => window.open('#tickets', '_self')}>
                            Buy Tickets
                        </Button>

                        <a href="#" className={styles.linkButton}>
                            Join Our Newsletter <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>

                {/* Decorative Shapes (Stickies) */}
                <div className={styles.shapeContainer}>
                    {/* Green Sticky (Back) */}
                    <motion.div
                        className={styles.sticky}
                        style={{
                            background: '#00cc66',
                            width: '300px',
                            height: '300px',
                            top: '10%',
                            right: '15%',
                            rotate: -5
                        }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Pink Sticky (Middle) */}
                    <motion.div
                        className={styles.sticky}
                        style={{
                            background: 'var(--brand-pink)',
                            width: '320px',
                            height: '320px',
                            top: '30%',
                            right: '5%',
                            rotate: 10,
                            zIndex: 2
                        }}
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    />

                    {/* Purple Sticky (Front/Bottom) */}
                    <motion.div
                        className={styles.sticky}
                        style={{
                            background: 'var(--brand-purple)',
                            width: '280px',
                            height: '200px', /* Rectangle */
                            bottom: '-5%',
                            right: '25%',
                            rotate: -5,
                            zIndex: 3,
                            filter: 'blur(10px)', /* Slight blur effect in foreground possibly */
                            opacity: 0.9
                        }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    />
                </div>
            </div>
        </section>
    );
}
