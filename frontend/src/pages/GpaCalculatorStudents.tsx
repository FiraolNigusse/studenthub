import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AffiliateSection from '../components/affiliate/AffiliateSection';
import GPAWidget from '../features/gpa/components/GPAWidget';

const GpaCalculatorStudents: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="GPA Calculator for Students - Precision Grade Tracking" 
        description="Stay on top of your academic goals with our free GPA calculator. Designed specifically for students who need accurate results instantly."
        keywords="student gpa calculator, grade tracker, college gpa tool, high school gpa"
      />
      
      <section className="bg-white border-b border-slate-100 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
           <Link to="/how-to-calculate-gpa" className="inline-flex items-center gap-2 text-primary-600 font-bold uppercase tracking-widest text-[0.7rem] mb-6 hover:translate-x-1 transition-transform">
             <ArrowLeft size={14} /> Back to Guide
           </Link>
          <h1 className="text-5xl lg:text-7xl font-display font-black text-slate-900 mb-8 tracking-tighter italic">
            GPA Calculator <span className="text-primary-600">for Students</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            Success in academia requires precision. Use our student-focused calculator to track your progress and plan your future achievements.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-4xl -mt-10 space-y-16">
        <section className="space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-2xl font-display font-black text-slate-800 tracking-tight uppercase tracking-widest text-xs">Interactive Tool</h2>
              <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-400">
                 <Zap size={14} className="text-amber-400" />
                 Updates instantly
              </div>
           </div>
           <GPAWidget />
        </section>

        <section className="grid md:grid-cols-2 gap-8">
           <Card className="p-10 shadow-xl border-slate-100">
              <h3 className="text-2xl font-display font-black text-slate-900 mb-4">Why use this?</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Standard calculators often ignore the complexity of weighted credits. Our tool handles everything, giving you a crystal-clear picture of where you stand.
              </p>
           </Card>
           <Card className="p-10 shadow-xl border-slate-100 bg-slate-900 text-white">
              <h3 className="text-2xl font-display font-black mb-4">Pro Student Tip</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Add your expected grades for upcoming exams to see how they will impact your cumulative score before the semester ends.
              </p>
           </Card>
        </section>

        <section className="space-y-6">
           <h2 className="text-3xl font-display font-black text-slate-900">Recommended Reading</h2>
           <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Scholarship GPA Guide', link: '/what-gpa-do-i-need-for-scholarship' },
                { title: 'Student Resume Strategy', link: '/resume-for-students-no-experience' }
              ].map((p, i) => (
                <Link key={i} to={p.link} className="group">
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl flex items-center justify-between hover:border-primary-300 transition-colors shadow-sm">
                    <span className="font-bold text-slate-700">{p.title}</span>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-primary-600 transition-colors" />
                  </div>
                </Link>
              ))}
           </div>
        </section>

        <AffiliateSection />

        <div className="text-center py-12 border-t border-slate-200">
           <Link to="/gpa-calculator">
              <Button size="lg" className="h-16 px-12 rounded-2xl shadow-xl shadow-primary-600/10">
                Explore Full Tool <ArrowRight size={20} className="ml-2" />
              </Button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default GpaCalculatorStudents;
