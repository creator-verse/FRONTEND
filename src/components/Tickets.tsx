"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Tickets.module.css';

const tickets = [
    {
        type: 'EARLY BIRD TICKET',
        price: '[₦3,500]',
        subtext: 'Discount on tickets bought before the event',
        color: 'pink',
        features: ['Full access to Creatorverse 2026', 'Entry to all talks & panels', 'Access to networking sessions', 'Creatorverse digital badge'],
    },
    {
        type: 'REGULAR TICKET',
        price: '[₦10,000]',
        subtext: 'Open to everyone - creators ready to level up',
        color: 'blue',
        features: ['Everything in Early Bird', 'Priority seating', 'Access to Creatorverse workshops', 'Event resource pack'],
    },
    {
        type: 'EXECUTIVE TICKET',
        price: '[₦20,000]',
        subtext: 'Best for founders and brand builders',
        color: 'green',
        features: ['Everything in Regular', 'Reserved seating', 'Access to Speaker meet and greet', 'Premium event materials'],
    },
    {
        type: 'VIP TICKET',
        price: '[₦30,000]',
        subtext: 'Best for industry leaders and premium guests',
        color: 'red',
        features: ['Everything in Executive', 'Front-row seating', 'Private session with speakers', 'Dedicated on-site support'],
    },
];

export default function Tickets() {
    return (
        <section className={`section-padding ${styles.section}`} id="tickets">
            <div className={styles.container}>
                <div className={styles.decorativeBlob} />

                <div className={styles.headerWrapper}>
                    <h2 className={styles.heading}>Get Your <span>Tickets</span> Now</h2>
                    <p className={styles.subHeading}>Secure your spot in the Creatorverse.</p>
                </div>

                <div className={styles.grid}>
                    {tickets.map((t, i) => (
                        <div key={i} className={`${styles.card} ${styles[t.color]}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.headerTop}>
                                    <div className={styles.cardTitle}>{t.type}</div>
                                    <div className={styles.price}>{t.price}</div>
                                </div>
                                <p className={styles.cardSubtext}>{t.subtext}</p>
                            </div>
                            <div className={styles.divider}></div>

                            <ul className={styles.features}>
                                {t.features.map((f, fi) => (
                                    <li key={fi} className={styles.feature}>
                                        <span className={styles.iconWrapper}>
                                            <ArrowRight size={14} />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button className={styles[`${t.color}Button`]}>
                                Buy Tickets
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
