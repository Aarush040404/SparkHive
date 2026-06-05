import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../../api/client';

export default function ContactForm({ type = 'contact', showService = true }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    role: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      await api.submitContact({ ...form, type });
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '', role: '' });
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  const inputClass =
    'w-full px-5 py-3.5 rounded-2xl glass border border-navy/10 dark:border-white/10 bg-white/50 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/40 transition';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <input className={inputClass} name="name" placeholder="Your name *" required value={form.name} onChange={handleChange} />
        <input className={inputClass} name="email" type="email" placeholder="Email *" required value={form.email} onChange={handleChange} />
        <input className={inputClass} name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <input className={inputClass} name="company" placeholder="Company" value={form.company} onChange={handleChange} />
        {type === 'career' && (
          <input className={`${inputClass} sm:col-span-2`} name="role" placeholder="Role applying for" value={form.role} onChange={handleChange} />
        )}
        {showService && type !== 'career' && (
          <select
            className={`${inputClass} sm:col-span-2`}
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Service of interest</option>
            <option>Social Media Management</option>
            <option>Branding</option>
            <option>PR</option>
            <option>Healthcare Marketing</option>
            <option>Web Design</option>
            <option>Digital Strategy</option>
          </select>
        )}
      </div>
      <textarea
        className={`${inputClass} min-h-[140px] resize-y`}
        name="message"
        placeholder="Tell us about your goals *"
        required
        value={form.message}
        onChange={handleChange}
      />
      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === 'loading' ? 'Sending...' : type === 'consultation' ? 'Request Consultation' : type === 'career' ? 'Submit Application' : 'Send Message'}
      </button>
      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium flex items-center gap-2"
          >
            ✓ Thank you! We&apos;ll be in touch soon.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm">
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
