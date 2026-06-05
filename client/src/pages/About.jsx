import { Link } from 'react-router-dom';
import SEO from '../components/layout/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import CTASection from '../components/home/CTASection';

const values = [
  { title: 'Impact First', desc: 'Every campaign must move people and metrics.' },
  { title: 'Integrity', desc: 'Transparent partnerships built on trust.' },
  { title: 'Innovation', desc: 'Modern tools, timeless storytelling.' },
  { title: 'Excellence', desc: 'Premium execution in every detail.' },
];

export default function About() {
  return (
    <>
      <SEO title="About SparkHive | 23+ Years of Marketing Impact" path="/about" />
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="About SparkHive"
            title="We Don't Just Create Campaigns — We Create Impact"
            subtitle="For over two decades, SparkHive has helped brands tell stories that resonate, convert, and endure."
          />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <h3 className="font-display font-bold text-2xl mb-4">Our Mission</h3>
              <p className="text-navy/70 dark:text-cream/70 leading-relaxed mb-8">
                To empower brands with strategic creativity that drives measurable growth—through social media, branding, PR, digital experiences, and content that connects emotionally and performs commercially.
              </p>
              <h3 className="font-display font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-navy/70 dark:text-cream/70 leading-relaxed mb-8">
                To be the most trusted creative marketing partner for ambitious brands across healthcare, luxury, technology, and consumer sectors—known for impact, integrity, and innovation.
              </p>
              <h3 className="font-display font-bold text-2xl mb-4">Leadership Philosophy</h3>
              <p className="text-navy/70 dark:text-cream/70 leading-relaxed">
                Under founder Harleen Gambhir, we lead with empathy and strategy—treating every client relationship as a long-term partnership, not a transaction.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="card-premium">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                  alt="Harleen Gambhir"
                  className="w-full aspect-square object-cover rounded-2xl mb-6"
                  loading="lazy"
                />
                <h3 className="font-display font-bold text-2xl">Harleen Gambhir</h3>
                <p className="text-primary font-medium mb-4">Founder & CEO</p>
                <blockquote className="italic text-navy/80 dark:text-cream/80 border-l-4 border-gold pl-4">
                  &ldquo;Marketing is not noise—it is the architecture of how the world understands your brand. Build it with intention.&rdquo;
                </blockquote>
              </div>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card-premium text-center">
                  <h4 className="font-display font-bold text-lg mb-2">{v.title}</h4>
                  <p className="text-sm text-navy/60 dark:text-cream/60">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <Link to="/book-consultation" className="btn-primary">Work With Us</Link>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
