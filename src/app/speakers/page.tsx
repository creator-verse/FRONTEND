"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import '../speakers-page.css';

export default function SpeakersPage() {
    return (
        <div className="speakers-page-wrapper">
            <Navbar />

            <main className="speakers-page-main">
                {/* Hero Section */}
                <section className="speakers-page-hero">
                    <div className="speakers-page-hero-container">
                        <h1 className="speakers-page-hero-title">Speakers</h1>
                        <p className="speakers-page-hero-subtitle">
                            Meet the faces shaping this year's Creatorverse experience.<br />
                            Four bold creators — industry pros and rising voices — bringing real stories, real lessons, and the spark your next big move needs.
                        </p>
                    </div>
                </section>

                {/* Speakers Grid Section */}
                <section className="speakers-page-grid-section">
                    <div className="speakers-page-grid-container">
                        <div className="speakers-page-grid">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="speakers-page-card">
                                    <div className="speakers-page-card-image">
                                        <Image
                                            src={i % 2 === 0 ? "/images/female-silhouette.png" : "/images/male-silhouette.png"}
                                            alt="Mystery Speaker"
                                            fill
                                            className="speakers-page-silhouette"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="speakers-page-overlay">
                            <div className="speakers-page-coming-soon">COMING SOON...</div>
                        </div>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}
