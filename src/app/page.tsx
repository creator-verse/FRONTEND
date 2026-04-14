import Hero from "@/components/Hero";
import SponsorCarousel from "@/components/SponsorCarousel";
import WhyCreatorverse from "@/components/WhyCreatorverse";
import WhoIsCreatorverse from "@/components/WhoIsCreatorverse";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Tickets from "@/components/Tickets";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SponsorCarousel />
      <WhyCreatorverse />
      <WhoIsCreatorverse />
      <Speakers />
      <Schedule />
      <Tickets />
      <Team />
      <FAQ />
      <Blog />
      <Newsletter />
      <Footer />
    </main>
  );
}
