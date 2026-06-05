import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/client';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ blogs: 0, contacts: 0 });
  const [recentContacts, setRecentContacts] = useState([]);

  useEffect(() => {
    Promise.all([
      api.adminGetBlogs().catch(() => []),
      api.adminGetContacts().catch(() => []),
    ]).then(([blogs, contacts]) => {
      setStats({ blogs: blogs.length, contacts: contacts.length });
      setRecentContacts(contacts.slice(0, 5));
    });
  }, []);

  return (
    <div>
      <h1 className="font-display font-bold text-3xl mb-2">Dashboard</h1>
      <p className="text-navy/60 dark:text-cream/60 mb-10">Manage SparkHive content and leads.</p>

      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        <div className="card-premium">
          <p className="text-sm text-navy/50">Blog Posts</p>
          <p className="font-display font-bold text-4xl text-primary mt-1">{stats.blogs}</p>
        </div>
        <div className="card-premium">
          <p className="text-sm text-navy/50">Form Submissions</p>
          <p className="font-display font-bold text-4xl text-primary mt-1">{stats.contacts}</p>
        </div>
        <Link to="/admin/blogs/new" className="card-premium flex items-center justify-center bg-primary/10 hover:bg-primary/20 transition border-primary/20">
          <span className="font-semibold text-primary">+ Create New Post</span>
        </Link>
      </div>

      <div className="card-premium">
        <h2 className="font-display font-bold text-xl mb-4">Recent Leads</h2>
        {recentContacts.length === 0 ? (
          <p className="text-sm text-navy/50">No submissions yet. Requires MongoDB connection.</p>
        ) : (
          <ul className="space-y-4">
            {recentContacts.map((c) => (
              <li key={c._id} className="flex justify-between items-start border-b border-navy/5 pb-3 last:border-0">
                <div>
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-navy/50">{c.email} · {c.type}</p>
                  <p className="text-sm text-navy/60 mt-1 line-clamp-1">{c.message}</p>
                </div>
                <span className="text-xs text-navy/40 whitespace-nowrap">
                  {new Date(c.createdAt).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
