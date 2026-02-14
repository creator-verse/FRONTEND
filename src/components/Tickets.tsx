"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../app/sections.css';

const tickets = [
    {
        type: 'STUDENT TICKET',
        price: '₦6,000',
        originalPrice: '₦3,500',
        subtext: 'Early bird category: Ideal for students',
        color: 'pink',
        features: [
            'Full access to event',
            'Welcome creator kit',
            'Access to content zone',
            'Access to networking sessions',
            'Creatorverse digital badge',
            'Access to brand souvenirs and giveaways'
        ],
    },
    {
        type: 'REGULAR TICKET',
        price: '₦12,000',
        subtext: 'Open to everyone - creators ready to level up',
        color: 'blue',
        features: [
            'Full access to event',
            'Welcome creator kit',
            'Access to content zone',
            'Access to networking sessions',
            'Creatorverse digital badge',
            'Access to brand souvenirs and giveaways',
            'Creatorverse event pack',
            'Reserved seating',
            'Media access to speakers'
        ],
    },
    {
        type: 'EXECUTIVE TICKET',
        price: '₦25,000',
        subtext: 'Best for founders and brand builders',
        color: 'green',
        features: [
            'Full access to event',
            'Welcome creator kit',
            'Access to content zone',
            'Access to networking sessions',
            'Creatorverse digital badge',
            'Upgraded Creatorverse event pack',
            'Priority check-in and reserved seating',
            'Special media access to speakers',
            'Exclusive post event resource pack',
            'Complementary snacks'
        ],
    },
    {
        type: 'VIP TICKET',
        price: '₦40,000',
        subtext: 'Best for industry leaders and premium guests',
        color: 'red',
        features: [
            'Full access to event',
            'Welcome creator kit',
            'Access to content zone',
            'Front row seating',
            'Upgraded creatorverse event pack',
            'Meet and greet with speakers and organizers',
            'Light catering and hospitality lounge',
            'VIP badge and identification',
            'Media posts and recognition',
            'Exclusive post event resource pack',
            'Access to session recordings',
            'Complimentary content session'
        ],
    },
];

export default function Tickets() {
    return (
        <section className="tickets-section" id="tickets">
            <div className="tickets-container">
                <div className="tickets-decorative-blob" />

                <div className="tickets-header-wrapper">
                    <h2 className="tickets-heading">Get Your <span>Tickets</span> Now</h2>
                    <p className="tickets-sub-heading">Secure your spot in the Creatorverse.</p>
                </div>

                <div className="tickets-grid">
                    {tickets.map((t, i) => (
                        <div key={i} className={`tickets-card tickets-${t.color}`}>
                            <div className="tickets-card-header">
                                <div className="tickets-header-top">
                                    <div className="tickets-card-title">{t.type}</div>
                                    <div className="tickets-price">
                                        {t.originalPrice && (
                                            <span style={{ textDecoration: 'line-through', opacity: 0.6, marginRight: '8px', fontSize: '0.9em' }}>
                                                {t.price}
                                            </span>
                                        )}
                                        {t.originalPrice ? t.originalPrice : t.price}
                                    </div>
                                </div>
                                <p className="tickets-card-subtext">{t.subtext}</p>
                            </div>
                            <div className="tickets-divider"></div>

                            <ul className="tickets-features">
                                {t.features.map((f, fi) => (
                                    <li key={fi} className="tickets-feature">
                                        <span className="tickets-icon-wrapper">
                                            <ArrowRight size={14} />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button className={`tickets-button tickets-${t.color}-button`}>
                                Buy Tickets
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
