"use client";

import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Green accent line handled in CSS */}
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.linksGrid}>
                        <div className={styles.linkColumn}>
                            <a href="#schedule">Schedule</a>
                            <a href="#speakers">Speakers</a>
                            <a href="#tickets">Tickets</a>
                        </div>
                        <div className={styles.linkColumn}>
                            <a href="#faqs">FAQs</a>
                            <a href="#blogs">Blogs</a>
                            <a href="#dp">DP Generator</a>
                        </div>
                    </div>

                    <div className={styles.ctaWrapper}>
                        <button className={styles.buyTicketsBtn}>Buy Tickets</button>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <h1 className={styles.bigLogo}>Creatorverse</h1>

                    <div className={styles.footerInfo}>
                        <span className={styles.copyright}>© Copyright 2026</span>

                        <div className={styles.socials}>
                            <span className={styles.followUs}>Follow Us</span>
                            <div className={styles.icons}>
                                <Facebook size={20} />
                                <Instagram size={20} />
                                <Linkedin size={20} />
                                <Twitter size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
