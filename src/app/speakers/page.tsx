"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import '../speakers-page.css';

const speakersData = [
    {
        // name: "Goshen Mmoneke",
        role: "Convener",
        image: "/images/SPEAKERS/GOSHEN MMONEKE.png",
        bio: "Goshen Mmoneke is a visionary creator who consistently pushes the boundaries of digital content. Prepare to be inspired by Goshen's creative journey and actionable strategies.",
        icon: "pink"
    },
    {
        // name: "Chief Emeka Mba",
        role: "Speaker",
        image: "/images/SPEAKERS/CHIEF EMEKA MBA.png",
        bio: "Chief Emeka Mba is a distinguished media professional and the CEO of Afia TV, with a strong background in broadcasting, technology, and policy. He previously served as Director-General of the Nigerian Broadcasting Commission, where he played a key role in shaping industry regulations and driving the transition toward a more competitive media landscape. With extensive experience across media and regulatory sectors, he is recognized for his expertise at the intersection of policy and technology. Chief Emeka Mba is also a strong advocate for indigenous content and innovation, continuously contributing to the growth, development, and global positioning of Nigeria’s media and entertainment industry.",
        icon: "purple"
    },
    {
        name: "Rachael Okonkwo",
        role: "Speaker",
        image: "/images/SPEAKERS/RACHAEL OKONKWO.png",
        bio: "Rachael Okonkwo, popularly known as Nkoli Nwa Nsukka, is an award-winning Nigerian actress, dancer, and philanthropist whose work has made a lasting impact on Nollywood. She rose to fame through her iconic role in Nkoli Nwa Nsukka, endearing her to millions and establishing her as one of the most beloved actresses of her generation. Beyond film, she is passionate about giving back. Through her annual Children’s Easter Carnival, she has reached thousands of families across Enugu and beyond. Rooted in creativity and compassion, Rachael uses her platform to inspire change through storytelling, community outreach, and mentorship.",
        icon: "pink"
    },
    {
        // name: "Dr. Ella Chioma Ezeadileje",
        role: "Speaker",
        image: "/images/SPEAKERS/DR. ELLA CHIOMA EZEADILEJE.png",
        bio: "Dr. Ella Chioma Ezeadilieje, popularly known as Veronica’s Daughter, is a social media influencer, storyteller, public speaker, and advocate for women’s empowerment. She is known for her bold, relatable conversations on relationships, personal growth, and societal issues. She holds a BSc in Political Science, an MSc, and a PhD in International Relations, and currently serves as a lecturer and Head of Department at the Nigerian British University. A serial entrepreneur, she convenes the Business, Balance & Beyond Summit. Through her work, Dr. Ella inspires women and young people to pursue growth, embrace purpose, and build fulfilling, balanced lives.",
        icon: "pink"
    },
    {
        name: "Ovie The Stunner",
        role: "Speaker",
        image: "/images/SPEAKERS/OVIE THE STUNNER.png",
        bio: "Ovie is a lifestyle and entertainment content creator known for his engaging storytelling and signature Delta-accented Pidgin. Through relatable humor and authentic conversations, he creates content that resonates with everyday audiences.His work spans comedic skits, reflections on relationships and modern life, and faith-based insights that spark both laughter and meaningful conversations. By blending entertainment with real-life experiences, Ovie has built a strong connection with his audience, making people feel seen and understood. Committed to authenticity and creative expression, he continues to use his platform to share stories that reflect culture, faith, and the realities of everyday life.",
        icon: "purple"
    },
    {
        // name: "Ekwueme Nancy",
        role: "Panelist",
        image: "/images/SPEAKERS/EKWUEME NANCY.png",
        bio: "Ekwueme Nancy Chioma is a content creator, lifestyle influencer, and intellectual property law enthusiast raised in Turin, Italy. With nearly eight years of experience in social media and digital marketing, she has built a strong reputation as a storyteller and culture-shaper in Nigeria’s digital space. She is passionate about entertainment law, branding, and protecting creative ideas. Nancy is the founder of 1214 Club, a Bible study community, and Briks Collective, a Christian streetwear brand. She has worked with brands like Budweiser, Maggi, Tiger Beer, and Wakanow, and continues to inspire creativity, identity, and impact through her work.",
        icon: "pink"
    },
    {
        // name: "Arinze Victor",
        role: "Panelist",
        image: "/images/SPEAKERS/ARINZE VICTOR.png",
        bio: "Arinze Victor is a Nigerian tech educator, digital creator, and founder of ASKA, a company focused on building websites, web applications, and digital solutions for businesses. Through his content, he simplifies complex tech concepts into practical steps for beginners. With a growing community of over 150,000 followers, he shares insights on tech careers, AI tools, cybersecurity, and digital marketing. His mission is to help people discover opportunities in tech and build sustainable skills without feeling overwhelmed. Arinze also works with brands and leads workshops, webinars, and training sessions, helping individuals start and grow successful careers in the tech industry.",
        icon: "green"
    },
    {
        // name: "Raymond The Garage",
        role: "Panelist",
        image: "/images/SPEAKERS/RAYMOND THE GARAGE.png",
        bio: "Raymond is a strategist working at the intersection of technology, storytelling, and ecosystem development. He works in content marketing and operations at iorad, where he develops strategic content and thought leadership focused on software adoption and enablement. He is also a co-founder of The Garage, a platform supporting student innovation and entrepreneurship in Nigeria. Through this, he has helped lead hackathons, startup incubation programs, and regional initiatives. His work centers on building systems, programs, and narratives that help ideas grow, scale, and contribute to the development of stronger and more sustainable technology ecosystems across communities.",
        icon: "purple"
    },
    {
        // name: "Freedom Akujuobi",
        role: "Panelist",
        image: "/images/SPEAKERS/FREEDOM AKUJUOBI.png",
        bio: "Freedom Akujuobi is a creative director, videographer, and media entrepreneur passionate about capturing meaningful moments and building impactful visual narratives. He works at the intersection of storytelling and media production, helping individuals and brands bring their ideas to life through compelling content. He is the founder of TheMediaHouse.ng and Concept Art Photography, where he leads projects across weddings, commercial events, and creative productions. Beyond his work, Freedom is committed to mentoring emerging creatives, especially within faith-based communities. Through leadership, structure, and vision, he continues to build a media brand that inspires people, develops talent, and creates lasting cultural impact.",
        icon: "red"
    },
    {
        // name: "Sophia Egwuatu",
        role: "Panelist",
        image: "/images/SPEAKERS/SOPHIA EGWUATU.png",
        bio: "Sophia is a graduate of Law from the University of Nigeria, Enugu Campus, and a certified Social Project Manager and Design Thinker. She specializes in designing and implementing community-focused programs grounded in research and stakeholder engagement. She is the founder of Tomorrow’s Leaders Today Initiative, Rockflower Consults, and GreenPanda Agro, ventures focused on education, impact advisory, and agro-processing. As a business developer, she supports startups in building sustainable and impactful solutions. Sophia also leads The Hectic Tribe, a youth-focused community promoting growth and productivity. She is deeply committed to faith, purpose, and empowering young people to thrive.",
        icon: "pink"
    },
    {
        // name: "Jordan Ebong",
        role: "Panelist",
        image: "/images/SPEAKERS/JORDAN EBONG.png",
        bio: "Jordan Ebong is a Creative Director, speaker, and innovation strategist passionate about helping young Africans turn ideas into impactful realities. With a background in Architecture, he works at the intersection of design, storytelling, and strategy to build meaningful brand identities. He is the convener of LinkedIn Local UNEC, a conference that gathered over 500 young people, and the Co-Founder of Gloxa Innovative Solutions. He also leads El Yarden, a growing fashion brand. Through his work, Jordan empowers creators and entrepreneurs to think boldly, build intentionally, and shape the future of African creativity and innovation.",
        icon: "green"
    }
];

export default function SpeakersPage() {
    const [expandedIds, setExpandedIds] = useState<number[]>([]);

    const toggleBio = (index: number) => {
        setExpandedIds((prev) => 
            prev.includes(index) 
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="speakers-page-wrapper">
            <Navbar />

            <main className="speakers-page-main">
                {/* Hero Section */}
                <section className="speakers-page-hero">
                    <div className="speakers-page-hero-container">
                        <h1 className="speakers-page-hero-title">Speakers & Panelists</h1>
                        <p className="speakers-page-hero-subtitle">
                            The faces shaping this year&apos;s Creatorverse experience.<br />
                            Bold creators — industry pros and rising voices — bringing real stories, real lessons, and the spark your next big move needs.
                        </p>
                    </div>
                </section>

                {/* Speakers Grid Section */}
                <section className="speakers-page-grid-section">
                    {/* Decorative Background Elements */}
                    <Image src="/images/pink-squiggle.png" alt="Pink Decor" width={100} height={100} className="blob-bg blob-1" />
                    <Image src="/images/green-squiggle.png" alt="Green Decor" width={120} height={120} className="blob-bg blob-2" />
                    <Image src="/images/pink-squiggle.png" alt="Pink Decor" width={80} height={80} className="blob-bg blob-3" />
                    
                    <div className="speakers-page-grid-container">
                        <div className="speakers-page-grid">
                            {speakersData.map((speaker, i) => {
                                const isExpanded = expandedIds.includes(i);
                                
                                return (
                                    <div 
                                        key={i} 
                                        className={`speakers-card-container ${isExpanded ? 'expanded' : ''}`}
                                        onClick={() => toggleBio(i)}
                                    >
                                        <div className="speakers-card-inner">
                                            <div className="speakers-card-image-wrapper">
                                                <Image
                                                    src={speaker.image}
                                                    alt={speaker.name || "Speaker"}
                                                    fill
                                                    className="speakers-card-image"
                                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                                />
                                                
                                                {/* Top Right Icon */}
                                                <div className="speakers-card-icon">
                                                    {speaker.icon === 'pink' && <Image src="/images/newspink.png" alt="icon" width={24} height={24} />}
                                                    {speaker.icon === 'purple' && <Image src="/images/newspurple.png" alt="icon" width={24} height={24} />}
                                                    {speaker.icon === 'green' && <Image src="/images/greenstar.png" alt="icon" width={24} height={24} />}
                                                </div>
                                                
                                                {/* Name Overlay */}
                                                {speaker.name && (
                                                    <div className="speakers-card-name-overlay">
                                                        <span className="speakers-name">{speaker.name}</span>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="speakers-card-footer">
                                                <span className={`speakers-card-role role-${speaker.icon}`}>
                                                    {speaker.role}
                                                </span>
                                            </div>

                                            {/* Expandable Bio */}
                                            {isExpanded && (
                                                <div className="speakers-card-bio">
                                                    <p>{speaker.bio}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}
