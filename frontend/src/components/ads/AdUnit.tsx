import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  className?: string;
  display?: 'block' | 'inline-block';
  style?: React.CSSProperties;
}

const AdUnit: React.FC<AdUnitProps> = ({ 
  slot, 
  format = 'auto', 
  className = '', 
  style = {},
  display = 'block'
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const pushAd = () => {
      if (initialized.current) return;
      if (!adRef.current || adRef.current.offsetWidth === 0) return;
      
      const ins = adRef.current.querySelector('ins.adsbygoogle');
      if (ins && ins.getAttribute('data-adsbygoogle-status')) {
        initialized.current = true;
        return;
      }

      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        initialized.current = true;
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };

    // Try immediately
    pushAd();

    // If not initialized, set up an observer to catch when it becomes visible
    if (!initialized.current) {
      const observer = new ResizeObserver(() => {
        if (!initialized.current && adRef.current && adRef.current.offsetWidth > 0) {
          pushAd();
          observer.disconnect();
        }
      });
      
      if (adRef.current) observer.observe(adRef.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className={`ad-container my-8 mx-auto text-center ${className}`} ref={adRef}>
      {/* Label for development/clarity */}
      <div className="text-[10px] uppercase tracking-widest text-slate-300 mb-2 font-bold">Advertisement</div>
      
      <div className="bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 overflow-hidden flex items-center justify-center min-h-[100px]">
        <ins
          className="adsbygoogle"
          style={{ display, ...style }}
          data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT_ID || 'ca-pub-XXXXXXXXXXXXXXXX'} // Placeholder
          data-ad-slot={slot || '1234567890'} // Placeholder
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};

export default AdUnit;
