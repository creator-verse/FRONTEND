"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import '../app/sections.css';

const faqs = [
    { question: "Who is Creatorverse for?", answer: "You. Come as you are. If you're interested in the creative sector of South-East Nigeria, enjoy creating content, or have ideas running through, you're more than welcome." },
    { question: "Where Will Creatorverse take place?", answer: "DeBase Landmark, Enugu." },
    { question: "When will Creatorverse take place?", answer: "Everything we have stored up will be unraveled on the 2nd of May, 2026." },
    { question: "How do I register for Creatorverse?", answer: <span><em>Here</em>. Click the link in the ticket section, and save your seat. Once properly registered, you will receive detailed event information and updates via email.</span> },
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
