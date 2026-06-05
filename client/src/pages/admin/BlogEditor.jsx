import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../api/client';

const empty = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  category: 'Marketing Tips',
  image: '',
  featured: false,
  trending: false,
  readTime: 5,
  author: { name: 'SparkHive Team', role: 'Marketing Strategists' },
};

const categories = [
  'Marketing Tips', 'Branding Psychology', 'Social Media Growth',
  'Healthcare Marketing', 'PR Strategies', 'Podcast Marketing', 'Storytelling', 'Digital Trends',
];

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEdit) return;
    api.adminGetBlogs().then((blogs) => {
      const post = blogs.find((b) => b._id === id);
      if (post) setForm({ ...empty, ...post, author: post.author || empty.author });
    });
  }, [id, isEdit]);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const { url } = await api.uploadImage(file);
      update('image', url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const payload = {
        ...form,
        readTime: Number(form.readTime),
      };
      if (isEdit) await api.adminUpdateBlog(id, payload);
      else await api.adminCreateBlog(payload);
      navigate('/admin/blogs');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-navy/10 dark:border-white/10 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/40';

  return (
    <div className="max-w-3xl">
      <h1 className="font-display font-bold text-3xl mb-8">{isEdit ? 'Edit Post' : 'New Blog Post'}</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input className={inputClass} placeholder="Title *" required value={form.title} onChange={(e) => update('title', e.target.value)} />
        <input className={inputClass} placeholder="Slug (auto-generated if empty)" value={form.slug} onChange={(e) => update('slug', e.target.value)} />
        <textarea className={`${inputClass} min-h-[80px]`} placeholder="Excerpt *" required value={form.excerpt} onChange={(e) => update('excerpt', e.target.value)} />
        <textarea className={`${inputClass} min-h-[200px] font-mono text-sm`} placeholder="HTML content *" required value={form.content} onChange={(e) => update('content', e.target.value)} />
        <select className={inputClass} value={form.category} onChange={(e) => update('category', e.target.value)}>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <div className="flex gap-4 items-end">
          <input className={`${inputClass} flex-1`} placeholder="Image URL" value={form.image} onChange={(e) => update('image', e.target.value)} />
          <label className="btn-outline text-sm py-3 px-4 cursor-pointer shrink-0">
            {uploading ? 'Uploading...' : 'Upload'}
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>
        {form.image && <img src={form.image} alt="" className="rounded-xl max-h-40 object-cover" />}
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.featured} onChange={(e) => update('featured', e.target.checked)} />
            Featured
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.trending} onChange={(e) => update('trending', e.target.checked)} />
            Trending
          </label>
          <input type="number" className={`${inputClass} w-24`} value={form.readTime} onChange={(e) => update('readTime', e.target.value)} min={1} />
          <span className="text-sm self-center">min read</span>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex gap-4">
          <button type="submit" disabled={saving} className="btn-primary">{saving ? 'Saving...' : 'Save Post'}</button>
          <button type="button" onClick={() => navigate('/admin/blogs')} className="btn-outline">Cancel</button>
        </div>
      </form>
    </div>
  );
}
