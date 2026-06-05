import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Analytics from './components/integrations/Analytics';
import PublicLayout from './components/layout/PublicLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlogs from './pages/admin/AdminBlogs';
import BlogEditor from './pages/admin/BlogEditor';
import ScrollToTop from './components/layout/ScrollToTop';

export default function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Analytics />
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="blogs/new" element={<BlogEditor />} />
          <Route path="blogs/edit/:id" element={<BlogEditor />} />
        </Route>
        <Route path="/*" element={<PublicLayout />} />
      </Routes>
    </AuthProvider>
  );
}
