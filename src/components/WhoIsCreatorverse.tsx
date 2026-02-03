"use client";

import React from 'react';
import styles from './WhoIsCreatorverse.module.css';

// Reusing shapes from previous designs or recreating them
const PurpleBlob = () => (
    <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M76.9 76.2C68.9 90.9 44.5 95.8 28.8 85.3 13.1 74.8 6.1 48.9 14.1 34.2 22.1 19.5 46.5 14.6 62.2 25.1 77.9 35.6 84.9 61.5 76.9 76.2Z" />
    </svg>
);

const GreenStar = () => (
    <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L61 35H98L68 57L79 92L50 70L21 92L32 57L2 35H39L50 0Z" style={{ strokeLinejoin: 'round', strokeWidth: '10', stroke: 'currentColor' }} />
    </svg>
);

const RedCloud = () => (
    <svg viewBox="0 0 100 70" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 60C8.9543 60 0 51.0457 0 40C0 28.9543 8.9543 20 20 20C22.463 20 24.814 20.445 27.009 21.265C29.679 9.389 40.245 0.5 53 0.5C67.912 0.5 80 12.588 80 27.5C80 28.163 79.967 28.816 79.902 29.459C80.264 29.442 80.63 29.432 81 29.432C91.493 29.432 100 37.939 100 48.432C100 58.925 91.493 67.432 81 67.432H20V60Z" transform="scale(0.9) translate(5,5)" />
    </svg>
);

const PinkDiamond = () => (
    <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C65 25 75 35 100 50C75 65 65 75 50 100C35 75 25 65 0 50C25 35 35 25 50 0Z" />
    </svg>
);

export default function WhoIsCreatorverse() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <p className={styles.text}>
                    If you text, take pictures, record audio or videos, tell stories or have a knack for idea generation, you are a creator, and Creatorverse 2026 is exactly what you need.
                </p>

                {/* Decorative Elements */}
                <div className={`${styles.shape} ${styles.purpleBlob}`}>
                    <PurpleBlob />
                </div>
                <div className={`${styles.shape} ${styles.greenStar}`}>
                    <GreenStar />
                </div>
                <div className={`${styles.shape} ${styles.redCloud}`}>
                    <RedCloud />
                </div>
                <div className={`${styles.shape} ${styles.pinkDiamond}`}>
                    <PinkDiamond />
                </div>
            </div>
        </section>
    );
}
