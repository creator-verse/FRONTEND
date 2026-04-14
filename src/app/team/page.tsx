"use client";

import React from 'react';
import Image from 'next/image';
import { Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import '../team-page.css';

const teamMembers = [
    {
        name: "Goshen Mmoneke",
        role: "Convener",
        image: "/images/tm0.jpg", 
        bio: "More Info Coming Soon"
    },
    {
        name: "Anosike Mmerichukwu",
        role: "Website Developer",
        image: "/images/tm1.png",
        bio: "More Info Coming Soon"
    },
    {
        name: "Asadu Chukwuamaka",
        role: "Lead, Mobilization Team",
        image: "/images/tm2.jpg",
        bio: "More Info Coming Soon"
    },
    {
        name: "Princess Chimdindu Obini",
        role: "Lead, Partnerships & Sponsorships",
        image: "/images/tm3.png",
        bio: "More Info Coming Soon"
    },
    {
        name: "Isreal Aluko",
        role: "Lead, Web Development Team",
        image: "/images/tm4.jpg",
        bio: "More Info Coming Soon"
    },
    {
        name: "Chimdalu Adibe",
        role: "Lead,content creation team",
        image: "/images/tm7.png",
        bio: "More Info Coming Soon"
    },
    {
        name: "Jordan Ebong",
        role: "Speakers Management Lead",
        image: "/images/tm5.jpg",
        bio: "More Info Coming Soon"
    },
    {
        name: "Okolie Ogechukwu Blossom",
        role: "Project manager_Logistics lead",
        image: "/images/tm8.jpg",
        bio: "More Info Coming Soon"
    },
    {
        name: "Obasi Favour Ngozi",
        role: "Social Media Team Lead",
        image: "/images/tm9.jpg",
        bio: "More Info Coming Soon"
    },
    {
        name: "Chidimma Itam",
        role: "Community Management Lead",
        image: "/images/tm10.png",
        bio: "More Info Coming Soon"
    },
    {
        name: "Nwokolo Amarachukwu",
        role: "Asst Lead Speaker Mgt and Mobilization",
        image: "/images/tm6.png",
        bio: "More Info Coming Soon"
    },
];

export default function TeamPage() {
    return (
        <div className="team-page-wrapper">
            <Navbar />

            <main className="team-page-main">
                {/* Decorative Background Elements */}
                {/* Reusing some existing blobs from the public/images folder */}
                <Image src="/images/pink-squiggle.png" alt="Decor" width={300} height={300} className="team-blob team-blob-1" />
                <Image src="/images/green-squiggle.png" alt="Decor" width={250} height={250} className="team-blob team-blob-2" />
                <Image src="/images/pink-squiggle.png" alt="Decor" width={280} height={280} className="team-blob team-blob-3" />

                <div className="team-header">
                    <h1 className="team-heading">
                        Meet the <span className="team-heading-accent">Team</span>
                    </h1>
                </div>

                <div className="team-grid-container">
                    <div className="team-grid">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="team-card">
                                <div className="team-image-container">
                                    <Image 
                                        src={member.image} 
                                        alt={member.name} 
                                        fill 
                                        className="team-image"
                                    />
                                </div>
                                <div className="team-role">{member.role}</div>
                                <div className="team-name">{member.name}</div>
                                <div className="team-bio">{member.bio}</div>
                                
                                <div className="team-socials">
                                    <a href="#" className="team-social-icon" aria-label="Facebook">
                                        <Facebook size={16} />
                                    </a>
                                    <a href="#" className="team-social-icon" aria-label="YouTube">
                                        <Youtube size={16} />
                                    </a>
                                    <a href="#" className="team-social-icon" aria-label="LinkedIn">
                                        <Linkedin size={16} />
                                    </a>
                                    <a href="#" className="team-social-icon" aria-label="Twitter">
                                        <Twitter size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="team-load-more-wrapper">
                        <button className="team-load-more-btn">
                            Load More Teams {'>'}
                        </button>
                    </div>
                </div>
            </main>

            <Newsletter />
            <Footer />
        </div>
    );
}
