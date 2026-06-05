import SEO from '../components/layout/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import ContactForm from '../components/ui/ContactForm';
import { openRoles, benefits } from '../data/careers';

export default function Careers() {
  return (
    <>
      <SEO title="Careers at SparkHive | Join Our Team" path="/careers" />
      <section className="pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Careers"
            title="Build Impact With Us"
            subtitle="Join a creative team where strategy meets storytelling—and every campaign matters."
          />
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <Reveal>
              <h3 className="font-display font-bold text-2xl mb-6">Our Culture</h3>
              <p className="text-navy/70 dark:text-cream/70 leading-relaxed mb-6">
                At SparkHive, we foster a calm, intelligent, and innovative environment. You&apos;ll work alongside seasoned strategists on brands that shape industries—from healthcare leaders to luxury disruptors.
              </p>
              <h4 className="font-semibold mb-4">Benefits</h4>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-navy/70 dark:text-cream/70">
                    <span className="text-primary mt-1">✓</span> {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card-premium">
                <h3 className="font-display font-bold text-xl mb-6">Apply Now</h3>
                <ContactForm type="career" showService={false} />
              </div>
            </Reveal>
          </div>
          <h3 className="font-display font-bold text-2xl mb-8 text-center">Open Roles</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {openRoles.map((role, i) => (
              <Reveal key={role.id} delay={i * 0.08}>
                <div className="card-premium">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-display font-bold text-lg">{role.title}</h4>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">{role.type}</span>
                  </div>
                  <p className="text-sm text-primary mb-2">{role.department} · {role.location}</p>
                  <p className="text-sm text-navy/60 dark:text-cream/60">{role.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
