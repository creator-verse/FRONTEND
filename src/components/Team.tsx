"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Team.module.css';

const teamMembers = [
  { name: "Goshen Mmoneke", role: "Convener", image: "/images/sp1.png" },
  { name: "Anosike Mmerichukwu", role: "Website Developer", image: "/images/tm1.png" },
  { name: "Chukwu Elvis", role: "Founder", image: "/images/sp1.png" },
  { name: "Chukwu Elvis", role: "Founder", image: "/images/sp1.png" },
  { name: "Chukwu Elvis", role: "Founder", image: "/images/sp1.png" },
  { name: "Chukwu Elvis", role: "Founder", image: "/images/sp1.png" },
];

export default function Team() {
  return (
    <section className={styles.teamSection} id="team">
      <div className={styles.decoration}>
        {/* Decorative Background Swoosh */}
        <svg viewBox="0 0 535 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M535 210C350 -50 150 180 0 20M350 450C420 380 480 400 535 480" stroke="#B3B0FF" strokeWidth="60" strokeLinecap="round" opacity="0.8"/>
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Meet the <span className={styles.highlight}>Team</span>
          </h2>
        </div>

        <div className={styles.carouselContainer}>
          {/* Row 1 - scrolling left */}
          <div className={`${styles.carouselTrack} ${styles.scrollLeft}`}>
            <div className={styles.carouselGroup}>
              {teamMembers.map((member, i) => (
                <div key={`row1-g1-${i}`} className={styles.memberCard}>
                  <div className={styles.memberImage}>
                    <Image src={member.image} alt={member.name} width={80} height={80} />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.carouselGroup}>
              {teamMembers.map((member, i) => (
                <div key={`row1-g2-${i}`} className={styles.memberCard}>
                  <div className={styles.memberImage}>
                    <Image src={member.image} alt={member.name} width={80} height={80} />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - scrolling left but offset, or scrolling right. Let's scroll right. */}
          <div className={`${styles.carouselTrack} ${styles.scrollRight}`}>
            <div className={styles.carouselGroup}>
              {teamMembers.map((member, i) => (
                <div key={`row2-g1-${i}`} className={styles.memberCard}>
                  <div className={styles.memberImage}>
                    <Image src={member.image} alt={member.name} width={80} height={80} />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.carouselGroup}>
              {teamMembers.map((member, i) => (
                <div key={`row2-g2-${i}`} className={styles.memberCard}>
                  <div className={styles.memberImage}>
                    <Image src={member.image} alt={member.name} width={80} height={80} />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.viewAllBtn} onClick={() => window.location.href = '/team'}>
            View all Teams <span className={styles.arrow}>{'>'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
