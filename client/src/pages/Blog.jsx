import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/layout/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { api } from '../api/client';

const categories = [
  'All', 'Branding Psychology', 'Social Media Growth', 'Healthcare Marketing',
  'PR Strategies', 'Podcast Marketing', 'Storytelling', 'Digital Trends',
];

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subMsg, setSubMsg] = useState('');

  useEffect(() => {
    const params = {};
    if (category !== 'All') params.category = category;
    if (search) params.search = search;
    api.getBlogs(params).then(setBlogs).catch(() => setBlogs([]));
  }, [category, search]);

  const featured = blogs.find((b) => b.featured) || blogs[0];
  const trending = blogs.filter((b) => b.trending).slice(0, 3);

  const handleNewsletter = async (e) => {
    e.preventDefault();
    try {
      const res = await api.subscribeNewsletter(email);
      setSubMsg(res.message);
      setEmail('');
    } catch (err) {
      setSubMsg(err.message);
    }
  };

  return (
    <>
      <SEO title="Blog & Insights | SparkHive" path="/blog" />
      <section className="pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Blog"
            title="Marketing Intelligence & Creative Insights"
            subtitle="Strategies for growth-minded brand leaders."
          />
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <input
              type="search"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-5 py-3 rounded-2xl glass focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap ${
                    category === c ? 'bg-primary text-white' : 'glass'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {featured && (
            <Reveal className="mb-16">
              <Link to={`/blog/${featured.slug}`} className="grid lg:grid-cols-2 gap-8 card-premium p-0 overflow-hidden group">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-primary text-xs font-bold uppercase">Featured</span>
                  <h2 className="font-display font-bold text-2xl md:text-3xl mt-2 mb-3">{featured.title}</h2>
                  <p className="text-navy/60 dark:text-cream/60 mb-4">{featured.excerpt}</p>
                  <p className="text-sm text-navy/40">{featured.readTime} min read · {featured.author?.name}</p>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-8">
              {blogs.map((b, i) => (
                <Reveal key={b.slug} delay={(i % 2) * 0.08}>
                  <Link to={`/blog/${b.slug}`} className="group block">
                    <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                      <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    </div>
                    <span className="text-xs text-primary font-semibold">{b.category}</span>
                    <h3 className="font-display font-bold text-lg mt-1 group-hover:text-primary transition-colors">{b.title}</h3>
                    <p className="text-sm text-navy/60 mt-2 line-clamp-2">{b.excerpt}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
            <aside className="space-y-8">
              {trending.length > 0 && (
                <div className="card-premium">
                  <h3 className="font-display font-bold mb-4">Trending</h3>
                  <ul className="space-y-4">
                    {trending.map((b) => (
                      <li key={b.slug}>
                        <Link to={`/blog/${b.slug}`} className="text-sm hover:text-primary transition-colors font-medium">
                          {b.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="card-premium bg-gradient-to-br from-primary/10 to-gold/10">
                <h3 className="font-display font-bold mb-2">Newsletter</h3>
                <p className="text-sm text-navy/60 dark:text-cream/60 mb-4">Weekly insights for brand builders.</p>
                <form onSubmit={handleNewsletter} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl glass text-sm"
                  />
                  <button type="submit" className="btn-primary w-full text-sm py-2.5">Subscribe</button>
                </form>
                {subMsg && <p className="text-xs text-primary mt-2">{subMsg}</p>}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
