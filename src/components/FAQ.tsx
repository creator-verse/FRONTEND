"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
    { question: "What is the Creatorverse?", answer: "Creatorverse is the ultimate gathering of creators, brands, and innovators to shape the future of the digital economy." },
    { question: "What is the schedule for Creatorverse?", answer: "The event spans two days, April 18 & 25, featuring keynotes, panels, extensive break-out sessions, and networking mixers." },
    { question: "How do I purchase tickets for Creatorverse?", answer: "You can get your ticket directly from this website in the Tickets section above. Early bird pricing is available for a limited time!" },
    { question: "How many speakers are coming for Creatorverse?", answer: "We have over 20 industry leaders confirmed, with more surprise guests to be announced closer to the date." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className={`section-padding ${styles.section}`} id="faqs">
            <div className={styles.container}>
                {/* Decorative Blobs */}
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>

                <h2 className={styles.heading}>Frequently Asked Questions</h2>
                <div className={styles.faqList}>
                    {faqs.map((f, i) => (
                        <div key={i} className={`${styles.item} ${openIndex === i ? styles.openItem : ''}`}>
                            <button
                                className={`${styles.trigger} ${openIndex === i ? styles.openTrigger : ''}`}
                                onClick={() => toggle(i)}
                            >
                                {f.question}
                                <ChevronDown className={`${styles.icon} ${openIndex === i ? styles.openIcon : ''}`} />
                            </button>
                            <div className={`${styles.content} ${openIndex === i ? styles.openContent : ''}`}>
                                <div className={styles.body}>{f.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
