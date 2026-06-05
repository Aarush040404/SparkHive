import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/client';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function BlogPreview() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.getBlogs({ limit: 3 }).then(setBlogs).catch(() => setBlogs([]));
  }, []);

  if (!blogs.length) return null;

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Insights"
          title="From the SparkHive Blog"
          subtitle="Marketing intelligence for modern brand builders."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.1}>
              <Link to={`/blog/${b.slug}`} className="group block">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 relative">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xs text-primary font-semibold">{b.category}</span>
                <h3 className="font-display font-bold text-lg mt-1 group-hover:text-primary transition-colors">{b.title}</h3>
                <p className="text-sm text-navy/60 dark:text-cream/60 mt-2 line-clamp-2">{b.excerpt}</p>
                <p className="text-xs text-navy/40 mt-3">{b.readTime} min read</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-12">
          <Link to="/blog" className="btn-outline">Read the Blog</Link>
        </Reveal>
      </div>
    </section>
  );
}
