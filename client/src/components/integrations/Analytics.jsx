import { useEffect, useState } from 'react';
import { api } from '../../api/client';

export default function Analytics() {
  const [ids, setIds] = useState({ ga: '', meta: '' });

  useEffect(() => {
    const gaEnv = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const metaEnv = import.meta.env.VITE_META_PIXEL_ID;
    if (gaEnv || metaEnv) {
      setIds({ ga: gaEnv || '', meta: metaEnv || '' });
      return;
    }
    api.getPublicConfig().then((cfg) => {
      setIds({ ga: cfg.gaId || '', meta: cfg.metaPixelId || '' });
    }).catch(() => {});
  }, []);

  useEffect(() => {
    if (ids.ga && !document.getElementById('ga-script')) {
      const s = document.createElement('script');
      s.id = 'ga-script';
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${ids.ga}`;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', ids.ga);
    }
  }, [ids.ga]);

  useEffect(() => {
    if (ids.meta && !window.fbq) {
      const n = (window.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      });
      if (!window._fbq) window._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      const t = document.createElement('script');
      t.async = true;
      t.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(t);
      window.fbq('init', ids.meta);
      window.fbq('track', 'PageView');
    }
  }, [ids.meta]);

  return null;
}
