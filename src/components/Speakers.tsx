"use client";

import React from 'react';
import Image from 'next/image';
import '../app/sections.css';

export default function Speakers() {
    return (
        <section className="speakers-section" id="speakers">
            <div className="speakers-main-wrapper">
                <div className="speakers-header-content">
                    <div className="speakers-header-text">
                        <h2 className="speakers-heading">Speakers</h2>
                        <p className="speakers-text-block">
                            The faces shaping this year&apos;s Creatorverse experience.<br />
                            Four bold creators — industry pros and rising voices — bringing real stories, real lessons, and the spark your next big move needs.
                        </p>
                    </div>
                    {/* <div className="speakers-image-wrapper">
                        <Image
                            src="/images/pink-squiggle.png"
                            alt="Decorative Pink Squiggle"
                            width={800}
                            height={400}
                            className="speakers-pink-squiggle"
                            priority
                        />
                    </div> */}
                </div>

                <div className="speakers-container">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="speakers-slot">

                            {/* Silhouette Image */}
                            <div className="speakers-silhouette-wrapper">
                                <Image
                                    src={i % 2 === 0 ? "/images/female-silhouette.png" : "/images/male-silhouette.png"}
                                    alt="Mystery Speaker"
                                    fill
                                    className="speakers-silhouette-image"
                                />
                            </div>
                        </div>
                    ))}

                    <div className="speakers-overlay">
                        <div className="speakers-coming-soon-text">COMING SOON...</div>
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
