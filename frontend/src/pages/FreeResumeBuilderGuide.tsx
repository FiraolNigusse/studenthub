import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  FileCheck
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AffiliateSection from '../components/affiliate/AffiliateSection';

const FreeResumeBuilderGuide: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="Free Resume Builder for Students - Create a Pro CV Now" 
        description="Build a professional, ATS-friendly resume in minutes. Use our free tool designed to help students stand out to recruiters."
        keywords="free student resume builder, student CV maker, professional student resumes, ATS-friendly CV"
      />
      
      <section className="bg-white border-b border-slate-100 pt-32 pb-20 overflow-hidden relative isolate">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[120px] -z-1 translate-x-32 -translate-y-32" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-[0.7rem] font-black uppercase tracking-[0.2em] mb-8 border border-primary-100">
             <Rocket size={14} />
             Career Launchpad
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-black text-slate-900 mb-8 tracking-tighter leading-tight italic">
            Free Resume Builder <span className="text-primary-600">for Students</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            You only get one chance to make a first impression. Our tool helps you craft a high-quality, professional resume that gets noticed.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-4xl -mt-10 space-y-16 relative z-30">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <Card className="p-10 shadow-2xl bg-white border-slate-100 lg:col-span-2">
              <h2 className="text-3xl font-display font-black text-slate-900 mb-6 flex items-center gap-4 italic uppercase tracking-widest text-xs">
                 <Sparkles className="text-amber-400" size={32} /> Built for the Modern ATS
              </h2>
              <div className="prose prose-slate max-w-none space-y-8">
                 <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                   Applicant Tracking Systems (ATS) are the gatekeepers of modern hiring. Our templates are rigorously tested to ensure they parse correctly, keeping your profile at the top of the stack.
                 </p>
                 <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center shadow-sm">
                          <Zap size={24} />
                       </div>
                       <h4 className="text-xl font-display font-black text-slate-800">Fast & Free</h4>
                       <p className="text-slate-500 font-medium leading-relaxed">No hidden fees, no credit card required—just pure career utility.</p>
                    </div>
                    <div className="space-y-4">
                       <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center shadow-sm">
                          <Target size={24} />
                       </div>
                       <h4 className="text-xl font-display font-black text-slate-800">Precision Focus</h4>
                       <p className="text-slate-500 font-medium leading-relaxed">Highlight the metrics that matter, like GPA, awards, and internships.</p>
                    </div>
                 </div>
              </div>
           </Card>
           
           <Card className="p-10 shadow-xl bg-slate-900 border-none text-white relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full blur-[50px] translate-x-12 translate-y-12" />
              <FileCheck size={40} className="text-primary-400 mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform" />
              <h3 className="text-2xl font-display font-black mb-6 italic leading-snug">Expert-Level Formatting</h3>
              <p className="text-slate-400 font-medium leading-relaxed italic">"Simplicity is the ultimate sophistication." Our designs follow the golden rules of professional typography and spacing.</p>
           </Card>
        </section>

        <section className="bg-primary-600 p-12 lg:p-20 rounded-[4rem] shadow-2xl shadow-primary-500/10 text-center space-y-10 relative overflow-hidden isolate group">
           <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:40px_40px] group-hover:bg-[length:20px_20px] transition-all duration-700" />
           <h2 className="text-4xl lg:text-6xl font-display font-black text-white tracking-tight leading-tight italic relative z-10">Ready to stand out?</h2>
           <p className="text-xl text-primary-100 max-w-xl mx-auto font-medium leading-relaxed relative z-10">
             Build your future with a resume that speaks for itself. Start your creation process for free right now.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Link to="/resume-builder">
                 <Button size="lg" className="h-[4.5rem] px-16 rounded-[2rem] bg-white text-primary-600 hover:bg-slate-50 shadow-2xl shadow-primary-900/40 text-lg font-black tracking-tight">
                   Build My Resume <ArrowRight size={22} className="ml-2" />
                 </Button>
              </Link>
           </div>
        </section>

        <AffiliateSection />

        <div className="text-center py-12 border-t border-slate-200">
           <div className="flex flex-wrap justify-center gap-12">
              <Link to="/resume-for-students-no-experience" className="text-lg font-bold text-slate-600 hover:text-primary-600 transition-colors uppercase tracking-[0.2em] text-[0.7rem]">Resume Guide</Link>
              <Link to="/templates" className="text-lg font-bold text-slate-600 hover:text-primary-600 transition-colors uppercase tracking-[0.2em] text-[0.7rem]">Templates</Link>
              <Link to="/how-to-calculate-gpa" className="text-lg font-bold text-slate-600 hover:text-primary-600 transition-colors uppercase tracking-[0.2em] text-[0.7rem]">GPA Calculator</Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FreeResumeBuilderGuide;
