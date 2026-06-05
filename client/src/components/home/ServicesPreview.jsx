import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const icons = {
  Share2: '📱', Globe: '🌐', Palette: '🎨', Megaphone: '📢', Tv: '📺', Mic: '🎙️',
  PenLine: '✍️', HeartPulse: '💚', Users: '👥', Compass: '🧭', TrendingUp: '📈', Sparkles: '✨',
};

export default function ServicesPreview() {
  const preview = services.slice(0, 6);
  return (
    <section className="section-padding bg-white/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="What We Do"
          title="Premium Services for Modern Brands"
          subtitle="Strategic creativity across every channel that matters."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group card-premium relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/0 via-primary/30 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <span className="text-3xl mb-4 block">{icons[s.icon] || '✦'}</span>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-navy/60 dark:text-cream/60 text-sm leading-relaxed mb-4">{s.description}</p>
                <Link to={`/services/${s.slug}`} className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more →
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-12">
          <Link to="/services" className="btn-outline">View All Services</Link>
        </Reveal>
      </div>
    </section>
  );
}
