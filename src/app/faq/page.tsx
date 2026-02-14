"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import '../faq.css';

const faqs = [
    { question: "What is the Creatorverse?", answer: "Creatorverse is the ultimate gathering of creators, brands, and innovators to shape the future of the digital economy." },
    { question: "What is the schedule for Creatorverse?", answer: "The event spans two days, April 18 & 25, featuring keynotes, panels, extensive break-out sessions, and networking mixers." },
    { question: "How do I purchase tickets for Creatorverse?", answer: "You can get your ticket directly from this website in the Tickets section. Early bird pricing is available for a limited time!" },
    { question: "How many speakers are coming for Creatorverse?", answer: "We have over 20 industry leaders confirmed, with more surprise guests to be announced closer to the date." },
    { question: "You might get a lead here...", answer: "Stay tuned for exciting announcements and updates as we get closer to the event!" },
    { question: "How can I get updates and announcements about Creatorverse?", answer: "Subscribe to our newsletter to receive weekly updates about speakers, schedule changes, and exclusive content." },
    { question: "How can I get updates and announcements about Creatorverse?", answer: "Follow us on social media and sign up for our newsletter to stay informed about all event updates." },
    { question: "How can I get updates and announcements about Creatorverse?", answer: "Join our community on social platforms and subscribe to get real-time notifications." },
    { question: "How can I get updates and announcements about Creatorverse?", answer: "Check our website regularly and follow our social channels for the latest news." },
    { question: "How can I get updates and announcements about Creatorverse?", answer: "Sign up for email alerts and join our WhatsApp community for instant updates." },
    { question: "How can I get updates and announcements about Creatorverse?", answer: "Download our event app and enable push notifications for real-time updates." },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="faq-page">
            <Navbar />

            <main className="faq-main">
                {/* Hero Section */}
                <section className="faq-hero">
                    <div className="faq-hero-container">
                        {/* Decorative Images */}
                        <Image
                            src="/images/pink-squiggle.png"
                            alt=""
                            width={100}
                            height={50}
                            className="faq-hero-decoration faq-decoration-left"
                        />
                        <Image
                            src="/images/greenstar.png"
                            alt=""
                            width={80}
                            height={80}
                            className="faq-hero-decoration faq-decoration-right"
                        />

                        <h1 className="faq-hero-title">
                            Have <span className="faq-hero-highlight">Questions?</span><br />
                            We've Got Answers
                        </h1>
                        <p className="faq-hero-subtitle">
                            From registration to event day details, our FAQ is here you covered.
                        </p>
                    </div>
                </section>

                {/* FAQ List Section */}
                <section className="faq-list-section">
                    <div className="faq-list-container">
                        {faqs.map((f, i) => (
                            <div key={i} className={`faq-list-item ${openIndex === i ? 'faq-list-item-open' : ''}`}>
                                <button
                                    className={`faq-list-trigger ${openIndex === i ? 'faq-list-trigger-open' : ''}`}
                                    onClick={() => toggle(i)}
                                >
                                    {f.question}
                                    <ChevronDown className={`faq-list-icon ${openIndex === i ? 'faq-list-icon-open' : ''}`} />
                                </button>
                                <div className={`faq-list-content ${openIndex === i ? 'faq-list-content-open' : ''}`}>
                                    <div className="faq-list-body">{f.answer}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}
