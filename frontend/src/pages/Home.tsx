import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Target, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import Button, { cn } from '../components/ui/Button';
import Card from '../components/ui/Card';
import AdUnit from '../components/ads/AdUnit';
import AffiliateSection from '../components/affiliate/AffiliateSection';

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 max-w-2xl text-center lg:text-left animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-xs font-extrabold uppercase tracking-widest mb-8 border border-primary-200">
            <Sparkles size={14} className="animate-pulse" />
            <span>The ultimate student companion</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-10 tracking-tight text-slate-900">
            Unlock Your Full <span className="gradient-text">Academic Potential</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-500 mb-12 leading-relaxed font-medium">
            StudentHub provides all the tools you need to succeed in your academic journey. 
            From GPA tracking to professional resume building, we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-16">
            <Button size="lg" className="px-10 h-16 text-lg tracking-tight">
              Get Started for Free <ArrowRight size={22} className="ml-1" />
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 text-lg border-slate-200 hover:border-primary-200">
              Explore Templates
            </Button>
          </div>
          
          <div className="flex gap-12 justify-center lg:justify-start">
            <div>
              <span className="block text-3xl font-display font-black text-slate-800">50k+</span>
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Active Students</span>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div>
              <span className="block text-3xl font-display font-black text-slate-800">10k+</span>
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Resumes Built</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative w-full max-w-xl animate-fade-in delay-150">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary-500/10 to-secondary-light/10 blur-[100px] rounded-full -z-10 animate-pulse-subtle" />
          
          <Card className="p-10 border-slate-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-500" />
            <div className="flex gap-2.5 mb-10">
              <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
              <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm" />
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-sm" />
            </div>
            
            <h3 className="text-2xl font-display font-extrabold text-slate-800 mb-8 flex items-center gap-3">
              <Target size={24} className="text-primary-500" /> My Tracker
            </h3>
            
            <div className="bg-primary-50/50 p-8 rounded-3xl border-2 border-primary-100 flex flex-col items-center mb-10 group hover:bg-primary-50 transition-colors">
              <span className="text-6xl font-display font-black text-primary-600 mb-2 group-hover:scale-110 transition-transform tracking-tighter">3.95</span>
              <span className="text-sm font-bold text-primary-400 uppercase tracking-widest">Cumulative GPA</span>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'Advanced Calculus', grade: 'A' },
                { name: 'Computer Science 101', grade: 'A-' },
                { name: 'Modern Literature', grade: 'A' },
              ].map((course, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl group hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-500">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-slate-700">{course.name}</span>
                  <span className="ml-auto font-display font-black text-primary-600 text-lg">{course.grade}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Ad Section */}
      <div className="container mx-auto px-6">
        <AdUnit format="horizontal" className="mb-24 shadow-sm bg-white p-4 rounded-[3rem] border border-slate-100" />
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold mb-6 tracking-tight text-slate-900">
            Everything You Need To <span className="gradient-text">Excel</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Powerful features designed specifically for the modern student experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: 'GPA Calculator', 
              desc: 'Track your undergraduate or graduate GPA with precision and plan for your future goals.',
              icon: Target,
              color: 'bg-violet-500 text-white shadow-violet-200'
            },
            { 
              title: 'Resume Builder', 
              desc: 'Create professional, ATS-friendly resumes in minutes using our specialized editor.',
              icon: Zap,
              color: 'bg-pink-500 text-white shadow-pink-200'
            },
            { 
              title: 'Template Library', 
              desc: 'Access hundreds of templates for essay outlines, study planners, and more.',
              icon: Sparkles,
              color: 'bg-cyan-500 text-white shadow-cyan-200'
            }
          ].map((feature, i) => (
            <Card key={i} className="group p-10 hover:border-primary-200">
              <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-transform group-hover:scale-110 group-hover:rotate-3', feature.color)}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Recommendations Section */}
      <AffiliateSection />
    </div>
  );
};

export default Home;
