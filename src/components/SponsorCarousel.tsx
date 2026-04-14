import React from 'react';
import styles from './SponsorCarousel.module.css';

const logos = [
  '/images/LOGOS/SELAR.png',
  '/images/LOGOS/Fictional company logo.png',
  '/images/LOGOS/SELAR.png',
  '/images/LOGOS/Fictional company logo.png',
  '/images/LOGOS/SELAR.png',
  '/images/LOGOS/Fictional company logo.png',
];

export default function SponsorCarousel() {
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className={styles.sponsorsSection}>
      <div className={styles.carouselContainer}>
        {/* We use two sets of the same content to create a seamless scrolling effect */}
        <div className={styles.carouselTrack}>
          {repeatedLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sponsor ${index}`}
              className={styles.logoImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
