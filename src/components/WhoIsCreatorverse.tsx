"use client";

import React from 'react';
import Image from 'next/image';
import '../app/sections.css';

export default function WhoIsCreatorverse() {
    return (
        <section className="who-section">
            <div className="who-card">
                {/* Decorative Shapes - Using temporary placeholders */}
                {/* Replace these image paths when you add your custom shape images */}
                <div className="who-shape who-shape-1">
                    <Image
                        src="/images/PURPLESTAR.png"
                        alt=""
                        width={120}
                        height={120}
                        className="who-shape-img"
                    />
                </div>
                <div className="who-shape who-shape-2">
                    <Image
                        src="/images/redstar.png"
                        alt=""
                        width={100}
                        height={100}
                        className="who-shape-img"
                    />
                </div>
                <div className="who-shape who-shape-3">
                    <Image
                        src="/images/greenstar.png"
                        alt=""
                        width={110}
                        height={110}
                        className="who-shape-img"
                    />
                </div>
                <div className="who-shape who-shape-4">
                    <Image
                        src="/images/pinkstar.png"
                        alt=""
                        width={130}
                        height={130}
                        className="who-shape-img"
                    />
                </div>

                {/* Main Content */}
                <div className="who-content">
                    <p className="who-text">
                        If you text, take pictures, record audio or videos, tell stories or have a knack for idea generation, you are a creator, and Creatorverse 2026 is exactly what you need.
                    </p>
                </div>
            </div>
        </section>
    );
}
