import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ParallaxImageBand from "@/components/ParallaxImageBand";
import AtishaySection from "@/components/AtishaySection";
import ImageMarquee from "@/components/ImageMarquee";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import YojnayenSection from "@/components/YojnayenSection";
import SacredQuoteBand from "@/components/SacredQuoteBand";
import DocumentsSection from "@/components/DocumentsSection";
import ShantidharaBooking from "@/components/ShantidharaBooking";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { IMAGE_MARQUEE_ITEMS } from "@/constants/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ParallaxImageBand
          imageSrc="/images/atishay-deity.jpg"
          overlayText="अतिशय क्षेत्र"
          overlaySubtext="A Sacred Pilgrimage Destination"
        />
        <AtishaySection />
        <ImageMarquee images={IMAGE_MARQUEE_ITEMS} />
        <GallerySection />
        <ParallaxImageBand
          imageSrc="/images/hero-2.jpg"
        />
        <EventsSection />
        <YojnayenSection />
        <SacredQuoteBand
          quoteIndex={0}
          backgroundImage="/images/gallery-5.jpg"
        />
        <DocumentsSection />
        <ShantidharaBooking />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
