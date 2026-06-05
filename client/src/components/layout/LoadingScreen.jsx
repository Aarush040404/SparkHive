import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(t);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + 4;
      });
    }, 40);
    return () => clearInterval(t);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-navy"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-white font-display font-bold text-lg">S</span>
        </div>
        <span className="font-display font-bold text-2xl text-cream">SparkHive</span>
      </motion.div>
      <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-gold"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-cream/50 text-sm">Creating Impact...</p>
    </motion.div>
  );
}
