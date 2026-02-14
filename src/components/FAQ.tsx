"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import '../app/sections.css';

const faqs = [
    { question: "What is the Creatorverse?", answer: "Creatorverse is the ultimate gathering of creators, brands, and innovators to shape the future of the digital economy." },
    { question: "What is the schedule for Creatorverse?", answer: "The event lasts for a day, May 02, featuring keynotes, panels, extensive break-out sessions, and networking mixers." },
    { question: "How do I purchase tickets for Creatorverse?", answer: "You can get your ticket directly from this website in the Tickets section above. Early bird pricing is available for a limited time!" },
    { question: "How many speakers are coming for Creatorverse?", answer: "We have over 20 industry leaders confirmed, with more surprise guests to be announced closer to the date." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="faq-section" id="faqs">
            <div className="faq-container">
                {/* Decorative Images */}
                <Image
                    src="/images/greenstar.png"
                    alt=""
                    width={80}
                    height={80}
                    className="faq-decoration-star"
                />
                <Image
                    src="/images/pink-squiggle.png"
                    alt=""
                    width={120}
                    height={60}
                    className="faq-decoration-squiggle"
                />

                <h2 className="faq-heading">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((f, i) => (
                        <div key={i} className={`faq-item ${openIndex === i ? 'faq-open-item' : ''}`}>
                            <button
                                className={`faq-trigger ${openIndex === i ? 'faq-open-trigger' : ''}`}
                                onClick={() => toggle(i)}
                            >
                                {f.question}
                                <ChevronDown className={`faq-icon ${openIndex === i ? 'faq-open-icon' : ''}`} />
                            </button>
                            <div className={`faq-content ${openIndex === i ? 'faq-open-content' : ''}`}>
                                <div className="faq-body">{f.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Learn More Button */}
                <div className="faq-button-wrapper">
                    <button className="faq-learn-more-button" onClick={() => window.location.href = '/faq'}>
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
