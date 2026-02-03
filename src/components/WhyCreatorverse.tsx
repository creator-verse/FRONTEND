import Image from 'next/image';
import styles from './WhyCreatorverse.module.css';



export default function WhyCreatorverse() {
    return (
        <section className={styles.section} id="why">
            <div className={styles.mainCard}>
                {/* Top Row: Intro & Tagline */}
                <div className={styles.topRow}>
                    <div className={styles.introText}>
                        <p>
                            Creatorverse is a community for writers, designers, editors, and creators of all niches starting off with Enugu, Southeast Nigeria, with a goal of reaching the world.
                        </p>
                        <p>
                            Our pioneer event, is the perfect place to create, connect, and elevate in the years ahead! If you&apos;re tired of creating alone, passionate for communal growth, this is the home for you.
                        </p>
                    </div>
                    <div className={styles.introTitle}>
                        Shaping The Future Of<br />The Creator Economy
                    </div>
                </div>

                {/* Bottom Row: Heading & Squiggle */}
                <div className={styles.headingWrapper}>
                    <Image
                        src="/images/green-squiggle.png"
                        alt="Decorative Green Squiggle"
                        width={600}
                        height={200}
                        className={styles.squiggle}
                    />
                    <h2 className={styles.heading}>Why Creatorverse</h2>
                </div>
            </div>
        </section>
    );
}
