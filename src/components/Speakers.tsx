"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Speakers.module.css';

export default function Speakers() {
    return (
        <section className={`section-padding ${styles.section}`} id="speakers">
            <div className={styles.mainWrapper}>
                <div className={styles.headerContent}>
                    <div className={styles.headerText}>
                        <h2 className={styles.heading}>Speakers</h2>
                        <p className={styles.textBlock}>
                            The faces shaping this year&apos;s Creatorverse experience.<br />
                            Four bold creators — industry pros and rising voices — bringing real stories, real lessons, and the spark your next big move needs.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/pink-squiggle.png"
                            alt="Decorative Pink Squiggle"
                            width={800}
                            height={400}
                            className={styles.pinkSquiggle}
                            priority
                        />
                    </div>
                </div>

                <div className={styles.speakersContainer}>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={styles.slot}>

                            {/* Silhouette Image */}
                            <div className={styles.silhouetteWrapper}>
                                <Image
                                    src={i % 2 === 0 ? "/images/female-silhouette.png" : "/images/male-silhouette.png"}
                                    alt="Mystery Speaker"
                                    fill
                                    className={styles.silhouetteImage}
                                />
                            </div>
                        </div>
                    ))}

                    <div className={styles.overlay}>
                        <div className={styles.comingSoonText}>COMING SOON...</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
