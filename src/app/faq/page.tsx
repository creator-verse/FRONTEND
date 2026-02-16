"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import '../faq.css';

const faqs = [
    { question: "Who is Creatorverse for?", answer: "You. Come as you are. If you're interested in the creative sector of South-East Nigeria, enjoy creating content, or have ideas running through, you're more than welcome." },
    { question: "Where Will Creatorverse take place?", answer: "DeBase Landmark, Enugu." },
    { question: "When will Creatorverse take place?", answer: "Everything we have stored up will be unraveled on the 2nd of May, 2026." },
    { question: "Can I Attend even if I'm not from Enugu?", answer: "Yes. Creatorverse is open to creators from Enugu, Southeast Nigeria, and beyond." },
    { question: "How Can I stay in touch with Creatorverse?", answer: "Sign up here for our newsletter and register for the event. Let us handle event updates, reminders, and announcements for you." },
    { question: "What happens after I register?", answer: "You will be redirected to our community where you can follow real time conversations with fellow creators." },
    { question: "What is the schedule for Creatorverse?", answer: "The full event schedule will be shared closer to the event date. Registered attendees and those with access to our exclusive newsletters will receive early access to the agenda and session details." },
    { question: "How many speakers are coming for Creatorverse?", answer: "Creatorverse will feature multiple creative experts as keynote speakers and several experienced creators as speakers for the panel sessions. Detailed speaker announcements will be made gradually on our social media pages and through the newsletter updates." },
    { question: "How do I register for Creatorverse?", answer: <span><em>Here</em>. Click the link in the ticket section, and save your seat. Once properly registered, you will receive detailed event information and updates via email.</span> },
    {
        question: "What should I expect at Creatorverse?",
        answer: (
            <ul className="list-disc pl-5">
                <li>An unforgettable experience filled with notes, resources, and tools to scale in the creative industry.</li>
                <li>Inspiring conversations from attendees and speakers</li>
                <li>Grand networking opportunities with creators from across Southeast Nigeria and beyond.</li>
                <li>A community to grow with</li>
            </ul>
        )
    },
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
