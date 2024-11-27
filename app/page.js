import Header from "./components/Header"
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import HeroSection from "./components/HeroSection";
import AutoCarousel from "./components/AutoCarousel";
import OuraStrenghts from "./components/OurStrengths";
import TestimonialSlider from "./components/TestimonialSlider";
import CaseStudiesSection from "./components/CaseStudiesSection";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <HeroSection />
      <AutoCarousel />
      <TestimonialSlider />
      <OuraStrenghts />
      <CaseStudiesSection />
      <Footer />

    </div>
  );

}

export default MyApp;
