import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/client';

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    api.adminGetBlogs().then(setBlogs).finally(() => setLoading(false));
  };

  useEffect(() => load(), []);

  const handleDelete = async (id, title) => {
    if (!confirm(`Delete "${title}"?`)) return;
    await api.adminDeleteBlog(id);
    load();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display font-bold text-3xl">Blog Posts</h1>
        <Link to="/admin/blogs/new" className="btn-primary text-sm">+ New Post</Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : blogs.length === 0 ? (
        <div className="card-premium text-center py-12">
          <p className="text-navy/60 mb-4">No posts in database. Run seed or create one.</p>
          <Link to="/admin/blogs/new" className="btn-primary inline-flex">Create First Post</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((b) => (
            <div key={b._id} className="card-premium flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold">{b.title}</p>
                <p className="text-sm text-navy/50">{b.category} · /blog/{b.slug}</p>
              </div>
              <div className="flex gap-2">
                <Link to={`/admin/blogs/edit/${b._id}`} className="btn-outline text-sm py-2 px-4">Edit</Link>
                <button type="button" onClick={() => handleDelete(b._id, b.title)} className="text-sm text-red-500 px-4 py-2 hover:bg-red-50 rounded-full">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
