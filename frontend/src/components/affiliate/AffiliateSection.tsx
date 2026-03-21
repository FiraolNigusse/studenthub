import React from 'react';
import { Sparkles, ArrowRight, BookOpen, Brain, PenTool } from 'lucide-react';
import AffiliateCard from './AffiliateCard';
import atomicHabitsImg from '../../assets/recommendations/atomic-habits.png';

const AffiliateSection: React.FC = () => {
  const recommendations = [
    { 
      title: 'Atomic Habits', 
      description: 'The definitive guide to building good habits and breaking bad ones. Master the systems that drive your success.',
      link: import.meta.env.VITE_AMAZON_KINDLE_URL || 'https://amzn.to/4d1MXKC',
      badge: 'Best Seller',
      rating: 4.9,
      image: atomicHabitsImg,
      isPremium: true
    },
    { 
      title: 'Deep Work', 
      description: 'Struggling to focus while studying? This book teaches deep focus in a distracted world.',
      link: 'https://amzn.to/4lJ4Vnj',
      badge: 'Bestseller',
      rating: 4.9,
      icon: Brain,
      isPremium: true
    },
    { 
      title: 'Make It Stick', 
      description: 'Want to actually remember what you study? This explains how learning really works.',
      link: 'https://amzn.to/4brzYko',
      badge: 'Academic Pick',
      rating: 4.8,
      icon: BookOpen,
      isPremium: true
    },
    { 
      title: 'Grammarly For Students', 
      description: 'The AI writing assistant that helps you write clearly and error-free on any platform. Essential for high-quality essays.',
      link: 'https://www.grammarly.com/',
      badge: 'Academics',
      rating: 4.7,
      icon: PenTool,
      isPremium: true
    },
  ];

  return (
    <section className="container mx-auto px-6 py-24 animate-fade-in relative isolate">
       {/* Background highlights */}
       <div className="absolute top-[20%] left-[-10%] w-[30%] h-[40%] bg-primary-100 rounded-full blur-[120px] -z-1 opacity-30" />
       <div className="absolute bottom-[10%] right-[-10%] w-[25%] h-[35%] bg-secondary-light/10 rounded-full blur-[100px] -z-1 opacity-20" />

       <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 border border-slate-200">
                <Sparkles size={14} className="text-amber-500" /> Recommendations
             </div>
             <h2 className="text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight mb-4">
                📚 Improve Your <span className="gradient-text">Study Performance</span>
             </h2>
             <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Unlock your full academic potential with these handpicked, science-backed resources.
             </p>
          </div>
          <button className="flex items-center gap-3 text-slate-400 font-black hover:text-primary-600 transition-colors uppercase tracking-widest text-xs h-fit py-4 px-8 bg-white rounded-2xl shadow-sm border border-slate-100 group">
             View All Tools <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
       </div>

       <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {recommendations.map((rec, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <AffiliateCard {...rec} />
            </div>
          ))}
       </div>

       <div className="text-center mt-12 pt-12 border-t border-slate-100">
          <p className="text-sm text-slate-400 font-medium italic">
            "This page contains affiliate links. I may earn a commission at no extra cost to you."
          </p>
       </div>
    </section>
  );
};

export default AffiliateSection;
