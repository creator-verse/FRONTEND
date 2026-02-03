"use client";

import Image from 'next/image';
import styles from './Schedule.module.css';

export default function Schedule() {
    return (
        <section className={`section-padding ${styles.section}`} id="schedule">
            <div className={styles.mainWrapper}>

                {/* Header Area */}
                <div className={styles.headerRow}>
                    <h2 className={styles.heading}>
                        <span>Your Day</span> In<br />One Glance
                    </h2>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/pink-squiggle.png"
                            alt="Decorative Pink Squiggle"
                            width={500}
                            height={150}
                            className={styles.pinkSquiggle}
                        />
                    </div>
                </div>

                {/* Folder UI */}
                <div className={styles.folderContainer}>
                    <div className={styles.tab}>SAT 2</div>
                    <div className={styles.folderBody}>

                        <div className={styles.folderHeader}>
                            <div className={styles.folderTitle}>Launch Day</div>
                            <button className={styles.ticketButton} onClick={() => window.open('#tickets', '_self')}>
                                Buy Tickets
                            </button>
                        </div>

                        <div className={styles.scheduleList}>
                            <div className={styles.scheduleItem}></div>
                            <div className={styles.scheduleItem}></div>
                            <div className={styles.scheduleItem}></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
