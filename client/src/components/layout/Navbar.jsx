import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

import logo from '../../assets/newlogo.jpeg';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Work' },
  { to: '/blog', label: 'Blog' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-glass py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-3 group">

          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-glow group-hover:scale-105 transition-transform">
            <img
              src={logo}
              alt="SparkHive Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="font-display font-bold text-xl tracking-tight">
            SparkHive
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? 'text-primary'
                    : 'text-navy/70 dark:text-cream/70'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg hover:scale-105 transition-transform"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <Link
            to="/book-consultation"
            className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5"
          >
            Book Consultation
          </Link>

          <button
            type="button"
            className="lg:hidden w-10 h-10 rounded-full glass flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className={`w-5 h-0.5 bg-current transition ${
                open ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-current transition ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-current transition ${
                open ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/20 mt-3 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium py-2"
                >
                  {l.label}
                </NavLink>
              ))}

              <Link
                to="/book-consultation"
                onClick={() => setOpen(false)}
                className="btn-primary text-center mt-2"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}