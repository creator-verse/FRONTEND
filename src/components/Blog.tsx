"use client";

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import '../app/sections.css';

// Updated placeholders matching the vibe
const posts = [
    {
        title: "How to Navigate International Payments for Creatorverse",
        image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Behind The Scenes of the Creatorverse Community",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "The Creatorverse Community Boosted my Career",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Becoming a Part of The Creatorverse Community",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "More Than Talks: The Experience",
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Why this Innovation Matters Right Now",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
    }
];

export default function Blog() {
    return (
        <section className="blog-section" id="blog">
            <div className="blog-container">
                {/* Decorative Images */}
                <Image
                    src="/images/green-squiggle.png"
                    alt=""
                    width={150}
                    height={80}
                    className="blog-decoration-squiggle"
                />

                <div className="blog-header">
                    <h2 className="blog-heading">Blogs</h2>
                    <p className="blog-sub-heading">Stories, tips, and real lessons from the creator world.</p>
                </div>

                <div className="blog-grid">
                    {posts.map((p, i) => (
                        <div key={i} className="blog-card">
                            <div className="blog-image-wrapper">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className="blog-image"
                                />
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title">{p.title}</h3>
                                <div className="blog-divider"></div>
                                <div className="blog-footer">
                                    <span className="blog-read-article">Read Article</span>
                                    <ChevronRight size={16} className="blog-icon" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="blog-button-wrapper">
                    <button className="blog-see-all-button" onClick={() => window.location.href = '/blog'}>
                        See all Articles <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}
