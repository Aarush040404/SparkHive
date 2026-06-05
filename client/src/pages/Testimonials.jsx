import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/layout/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import { testimonials } from '../data/testimonials';
import CTASection from '../components/home/CTASection';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <>
      <SEO title="Client Testimonials | SparkHive" path="/testimonials" />
      <section className="pt-32 section-padding min-h-[70vh]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            subtitle="98% client retention. Partnerships built on trust and measurable impact."
          />
          <div className="max-w-4xl mx-auto mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="glass rounded-3xl p-12 md:p-16 text-center shadow-glass"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-primary/20">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <p className="text-2xl md:text-3xl leading-relaxed mb-8 font-light">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-display font-bold text-xl">{t.author}</p>
                <p className="text-navy/60 dark:text-cream/60">{t.role}</p>
                <div className="mt-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto font-bold text-primary">
                  {t.logo}
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-10 bg-primary' : 'w-2 bg-navy/20'}`}
                />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.id} className="card-premium">
                <p className="text-sm italic mb-4 line-clamp-4">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={item.image} alt="" className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="font-semibold text-sm">{item.author}</p>
                    <p className="text-xs text-navy/50">{item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[1, 2].map((v) => (
              <div key={v} className="aspect-video rounded-3xl glass flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 text-2xl">▶</div>
                  <p className="text-sm text-navy/60">Video testimonial placeholder</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
