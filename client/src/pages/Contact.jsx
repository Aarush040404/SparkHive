import SEO from '../components/layout/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import ContactForm from '../components/ui/ContactForm';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <SEO title="Contact SparkHive | Let's Create Impact" path="/contact" />
      <section className="pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Contact"
            title="Let's Create Impact Together"
            subtitle="Tell us about your brand. We'll respond within 24 hours."
          />
          <div className="grid lg:grid-cols-2 gap-16">
            <Reveal>
              <div className="card-premium">
                <ContactForm type="contact" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-8">
                <div className="card-premium">
                  <h3 className="font-display font-bold text-lg mb-4">Get in Touch</h3>
                  <a href="tel:9810494571" className="block text-lg font-semibold hover:text-primary transition mb-2">📞 9810494571</a>
                  <a href="mailto:sparkhive14@gmail.com" className="block text-lg font-semibold hover:text-primary transition mb-4">✉️ sparkhive14@gmail.com</a>
                  <a
                    href="https://wa.me/919810494571"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex bg-[#25D366] hover:bg-[#20bd5a]"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="rounded-3xl overflow-hidden h-64 lg:h-80 shadow-glass">
                  <iframe
                    title="SparkHive Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.2!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/company/sparkhive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-[#0077B5] hover:scale-110 transition-all duration-300 shadow-glow hover:shadow-[0_0_20px_rgba(0,119,181,0.4)]"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={22} />
                  </a>
                  <a
                    href="https://instagram.com/sparkhive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-[#E4405F] hover:scale-110 transition-all duration-300 shadow-glow hover:shadow-[0_0_20px_rgba(228,64,95,0.4)]"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={22} />
                  </a>
                  <a
                    href="https://facebook.com/sparkhive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-[#1877F2] hover:scale-110 transition-all duration-300 shadow-glow hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={22} />
                  </a>
                  <a
                    href="https://youtube.com/@sparkhive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-[#FF0000] hover:scale-110 transition-all duration-300 shadow-glow hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={22} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
