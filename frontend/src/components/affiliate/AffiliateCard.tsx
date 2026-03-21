import React from 'react';
import { ExternalLink, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface AffiliateCardProps {
  title: string;
  description: string;
  link: string;
  badge?: string;
  rating?: number;
  image?: string;
  price?: string;
  isPremium?: boolean;
}

const AffiliateCard: React.FC<AffiliateCardProps> = ({
  title,
  description,
  link,
  badge,
  rating = 4.8,
  image,
  price,
  isPremium = false
}) => {
  return (
    <Card className="group p-0 border-slate-100 shadow-xl overflow-hidden hover:border-primary-100 flex flex-col h-full active:scale-[0.98] transition-all">
      <div className="h-64 bg-slate-50 relative overflow-hidden flex items-center justify-center isolate border-b border-slate-100 group">
         <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
         
         {image ? (
            <div className="relative z-10 w-full h-full p-6">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500"
              />
            </div>
         ) : (
            <div className="w-16 h-16 bg-white/80 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
              <ExternalLink size={32} className="text-primary-500" />
            </div>
         )}
         
         {badge && (
           <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-widest text-slate-500 rounded-lg border border-slate-100 shadow-sm">
             {badge}
           </div>
         )}
         
         {isPremium && (
           <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-600 rounded-lg border border-amber-100 text-[10px] font-black uppercase tracking-widest shadow-sm">
             <ShieldCheck size={12} /> Recommended
           </div>
         )}
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 text-amber-400">
             <Star size={14} fill="currentColor" />
             <span className="text-sm font-bold text-slate-500">{rating}</span>
          </div>
          {price && <span className="text-sm font-black text-primary-600">{price}</span>}
        </div>

        <h3 className="text-xl font-display font-black text-slate-800 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
          {title}
        </h3>
        
        <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10 flex-1">
          {description}
        </p>

        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button 
            size="md" 
            variant="outline" 
            className="w-full h-14 rounded-2xl gap-3 font-extrabold border-slate-100 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 group-hover:shadow-xl group-hover:shadow-primary-500/20 hover:bg-primary-700 hover:text-white transition-all"
          >
            Check it out <ArrowRight size={18} />
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default AffiliateCard;
