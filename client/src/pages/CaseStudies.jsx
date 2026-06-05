import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/layout/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { api } from '../api/client';

const categories = ['All', 'Healthcare', 'Branding', 'PR', 'Social Media', 'Web Design', 'Podcasts'];

export default function CaseStudies() {
  const [studies, setStudies] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const params = filter !== 'All' ? { category: filter } : {};
    api.getCaseStudies(params).then(setStudies).catch(() => setStudies([]));
  }, [filter]);

  return (
    <>
      <SEO title="Case Studies & Portfolio | SparkHive" path="/case-studies" />
      <section className="pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Portfolio"
            title="Work That Speaks in Results"
            subtitle="Filter by category to explore campaigns across industries."
          />
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === c ? 'bg-primary text-white' : 'glass hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studies.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link to={`/case-studies/${s.slug}`} className="group block card-premium p-0 overflow-hidden">
                  <div className="aspect-video overflow-hidden relative">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-semibold">{s.category}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-navy/50 mb-1">{s.client}</p>
                    <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                    <p className="text-sm text-navy/60 dark:text-cream/60 line-clamp-2">{s.excerpt}</p>
                    {s.metrics?.growth && <p className="mt-3 text-primary font-bold text-sm">{s.metrics.growth}</p>}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
