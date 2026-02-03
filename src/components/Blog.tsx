import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import styles from './Blog.module.css';

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
        <section className={`section-padding ${styles.section}`} id="blog">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Blogs</h2>
                    <p className={styles.subHeading}>Stories, tips, and real lessons from the creator world.</p>
                </div>

                <div className={styles.grid}>
                    {posts.map((p, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{p.title}</h3>
                                <div className={styles.divider}></div>
                                <div className={styles.footer}>
                                    <span className={styles.readArticle}>Read Article</span>
                                    <ChevronRight size={16} className={styles.icon} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.buttonWrapper}>
                    <button className={styles.seeAllButton}>
                        See all Articles <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}
