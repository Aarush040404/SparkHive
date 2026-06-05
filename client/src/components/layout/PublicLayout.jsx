import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import LoadingScreen from './LoadingScreen';
import PageTransition from './PageTransition';
import { useLenis } from '../../hooks/useLenis';
import { useCursorGlow } from '../../hooks/useCursorGlow';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Services from '../../pages/Services';
import ServiceDetail from '../../pages/ServiceDetail';
import CaseStudies from '../../pages/CaseStudies';
import CaseStudyDetail from '../../pages/CaseStudyDetail';
import Blog from '../../pages/Blog';
import BlogPost from '../../pages/BlogPost';
import Testimonials from '../../pages/Testimonials';
import Careers from '../../pages/Careers';
import Contact from '../../pages/Contact';
import BookConsultation from '../../pages/BookConsultation';
import Privacy from '../../pages/Privacy';
import Terms from '../../pages/Terms';
import { useEffect } from 'react';

export default function PublicLayout() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
useEffect(() => {
  window.scrollTo(0, 0);
  console.log('PATH CHANGED:', location.pathname);
}, [location.pathname]);
  useLenis();
  useCursorGlow();

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen onComplete={() => setLoading(false)} />}</AnimatePresence>
      {!loading && (
        <div className="min-h-screen flex flex-col dark:bg-navy dark:text-cream">
          <Navbar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:slug" element={<ServiceDetail />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/book-consultation" element={<BookConsultation />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                </Routes>
              </PageTransition>
            </AnimatePresence>
          </main>
          <Footer />
          <FloatingCTA />
        </div>
      )}
    </>
  );
}
