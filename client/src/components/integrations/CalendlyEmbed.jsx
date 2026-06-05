import { useEffect, useState } from 'react';
import { api } from '../../api/client';

export default function CalendlyEmbed() {
  const [url, setUrl] = useState(import.meta.env.VITE_CALENDLY_URL || '');

  useEffect(() => {
    api.getPublicConfig().then((cfg) => {
      if (cfg.calendlyUrl) setUrl(cfg.calendlyUrl);
    }).catch(() => {});
  }, []);

  if (!url || url === 'https://calendly.com') {
    return null;
  }

  const embedUrl = url.includes('?') ? `${url}&hide_gdpr_banner=1` : `${url}?hide_gdpr_banner=1`;

  return (
    <div className="mt-12 rounded-3xl overflow-hidden shadow-glass border border-navy/10">
      <div className="p-6 border-b border-navy/10 dark:border-white/10">
        <h3 className="font-display font-bold text-xl">Schedule Instantly</h3>
        <p className="text-sm text-navy/60 dark:text-cream/60 mt-1">Pick a time that works for you via Calendly.</p>
      </div>
      <iframe
        title="Book consultation with SparkHive"
        src={embedUrl}
        className="w-full min-h-[650px] bg-white"
        loading="lazy"
      />
    </div>
  );
}
