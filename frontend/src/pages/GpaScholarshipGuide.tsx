import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Sparkles, 
  Target, 
  BookOpen,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import AffiliateSection from '../components/affiliate/AffiliateSection';
import GPAWidget from '../features/gpa/components/GPAWidget';

const GpaScholarshipGuide: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="What GPA Do I Need for a Scholarship? (Ultimate Guide)" 
        description="Understand the GPA requirements for major scholarships. Learn how to maintain a competitive edge and secure funding for your education."
        keywords="scholarship gpa requirements, gpa for college funding, high school scholarship gpa"
      />
      
      <section className="bg-slate-900 border-b border-slate-800 pt-32 pb-20 relative overflow-hidden isolate">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 z-10" />
        <div className="container mx-auto px-6 max-w-4xl relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-primary-500/30 backdrop-blur-md">
            <Award size={14} />
            <span>Scholarship Success</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-black text-white mb-8 tracking-tighter italic leading-tight">
            What GPA Do I Need <span className="text-primary-400">for a Scholarship?</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
            Securing partial or full tuition coverage requires more than just meeting a minimum. Let's break down the actual competitive thresholds.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-4xl -mt-10 space-y-16 relative z-30">
        <Card className="p-10 shadow-2xl border-slate-100 bg-white ring-8 ring-slate-900/5">
          <h2 className="text-3xl font-display font-black text-slate-900 mb-6 flex items-center gap-4">
            <Target className="text-primary-500" size={32} /> Understanding Thresholds
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              While every scholarship program has unique criteria, most fall into a few general categories. Generally, a **3.5 GPA or higher** is considered the standard for competitive academic awards, while a **3.0 GPA** is often the minimum baseline for most state-funded or university-specific grants.
            </p>
          </div>
        </Card>

        <section className="grid lg:grid-cols-2 gap-8">
           <Card className="p-10 shadow-xl border-slate-100 flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-3xl flex items-center justify-center shadow-sm">
                 <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-display font-black text-slate-900">Merit-Based Awards</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Expect to need a **3.8+ GPA** to be in the top tier for these prestigious scholarships.
              </p>
           </Card>
           <Card className="p-10 shadow-xl border-slate-100 flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-3xl flex items-center justify-center shadow-sm">
                 <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-display font-black text-slate-900">Diversity & Need</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                These often offer more flexibility, with a **3.0 GPA** baseline frequently used for eligibility.
              </p>
           </Card>
        </section>

        <section className="space-y-8">
           <div className="text-center space-y-4">
              <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight italic">See where you stand</h2>
              <p className="text-lg text-slate-500 font-medium">Use our tool to monitor your progress toward that 4.0 goal.</p>
           </div>
           <GPAWidget />
        </section>

        <AffiliateSection />

        <div className="text-center py-12 border-t border-slate-200">
           <h4 className="text-sm font-black text-slate-400 tracking-[0.3em] uppercase mb-8">Related resources</h4>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/how-to-calculate-gpa" className="flex items-center gap-3 text-lg font-bold text-slate-700 hover:text-primary-600 transition-colors">
                How to Calculate <ChevronRight size={18} className="text-slate-300" />
              </Link>
              <Link to="/gpa-calculator-for-students" className="flex items-center gap-3 text-lg font-bold text-slate-700 hover:text-primary-600 transition-colors">
                GPA Tools <ChevronRight size={18} className="text-slate-300" />
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GpaScholarshipGuide;
