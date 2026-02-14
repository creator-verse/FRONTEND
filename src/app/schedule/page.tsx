"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import '../schedule.css';

const scheduleData = [
    {
        day: "SAT 2",
        title: "Launch Day",
        sessions: [
            { time: "9:00 AM - 10:00 AM", title: "Registration & Welcome", description: "Check-in, collect your welcome kit, and network with fellow creators" },
            { time: "10:00 AM - 11:30 AM", title: "Opening Keynote", description: "The Future of the Creator Economy - Industry insights and trends" },
            { time: "11:45 AM - 1:00 PM", title: "Panel Discussion", description: "Building Sustainable Creator Businesses - Expert panel Q&A" },
        ]
    }
];

export default function SchedulePage() {
    return (
        <div className="schedule-page">
            <Navbar />

            <main className="schedule-main">
                {/* Hero Section */}
                <section className="schedule-hero">
                    <div className="schedule-hero-container">
                        {/* Decorative Squiggle */}
                        <Image
                            src="/images/pink-squiggle.png"
                            alt=""
                            width={200}
                            height={100}
                            className="schedule-hero-decoration"
                        />

                        <h1 className="schedule-hero-title">
                            <span className="schedule-hero-highlight">Your Day</span> In<br />
                            One Glance
                        </h1>
                    </div>
                </section>

                {/* Schedule Cards Section */}
                <section className="schedule-cards-section">
                    <div className="schedule-cards-container">
                        {scheduleData.map((day, idx) => (
                            <div key={idx} className="schedule-day-card">
                                <div className="schedule-day-badge">{day.day}</div>

                                <div className="schedule-day-content">
                                    <div className="schedule-day-header">
                                        <h2 className="schedule-day-title">{day.title}</h2>
                                        <button className="schedule-buy-button">Buy Tickets</button>
                                    </div>

                                    <div className="schedule-sessions">
                                        {day.sessions.map((session, sidx) => (
                                            <div key={sidx} className="schedule-session">
                                                <div className="schedule-session-time">{session.time}</div>
                                                <div className="schedule-session-content">
                                                    <h3 className="schedule-session-title">{session.title}</h3>
                                                    <p className="schedule-session-description">{session.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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
