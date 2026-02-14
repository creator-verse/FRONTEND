"use client";

import Image from 'next/image';
import '../app/sections.css';

export default function Schedule() {
    return (
        <section className="schedule-section" id="schedule">
            <div className="schedule-wrapper">

                {/* Header Area */}
                <div className="schedule-header-row">
                    <h2 className="schedule-heading">
                        <span>Your Day</span> In<br />One Glance
                    </h2>
                    <div className="schedule-image-wrapper">
                        <Image
                            src="/images/pink-squiggle.png"
                            alt="Decorative Pink Squiggle"
                            width={500}
                            height={150}
                            className="schedule-pink-squiggle"
                        />
                    </div>
                </div>

                {/* Folder UI */}
                <div className="schedule-folder-container">
                    <div className="schedule-tab">SAT 2</div>
                    <div className="schedule-folder-body">

                        <div className="schedule-folder-header">
                            <div className="schedule-folder-title">Launch Day</div>
                            <button className="schedule-ticket-button" onClick={() => window.open('#tickets', '_self')}>
                                Buy Tickets
                            </button>
                        </div>

                        <div className="schedule-list">
                            <div className="schedule-item"></div>
                            <div className="schedule-item"></div>
                            <div className="schedule-item"></div>
                        </div>

                    </div>
                </div>

                {/* See Full Program Button */}
                <div className="schedule-button-wrapper">
                    <button className="schedule-full-program-button" onClick={() => window.location.href = '/schedule'}>
                        See Our Full Program
                    </button>
                </div>

            </div>
        </section>
    );
}
