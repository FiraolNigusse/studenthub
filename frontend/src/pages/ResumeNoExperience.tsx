import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AffiliateSection from '../components/affiliate/AffiliateSection';

const ResumeNoExperience: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="How to Write a Resume for Students with No Experience" 
        description="Land your first job or internship. Learn how to highlight your skills and education on a student resume even without work history."
        keywords="student resume no experience, entry level CV, first job resume strategy, academic-focused resume"
      />
      
      <section className="bg-white border-b border-slate-100 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
           <Link to="/templates" className="inline-flex items-center gap-2 text-primary-600 font-bold uppercase tracking-widest text-[0.7rem] mb-6 hover:translate-x-1 transition-transform">
             <ArrowLeft size={14} /> View Templates
           </Link>
          <h1 className="text-5xl lg:text-7xl font-display font-black text-slate-900 mb-8 tracking-tighter italic leading-tight">
            How to Write a Resume <span className="text-primary-600">with No Experience</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            Everyone starts somewhere. We'll show you how to leverage your education and skills to land that first critical role.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-4xl -mt-10 space-y-16">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <Card className="p-10 shadow-xl border-slate-100 flex flex-col gap-6 lg:col-span-2">
              <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight flex items-center gap-4 italic mb-4">
                 <Sparkles className="text-amber-400" size={32} /> Leverage Your Education
              </h2>
              <div className="prose prose-slate max-w-none space-y-6">
                 <p className="text-lg text-slate-600 leading-relaxed font-medium">
                   When you lack work history, your GPA, relevant coursework, and extracurricular activities are your greatest assets. Highlighting your academic record shows reliability and intellectual horsepower to potential employers.
                 </p>
                 <div className="space-y-4">
                    {[
                      'List your high GPA (if above 3.5)',
                      'Mention advanced or honors coursework',
                      'Include major academic projects and roles',
                      'Detail any specialized certifications or awards'
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-center text-slate-700 font-bold">
                         <div className="w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                            <CheckCircle size={14} />
                         </div>
                         {item}
                      </div>
                    ))}
                 </div>
              </div>
           </Card>
           
           <Card className="p-10 shadow-xl bg-slate-900 border-none text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-600 rounded-full blur-3xl opacity-20 translate-x-12 -translate-y-12" />
              <Briefcase size={32} className="text-primary-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-display font-black mb-4 uppercase tracking-widest text-xs">The First Role</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Most employers hiring for entry-level roles expect a lack of professional history. They're looking for potential, grit, and cultural fit.
              </p>
           </Card>
        </section>

        <section className="p-12 bg-white rounded-[3.5rem] shadow-2xl shadow-indigo-500/5 border border-slate-100 text-center space-y-8 relative overflow-hidden isolate">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-[100px] opacity-10 -z-1 -translate-x-12 -translate-y-12" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600 rounded-full blur-[100px] opacity-10 -z-1 translate-x-12 translate-y-12" />
           <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight italic">Build it today</h2>
           <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto">
             Don't let a blank page hold you back. Our Resume Builder is designed to guide you through every section, ensuring your strengths are front and center.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/resume-builder">
                 <Button size="lg" className="h-16 px-12 rounded-2xl shadow-xl shadow-primary-600/10">
                   Launch Resume Builder <ArrowRight size={20} className="ml-2" />
                 </Button>
              </Link>
              <Link to="/free-resume-builder-for-students">
                 <Button variant="outline" size="lg" className="h-16 px-12 rounded-2xl border-slate-200">
                   Explore Student Features
                 </Button>
              </Link>
           </div>
        </section>

        <AffiliateSection />

        <div className="text-center py-12 border-t border-slate-200 gap-8 flex flex-col items-center">
           <h4 className="text-sm font-black text-slate-400 tracking-[0.3em] uppercase">Level Up Your Profile</h4>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/gpa-calculator-for-students" className="text-lg font-bold text-slate-600 hover:text-primary-600 transition-colors">GPA Tracker</Link>
              <Link to="/how-to-calculate-gpa" className="text-lg font-bold text-slate-600 hover:text-primary-600 transition-colors">Calculate GPA</Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeNoExperience;
