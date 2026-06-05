import { Link } from 'react-router-dom';
import SEO from '../components/layout/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { services } from '../data/services';

const icons = {
  Share2: '📱', Globe: '🌐', Palette: '🎨', Megaphone: '📢', Tv: '📺', Mic: '🎙️',
  PenLine: '✍️', HeartPulse: '💚', Users: '👥', Compass: '🧭', TrendingUp: '📈', Sparkles: '✨',
};

export default function Services() {
  return (
    <>
      <SEO title="Services | SparkHive Marketing Agency" path="/services" />
      <section className="pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Services"
            title="End-to-End Marketing Excellence"
            subtitle="Twelve specialized capabilities. One unified strategy for impact."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link to={`/services/${s.slug}`} className="group block card-premium h-full hover:border-primary/30">
                  <span className="text-3xl">{icons[s.icon]}</span>
                  <h3 className="font-display font-bold text-xl mt-4 mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-navy/60 dark:text-cream/60 flex-1">{s.description}</p>
                  <span className="inline-block mt-4 text-primary font-semibold text-sm">Explore →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
