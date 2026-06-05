import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCounter } from '../../hooks/useCounter';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const stats = [
  { end: 23, suffix: '+', label: 'Years of Excellence' },
  { end: 500, suffix: '+', label: 'Campaigns' },
  { end: 120, suffix: '+', label: 'Brands' },
  { end: 98, suffix: '%', label: 'Client Retention' },
];

function StatItem({ end, suffix, label }) {
  const { count, ref } = useCounter(end, 2200);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-3xl md:text-4xl text-gradient">
        {count}
        {suffix}
      </div>
      <p className="text-sm text-navy/60 dark:text-cream/60 mt-1">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-muted-green/40 via-cream to-primary/10 dark:from-navy dark:via-navy dark:to-primary/20" />
      <div className="absolute inset-0 opacity-40">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{ left: `${(i * 17) % 100}%`, top: `${(i * 23) % 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gold/20 blur-[80px]"
        animate={{ x: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-6"
        >
          We don&apos;t just create campaigns — We create Impact.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="heading-xl mb-6"
        >
          Marketing That Creates{' '}
          <br />
          <span className="text-gradient">Real Impact</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-navy/70 dark:text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We help brands grow through strategic storytelling, social media marketing, branding, PR, and digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link to="/book-consultation" className="btn-primary">
            Book a Consultation
          </Link>
          <Link to="/case-studies" className="btn-outline">
            View Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto glass rounded-3xl p-8 shadow-glass"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
        <motion.a
          href="https://linkedin.com/company/sparkhive"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, x: -4 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-[#0077B5] transition-colors shadow-glow hover:shadow-[0_0_20px_rgba(0,119,181,0.4)]"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </motion.a>
        <motion.a
          href="https://facebook.com/sparkhive"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, x: -4 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-[#1877F2] transition-colors shadow-glow hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]"
          aria-label="Facebook"
        >
          <FaFacebook size={20} />
        </motion.a>
        <motion.a
          href="https://instagram.com/sparkhive"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, x: -4 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-[#E4405F] transition-colors shadow-glow hover:shadow-[0_0_20px_rgba(228,64,95,0.4)]"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </motion.a>
        <motion.a
          href="https://youtube.com/@sparkhive"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, x: -4 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:text-[#FF0000] transition-colors shadow-glow hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]"
          aria-label="YouTube"
        >
          <FaYoutube size={20} />
        </motion.a>
      </div>
    </section>
  );
}
