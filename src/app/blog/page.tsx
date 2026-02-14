"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import '../blog.css';

const blogPosts = [
    {
        title: "How to Navigate International Payments for Creatorverse",
        excerpt: "Learn the best practices for handling international payments as a creator. From currency conversion to payment platforms, we cover everything you need to know.",
        image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80",
        date: "March 15, 2026",
        readTime: "5 min read"
    },
    {
        title: "How to Navigate International Payments for Creatorverse",
        excerpt: "Discover strategies for managing cross-border transactions efficiently. Essential tips for creators working with global brands and audiences.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        date: "March 12, 2026",
        readTime: "4 min read"
    },
    {
        title: "How to Navigate International Payments for Creatorverse",
        excerpt: "Master the art of international payments with our comprehensive guide. Learn about fees, exchange rates, and the best payment solutions.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        date: "March 10, 2026",
        readTime: "6 min read"
    },
    {
        title: "How to Navigate International Payments for Creatorverse",
        excerpt: "Everything you need to know about receiving payments from international clients. Tips, tools, and best practices for creators.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
        date: "March 8, 2026",
        readTime: "5 min read"
    },
];

export default function BlogPage() {
    return (
        <div className="blog-page-wrapper">
            <Navbar />

            <main className="blog-page-main">
                {/* Hero Section */}
                <section className="blog-page-hero">
                    <div className="blog-page-hero-container">
                        {/* Decorative Images */}
                        <Image
                            src="/images/pink-squiggle.png"
                            alt=""
                            width={200}
                            height={100}
                            className="blog-page-hero-decoration blog-decoration-squiggle"
                        />
                        <Image
                            src="/images/greenstar.png"
                            alt=""
                            width={80}
                            height={80}
                            className="blog-page-hero-decoration blog-decoration-star"
                        />

                        <h1 className="blog-page-hero-title">Blogs</h1>
                        <p className="blog-page-hero-subtitle">
                            Stories, tips, and real lessons from the creator world.
                        </p>
                    </div>
                </section>

                {/* Blog Posts Section */}
                <section className="blog-page-posts-section">
                    <div className="blog-page-posts-container">
                        {blogPosts.map((post, idx) => (
                            <article key={idx} className={`blog-page-post ${idx % 2 === 0 ? 'blog-page-post-left' : 'blog-page-post-right'}`}>
                                <div className="blog-page-post-image-wrapper">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="blog-page-post-image"
                                    />
                                </div>
                                <div className="blog-page-post-content">
                                    <div className="blog-page-post-meta">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="blog-page-post-title">{post.title}</h2>
                                    <p className="blog-page-post-excerpt">{post.excerpt}</p>
                                    <button className="blog-page-read-more">
                                        Read More
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                    <button className="blog-page-load-more">Load More</button>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}
