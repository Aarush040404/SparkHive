import SEO from '../components/layout/SEO';
import Hero from '../components/home/Hero';
import { useGsapParallax } from '../hooks/useGsapParallax';
import ServicesPreview from '../components/home/ServicesPreview';
import AboutPreview from '../components/home/AboutPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import CTASection from '../components/home/CTASection';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import BlogPreview from '../components/home/BlogPreview';

export default function Home() {
  useGsapParallax();

  return (
    <>
      <SEO />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <CaseStudiesPreview />
      <TestimonialsPreview />
      <BlogPreview />
      <CTASection />
    </>
  );
}
