import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AutoCarousel from "./components/AutoCarousel";
import OuraStrenghts from "./components/OurStrengths";
import TestimonialSlider from "./components/TestimonialSlider";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <HeroSection />
      <AutoCarousel />
      <TestimonialSlider />
      <BlogSection />
      <OuraStrenghts />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default MyApp;
