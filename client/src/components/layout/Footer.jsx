import { Link } from 'react-router-dom';

const footerLinks = {
  Company: [
    { to: '/about', label: 'About' },
    { to: '/careers', label: 'Careers' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ],
  Services: [
    { to: '/services', label: 'All Services' },
    { to: '/services/healthcare-marketing', label: 'Healthcare' },
    { to: '/services/branding-solutions', label: 'Branding' },
    { to: '/services/public-relations', label: 'PR' },
  ],
  Resources: [
    { to: '/blog', label: 'Blog' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/book-consultation', label: 'Book Consultation' },
  ],
  Legal: [
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms of Service' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-cream section-padding pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-display font-bold">S</span>
              </div>
              <span className="font-display font-bold text-xl">SparkHive</span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              We don&apos;t just create campaigns — We create Impact.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-gold">{title}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-cream/60 hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-cream/50">
          <p>© {new Date().getFullYear()} SparkHive. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="tel:9810494571" className="hover:text-primary transition-colors">9810494571</a>
            <a href="mailto:sparkhive14@gmail.com" className="hover:text-primary transition-colors">
              sparkhive14@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
