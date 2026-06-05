import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';

export default function TestimonialsPreview() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Client Love"
          title="Trusted by Brands That Lead"
          subtitle="Real results. Real relationships. 98% client retention."
        />
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="glass rounded-3xl p-10 md:p-14 text-center shadow-glass relative"
            >
              <div className="text-5xl text-primary/30 font-serif mb-4">&ldquo;</div>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">{t.quote}</p>
              <div className="flex items-center justify-center gap-4">
                <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30" loading="lazy" />
                <div className="text-left">
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-navy/60 dark:text-cream/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${i === index ? 'bg-primary w-8' : 'bg-navy/20'}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials" className="btn-outline">All Testimonials</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
