import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/layout/SEO';
import Reveal from '../components/ui/Reveal';
import { api } from '../api/client';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [study, setStudy] = useState(null);

  useEffect(() => {
    api.getCaseStudy(slug).then(setStudy).catch(() => setStudy(null));
  }, [slug]);

  if (!study) {
    return <div className="pt-32 section-padding text-center">Loading...</div>;
  }

  const sections = [
    { title: 'Challenge', content: study.challenge },
    { title: 'Strategy', content: study.strategy },
    { title: 'Execution', content: study.execution },
    { title: 'Results', content: study.results },
  ];

  return (
    <>
      <SEO title={`${study.title} | SparkHive Case Study`} path={`/case-studies/${slug}`} />
      <article className="pt-32">
        <div className="aspect-[21/9] max-h-[480px] overflow-hidden">
          <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
        </div>
        <div className="section-padding max-w-4xl mx-auto">
          <Reveal>
            <span className="text-primary font-semibold text-sm uppercase">{study.category}</span>
            <h1 className="heading-lg mt-2 mb-4">{study.title}</h1>
            <p className="text-xl text-navy/70 dark:text-cream/70">{study.excerpt}</p>
          </Reveal>
          {study.metrics && (
            <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
              {Object.entries(study.metrics).map(([k, v]) => (
                <div key={k} className="card-premium text-center">
                  <p className="text-xs uppercase text-navy/50 mb-1">{k}</p>
                  <p className="font-display font-bold text-lg text-primary">{v}</p>
                </div>
              ))}
            </Reveal>
          )}
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="mb-10">
              <h2 className="font-display font-bold text-2xl mb-3">{s.title}</h2>
              <p className="text-navy/70 dark:text-cream/70 leading-relaxed">{s.content}</p>
            </Reveal>
          ))}
          {study.testimonial?.quote && (
            <Reveal>
              <blockquote className="glass rounded-3xl p-8 mt-12 border-l-4 border-primary">
                <p className="text-lg italic mb-4">&ldquo;{study.testimonial.quote}&rdquo;</p>
                <footer className="font-semibold">{study.testimonial.author} — {study.testimonial.role}</footer>
              </blockquote>
            </Reveal>
          )}
          <Link to="/case-studies" className="btn-outline mt-12 inline-flex">← All Case Studies</Link>
        </div>
      </article>
    </>
  );
}
