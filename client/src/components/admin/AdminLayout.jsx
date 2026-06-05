import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AdminLayout() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-navy flex">
      <aside className="w-64 bg-navy text-cream p-6 flex flex-col shrink-0">
        <Link to="/" className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold">S</div>
          <span className="font-display font-bold">SparkHive CMS</span>
        </Link>
        <nav className="flex flex-col gap-2 flex-1">
          <Link to="/admin" className="px-4 py-2.5 rounded-xl hover:bg-white/10 transition text-sm font-medium">
            Dashboard
          </Link>
          <Link to="/admin/blogs" className="px-4 py-2.5 rounded-xl hover:bg-white/10 transition text-sm font-medium">
            Blog Posts
          </Link>
          <Link to="/admin/blogs/new" className="px-4 py-2.5 rounded-xl hover:bg-white/10 transition text-sm font-medium text-primary">
            + New Post
          </Link>
          <Link to="/" className="px-4 py-2.5 rounded-xl hover:bg-white/10 transition text-sm text-cream/60 mt-4">
            ← View Website
          </Link>
        </nav>
        <div className="pt-6 border-t border-cream/10">
          <p className="text-xs text-cream/50 mb-2">{admin?.email}</p>
          <button type="button" onClick={handleLogout} className="text-sm text-gold hover:underline">
            Sign out
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
