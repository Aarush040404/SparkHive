import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/layout/SEO';
import Reveal from '../components/ui/Reveal';
import { api } from '../api/client';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.getBlog(slug).then(setPost).catch(() => setPost(null));
  }, [slug]);

  if (!post) return <div className="pt-32 section-padding text-center">Loading...</div>;

  return (
    <>
      <SEO
        title={post.seo?.title || `${post.title} | SparkHive Blog`}
        description={post.seo?.description || post.excerpt}
        path={`/blog/${slug}`}
        type="article"
      />
      <article className="pt-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-16">
          <Reveal>
            <Link to="/blog" className="text-primary text-sm font-medium">← Back to Blog</Link>
            <span className="block text-primary text-sm font-semibold mt-6 uppercase">{post.category}</span>
            <h1 className="heading-lg mt-2 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-navy/50">
              <span>{post.author?.name}</span>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>
          </Reveal>
        </div>
        <div className="aspect-[21/9] max-h-[420px] overflow-hidden mb-12">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 section-padding pt-0">
          <Reveal>
            <div
              className="prose prose-lg dark:prose-invert max-w-none text-navy/80 dark:text-cream/80 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:mt-8 [&_ul]:list-disc [&_ul]:pl-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Reveal>
          {post.related?.length > 0 && (
            <div className="mt-20 pt-12 border-t border-navy/10">
              <h3 className="font-display font-bold text-2xl mb-8">Related Articles</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {post.related.map((r) => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="group">
                    <img src={r.image} alt={r.title} className="rounded-xl aspect-video object-cover mb-3 group-hover:scale-105 transition-transform" loading="lazy" />
                    <h4 className="font-semibold text-sm group-hover:text-primary">{r.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
