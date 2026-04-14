import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import AtishaySection from "@/components/AtishaySection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import YojnayenSection from "@/components/YojnayenSection";
import DocumentsSection from "@/components/DocumentsSection";
import ShantidharaBooking from "@/components/ShantidharaBooking";
import DonationUPI from "@/components/DonationUPI";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <AtishaySection />
        <GallerySection />
        <EventsSection />
        <YojnayenSection />
        <DocumentsSection />
        <ShantidharaBooking />
        <DonationUPI />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
