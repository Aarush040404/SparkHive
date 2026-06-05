import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const timeline = [
  { year: '2002', title: 'Founded', desc: 'SparkHive begins with a vision for impact-driven marketing.' },
  { year: '2010', title: 'Healthcare Focus', desc: 'Specialized expertise in compliant healthcare campaigns.' },
  { year: '2018', title: 'Global Reach', desc: '120+ brands across industries trust our strategic creativity.' },
  { year: 'Today', title: 'Impact Era', desc: '23+ years of ideas, influence & innovation—and counting.' },
];

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            align="left"
            label="Our Story"
            title="23+ Years of Ideas, Influence & Innovation"
            subtitle="SparkHive was built on a simple belief: marketing should move people and metrics equally."
          />
          <Reveal>
            <p className="text-navy/70 dark:text-cream/70 leading-relaxed mb-6">
              Led by founder <strong>Harleen Gambhir</strong>, we combine strategic rigor with creative excellence—helping brands from healthcare to luxury find their voice and scale their impact.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-navy/80 dark:text-cream/80 mb-8">
              &ldquo;Every brand has a story worth telling. Our job is to make sure the world hears yours.&rdquo;
              <footer className="mt-3 not-italic text-sm font-semibold text-primary">— Harleen Gambhir, Founder</footer>
            </blockquote>
          </Reveal>
          <Link to="/about" className="btn-primary">Discover Our Story</Link>
        </div>
        <div className="relative">
          <Reveal>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-glow" data-parallax>
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                alt="Harleen Gambhir - Founder"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 max-w-xs shadow-glass">
              <p className="font-display font-bold text-2xl text-gradient">Harleen Gambhir</p>
              <p className="text-sm text-navy/60 dark:text-cream/60">Founder & CEO, SparkHive</p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {timeline.map((t, i) => (
          <Reveal key={t.year} delay={i * 0.1}>
            <div className="card-premium text-center">
              <span className="text-primary font-display font-bold text-2xl">{t.year}</span>
              <h4 className="font-semibold mt-2">{t.title}</h4>
              <p className="text-sm text-navy/60 dark:text-cream/60 mt-1">{t.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
