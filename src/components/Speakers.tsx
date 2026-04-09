"use client";

import React from 'react';
import Image from 'next/image';
import '../app/sections.css';

const carouselImages = [
    "sp1.png", "sp2.png", "sp03.png", "sp04.png", "sp05.png",
    "sp06.png", "sp07.png", "sp08.png", "sp09.png", "sp10.png", "sp11.png"
];

// Duplicate the array to create an infinite looping effect
const trackItems = [...carouselImages, ...carouselImages, ...carouselImages];

export default function Speakers() {
    return (
        <section className="speakers-section" id="speakers">
            <div className="speakers-main-wrapper">
                <div className="speakers-header-content">
                    <div className="speakers-header-text">
                        <h2 className="speakers-heading">Speakers &amp; Panelists</h2>
                        <p className="speakers-text-block">
                            The faces shaping this year&apos;s Creatorverse experience.<br />
                            Bold creators — industry pros and rising voices — bringing real stories, real lessons, and the spark your next big move needs.
                        </p>
                    </div>
                </div>

                <div className="speakers-carousel-wrapper">
                    <div className="speakers-carousel-track">
                        {trackItems.map((img, i) => (
                            <div key={i} className="speakers-slot">
                                <div className="speakers-silhouette-wrapper">
                                    <Image
                                        src={`/images/${img}`}
                                        alt={`Speaker ${i}`}
                                        width={500}
                                        height={1000}
                                        className="speakers-silhouette-image"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Speakers Button */}
                <div className="speakers-button-wrapper">
                    <button className="speakers-view-all-button" onClick={() => window.location.href = '/speakers'}>
                        View All Of Our Speakers
                    </button>
                </div>
            </div>
        </section>
    );
}
