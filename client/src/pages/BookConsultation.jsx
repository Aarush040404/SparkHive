import SEO from '../components/layout/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import ContactForm from '../components/ui/ContactForm';
import CalendlyEmbed from '../components/integrations/CalendlyEmbed';

export default function BookConsultation() {
  return (
    <>
      <SEO title="Book a Consultation | SparkHive" path="/book-consultation" />
      <section className="pt-32 section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Consultation"
            title="Book Your Strategy Session"
            subtitle="A complimentary discovery call to explore how SparkHive can accelerate your brand's impact."
          />
          <Reveal>
            <CalendlyEmbed />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-premium mt-12">
              <h3 className="font-display font-bold text-xl mb-2">Or send a request</h3>
              <p className="text-sm text-navy/60 dark:text-cream/60 mb-6">
                Prefer email? Fill out the form and we&apos;ll reach out within 24 hours.
              </p>
              <ul className="space-y-3 text-navy/70 dark:text-cream/70 mb-8 text-sm">
                <li className="flex gap-2"><span className="text-primary">✓</span> 30-minute strategy discovery</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Brand & channel audit overview</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Custom growth recommendations</li>
              </ul>
              <ContactForm type="consultation" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
