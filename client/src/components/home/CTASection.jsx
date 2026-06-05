import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

export default function CTASection() {
  return (
    <section className="section-padding">
      <Reveal>
        <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-navy via-navy to-primary-dark p-12 md:p-20 text-center text-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(244,197,66,0.3),transparent_50%)]" />
          <div className="relative z-10">
            <h2 className="heading-lg text-cream mb-4">Let&apos;s Create Impact Together</h2>
            <p className="text-cream/70 text-lg max-w-xl mx-auto mb-8">
              Ready to transform your brand? Book a consultation and discover what 23+ years of strategic creativity can do for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-consultation" className="btn-primary bg-gold text-navy hover:bg-gold/90 shadow-glow-gold">
                Book a Consultation
              </Link>
              <Link to="/contact" className="btn-outline border-cream/30 text-cream hover:border-gold hover:text-gold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
