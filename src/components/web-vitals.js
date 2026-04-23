'use client';

import { useEffect } from 'react';

/**
 * WebVitals — sends Core Web Vitals to GA4 as custom events.
 *
 * Uses window.gtag directly so it works with GA4 loaded via GTM
 * or any other integration method. Events appear in GA4 under
 * Events: CLS, LCP, INP, FID, TTFB.
 *
 * non_interaction: true ensures these events do not inflate
 * bounce rate in GA4.
 */
export function WebVitals() {
  useEffect(function () {
    import('web-vitals').then(function (mod) {
      function report(metric) {
        if (typeof window.gtag !== 'function') return;

        window.gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        });
      }

      mod.onCLS(report);
      mod.onLCP(report);
      mod.onTTFB(report);
      mod.onINP(report);
    });
  }, []);

  return null;
}
