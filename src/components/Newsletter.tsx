"use client";

import React from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.newsletterBox}>
                    <div className={styles.blob1}></div>
                    <div className={styles.blob2}></div>

                    <div className={styles.newsletterContent}>
                        <h2 className={styles.newsTitle}>
                            Sign Up, <span>Stay Updated</span>
                        </h2>
                        <p className={styles.newsSubtitle}>
                            Receive weekly creatorverse updates.
                        </p>

                        <form className={styles.inputGroup} onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" className={styles.input} required />
                            <button type="submit" className={styles.subscribeButton}>Subscribe Now</button>
                        </form>
                    </div>

                    <div className={styles.qrSection}>
                        <div className={styles.qrContainer}>
                            {/* Placeholder QR to match style */}
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Creatorverse2026&color=000000" alt="QR Code" className={styles.qr} />
                        </div>
                        <span className={styles.scanText}>Scan QR code</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
