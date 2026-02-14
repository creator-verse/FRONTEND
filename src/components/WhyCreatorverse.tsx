import Image from 'next/image';
import '../app/sections.css';



export default function WhyCreatorverse() {
    return (
        <section className="why-section" id="why">
            <div className="why-container">
                {/* Top Row: Title first, then Description */}
                <div className="why-top-row">
                    <div className="why-top-heading">
                        Shaping The Future Of<br />The Creator Economy
                    </div>
                    <div className="why-description-text">
                        <p>
                            Creatorverse is a community for writers, designers, editors, and creators of all niches starting off with Enugu, Southeast Nigeria, with a goal of reaching the world.
                        </p>
                        <p>
                            Our pioneer event, is the perfect place to create, connect, and elevate in the years ahead! If you&apos;re tired of creating alone, passionate for communal growth, this is the home for you.
                        </p>
                    </div>
                </div>

                {/* Green Squiggle */}
                <div className="why-squiggle-wrapper">
                    <Image
                        src="/images/green-squiggle.png"
                        alt="Decorative Green Squiggle"
                        width={919}
                        height={258}
                        className="why-squiggle"
                    />
                </div>

                {/* Bottom Heading */}
                <h2 className="why-main-heading">Why Creatorverse</h2>
            </div>
        </section>
    );
}
