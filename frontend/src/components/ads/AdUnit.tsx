import React, { useEffect } from 'react';

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
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className={`ad-container my-8 mx-auto text-center ${className}`}>
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
