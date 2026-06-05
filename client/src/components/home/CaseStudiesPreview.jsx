import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/client';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function CaseStudiesPreview() {
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    api.getCaseStudies().then(setStudies).catch(() => setStudies([]));
  }, []);

  const preview = studies.filter((s) => s.featured).slice(0, 3);
  if (!preview.length) return null;

  return (
    <section className="section-padding bg-white/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Work"
          title="Case Studies That Prove Impact"
          subtitle="Elite campaigns with measurable before-and-after results."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {preview.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.1}>
              <Link to={`/case-studies/${s.slug}`} className="group block card-premium p-0 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{s.category}</span>
                  <h3 className="font-display font-bold text-xl mt-2 mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-navy/60 dark:text-cream/60 line-clamp-2">{s.excerpt}</p>
                  {s.metrics?.growth && (
                    <p className="mt-3 text-primary font-bold">{s.metrics.growth} growth</p>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-12">
          <Link to="/case-studies" className="btn-outline">View All Case Studies</Link>
        </Reveal>
      </div>
    </section>
  );
}
