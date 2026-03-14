import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import HighlightsSection from "@/components/HighlightsSection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import DonationSection from "@/components/DonationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <HighlightsSection />
        <GallerySection />
        <EventsSection />
        <DonationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
