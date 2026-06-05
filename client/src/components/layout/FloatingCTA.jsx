import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
    >
      <a
        href="https://wa.me/919810494571"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-xl"
        aria-label="WhatsApp"
      >
        💬
      </a>
      <Link
        to="/book-consultation"
        className="btn-primary shadow-glow-gold text-sm py-3 px-5 animate-float"
      >
        Book Call
      </Link>
    </motion.div>
  );
}
