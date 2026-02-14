"use client";

import React from 'react';
import '../app/sections.css';

export default function Newsletter() {
    return (
        <section className="newsletter-section">
            <div className="newsletter-container">
                <div className="newsletter-box">
                    {/* Decorative blobs as requested */}
                    <img
                        src="/images/newspurple.png"
                        alt=""
                        className="newsletter-blob-image blob-top-left"
                    />
                    <img
                        src="/images/newspink.png"
                        alt=""
                        className="newsletter-blob-image blob-bottom-right"
                    />

                    <div className="newsletter-content">
                        <h2 className="newsletter-title">
                            Sign Up, <span>Stay Updated</span>
                        </h2>
                        <p className="newsletter-subtitle">
                            Receive weekly creatorverse updates.
                        </p>

                        <form className="newsletter-input-group" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" className="newsletter-input" required />
                            <button type="submit" className="newsletter-subscribe-button">Subscribe Now</button>
                        </form>
                    </div>

                    <div className="newsletter-qr-section">
                        <div className="newsletter-qr-container">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Creatorverse2026&color=000000" alt="QR Code" className="newsletter-qr" />
                        </div>
                        <span className="newsletter-scan-text">Scan QR code</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
