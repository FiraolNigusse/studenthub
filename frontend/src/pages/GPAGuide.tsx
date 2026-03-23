import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  BookOpen, 
  Lightbulb, 
  ArrowRight,
  TrendingUp,
  Target
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AffiliateSection from '../components/affiliate/AffiliateSection';
import GPAWidget from '../features/gpa/components/GPAWidget';

const GPAGuide: React.FC = () => {
  return (
    <>
      <SEO 
        title="How to Calculate GPA (Step-by-Step Guide for Students)" 
        description="Learn how to calculate your GPA step by step. Understand the formula, follow our guide, and use our free GPA calculator for instant results."
        keywords="how to calculate gpa, gpa formula, college gpa, high school gpa, gpa steps, student guide"
      />
      
      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Hero Section */}
        <section className="bg-white border-b border-slate-100 pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-primary-100">
              <BookOpen size={14} />
              <span>Academic Essentials</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-black text-slate-900 mb-8 leading-tight tracking-tight">
              How to <span className="gradient-text">Calculate GPA</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Your GPA (Grade Point Average) is more than just a number—it’s a reflection of your academic journey. 
              Whether you're aiming for a scholarship or applying to your dream university, understanding how your 
              grades translate into this score is crucial.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 max-w-4xl -mt-10 space-y-16">
          {/* Section 1: What is GPA */}
          <Card className="p-10 shadow-xl border-slate-100 ring-1 ring-slate-100 transition-none">
            <h2 className="text-3xl font-display font-black text-slate-900 mb-6 flex items-center gap-4">
              <TrendingUp className="text-primary-500" size={32} /> What is GPA?
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed">
                Grade Point Average (GPA) is a standardized number representing your average performance across all your courses. 
                Most institutions use a 4.0 scale, where an 'A' is worth 4 points, a 'B' is 3 points, and so on. 
                It effectively compresses months of study into a single, comparable figure used by recruiters and admissions offices.
              </p>
            </div>
          </Card>

          {/* Section 2: GPA Formula */}
          <Card className="p-10 shadow-xl border-slate-100 bg-slate-900 text-white transition-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] -translate-x-12 -translate-y-12" />
            <h2 className="text-3xl font-display font-black mb-8 flex items-center gap-4">
              <Calculator className="text-primary-400" size={32} /> The GPA Formula
            </h2>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mb-8">
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <span className="text-sm font-black uppercase tracking-tighter text-slate-400">Standard Formula</span>
                <div className="text-2xl md:text-3xl font-display font-black tracking-tight flex flex-col items-center">
                  <span>Total Grade Points</span>
                  <div className="w-full h-1 bg-primary-500 my-4 rounded-full" />
                  <span>Total Credits Attempted</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-400 font-medium leading-relaxed italic">
              "Grade Points" are calculated by multiplying the point value of a grade (e.g., 4.0 for an A) by the credit hours of the course.
            </p>
          </Card>

          {/* Section 3: Step-by-Step Guide */}
          <Card className="p-10 shadow-xl border-slate-100 transition-none">
            <h2 className="text-3xl font-display font-black text-slate-900 mb-10 flex items-center gap-4">
              <Target className="text-secondary-light" size={32} /> Step-by-Step Guide
            </h2>
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100" />
              {[
                { step: '01', title: 'Assign Points to Your Grades', desc: 'Convert your letter grades into point values (A=4, B=3, C=2, D=1, F=0).' },
                { step: '02', title: 'Multiply by Credits', desc: 'Multiply the point value of each grade by the number of credit hours for that course.' },
                { step: '03', title: 'Find the Totals', desc: 'Sum up all the quality points and sum up all the credit hours successfully attempted.' },
                { step: '04', title: 'Divide and Conquer', desc: 'Divide the total quality points by the total credit hours to find your GPA.' },
              ].map((s, i) => (
                <div key={i} className="flex gap-8 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-slate-100 shadow-sm flex items-center justify-center shrink-0 font-display font-black text-primary-600">
                    {s.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-display font-black text-slate-800 mb-2">{s.title}</h3>
                    <p className="text-lg text-slate-500 font-medium">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Section 4: Interactive Tool */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">Try it yourself</h2>
              <p className="text-lg text-slate-500 font-medium">Use our automated tool to calculate your GPA in seconds.</p>
            </div>
            <GPAWidget />
            <div className="flex justify-center pt-4">
              <Link to="/gpa-calculator">
                <Button size="lg" className="px-12 h-16 rounded-2xl shadow-xl shadow-primary-600/10">
                  Open Full Calculator <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Section 5: Tips */}
          <Card className="p-10 shadow-xl border-slate-100 bg-primary-600 text-white transition-none overflow-hidden relative">
            <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
            <h2 className="text-3xl font-display font-black mb-8 flex items-center gap-4 relative z-10">
              <Lightbulb className="text-amber-300" size={32} /> Tips to Improve Your GPA
            </h2>
            <ul className="grid md:grid-cols-2 gap-6 relative z-10">
              {[
                'Prioritize high-credit courses as they impact your score more.',
                'Utilize study groups and campus tutoring resources early.',
                'Track your progress after every single exam or assignment.',
                'Focus on deep learning rather than surface-level memorization.'
              ].map((tip, i) => (
                <li key={i} className="bg-white/10 p-6 rounded-2xl flex items-start gap-4 border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-amber-300 flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp size={12} className="text-primary-700" />
                  </div>
                  <span className="text-lg font-bold leading-snug">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Affiliate & Next Actions */}
          <AffiliateSection />

          <div className="text-center py-12 border-t border-slate-200">
             <h4 className="text-base font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Need more tools?</h4>
             <div className="flex flex-wrap justify-center gap-6">
                <Link to="/resume" className="text-lg font-bold text-slate-600 hover:text-primary-600 transition-colors">Resume Builder</Link>
                <Link to="/templates" className="text-lg font-bold text-slate-600 hover:text-primary-600 transition-colors">Study Templates</Link>
                <Link to="/blog" className="text-lg font-bold text-slate-600 hover:text-primary-600 transition-colors">Student Blog</Link>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GPAGuide;
