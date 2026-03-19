import React from 'react';
import { 
  FileText, 
  Sparkles, 
  Layout as LayoutIcon, 
  Download, 
  Eye, 
  History,
  GraduationCap,
  Briefcase,
  Terminal,
  Award
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ResumeBuilder: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24 animate-fade-in max-w-7xl">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
          Resume <span className="gradient-text">Builder</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium leading-relaxed">
          Craft a professional, ATS-optimized resume in minutes with our specialized editor for students and graduates.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-12 items-start">
        {/* Editor Sidebar */}
        <Card className="lg:col-span-1 p-8 ring-1 ring-slate-100 shadow-xl overflow-hidden sticky top-32">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <Sparkles size={20} className="text-secondary-light animate-pulse" />
            <h3 className="text-xl font-display font-black text-slate-800 tracking-tight">Sections</h3>
          </div>
          
          <div className="space-y-2">
            {[
              { name: 'Personal Info', icon: FileText, active: true },
              { name: 'Education', icon: GraduationCap },
              { name: 'Work Experience', icon: Briefcase },
              { name: 'Projects', icon: Terminal },
              { name: 'Certifications', icon: Award },
            ].map((section, i) => (
              <button 
                key={i} 
                className={cn(
                  'w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[1rem] font-bold transition-all relative group',
                  section.active 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20 px-6' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
                )}
              >
                <section.icon size={20} className={cn(section.active ? 'text-white' : 'text-slate-400 group-hover:text-slate-600')} />
                {section.name}
              </button>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-slate-100 space-y-4">
            <Button variant="outline" className="w-full h-14 rounded-2xl gap-3 font-bold" icon={Eye}>Live Preview</Button>
            <Button variant="ghost" className="w-full h-14 rounded-2xl gap-3 font-bold text-slate-500" icon={History}>History</Button>
          </div>
        </Card>

        {/* Resume Preview */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="p-6 bg-white/80 border-slate-100 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 group">
              <LayoutIcon size={24} className="text-primary-500 opacity-60 group-hover:opacity-100 transition-opacity" />
              <span className="text-lg font-bold text-slate-500">Active Template: <strong className="text-primary-600 font-extrabold ml-1">Modern Graduate v2</strong></span>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Button size="lg" className="flex-1 md:flex-initial h-14 px-10 rounded-2xl shadow-xl shadow-primary-600/10" icon={Download}>
                Download PDF
              </Button>
            </div>
          </Card>

          <Card className="bg-white min-h-[1000px] p-24 rounded-[3rem] shadow-2xl relative overflow-hidden isolate ring-8 ring-primary-50/50">
            {/* Paper design elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-primary-600" />
            
            <header className="text-center mb-16 pb-12 border-b-2 border-slate-900 group">
              <h2 className="text-6xl font-display font-black text-slate-900 tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500">Alexander Student</h2>
              <div className="flex flex-wrap justify-center items-center gap-4 text-lg font-bold text-slate-500">
                <span>alex.student@university.edu</span>
                <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                <span>+1 555-0123</span>
                <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                <span>San Francisco, CA</span>
              </div>
            </header>

            <div className="space-y-16">
              <section className="space-y-8 animate-fade-in">
                <h4 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-[0.3em] pb-3 border-b border-slate-100">
                   <GraduationCap size={16} className="text-primary-500" /> Education
                </h4>
                <div className="group">
                  <div className="flex justify-between items-end mb-3">
                    <strong className="text-2xl font-display font-black text-slate-800">Stanford University</strong>
                    <span className="text-lg font-bold text-slate-400">2022 - Present</span>
                  </div>
                  <p className="text-xl font-bold text-slate-600 mb-2 italic">B.S. in Computer Science | Minor in Mathematics</p>
                  <p className="text-lg font-black text-primary-600 tracking-tight">Cumulative GPA: 3.95/4.0</p>
                </div>
              </section>

              <section className="space-y-8 animate-fade-in delay-150">
                <h4 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-[0.3em] pb-3 border-b border-slate-100">
                   <Briefcase size={16} className="text-primary-500" /> Experience
                </h4>
                <div className="group hover:bg-slate-50/50 p-6 -m-6 rounded-3xl transition-all">
                  <div className="flex justify-between items-end mb-3">
                    <strong className="text-2xl font-display font-black text-slate-800">Summer Intern @ Google</strong>
                    <span className="text-lg font-bold text-slate-400">Summer 2025</span>
                  </div>
                  <p className="text-xl font-bold text-slate-600 mb-6 italic">Software Engineering Internship</p>
                  <ul className="space-y-4 text-lg font-medium text-slate-500 list-disc ml-5 marker:text-primary-500">
                    <li className="pl-2">Architected and deployed scalable backend microservices using <strong className="text-slate-800">Go</strong> and <strong className="text-slate-800">Kubernetes</strong>.</li>
                    <li className="pl-2">Optimized mission-critical API endpoints, achieving a <strong className="text-primary-600">40% reduction</strong> in P99 latency.</li>
                    <li className="pl-2">Spearheaded transition to cloud-native monitoring using Prometheus and Grafana.</li>
                  </ul>
                </div>
              </section>
              
              <section className="space-y-8 animate-fade-in delay-300">
                <h4 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-[0.3em] pb-3 border-b border-slate-100">
                   <Terminal size={16} className="text-primary-500" /> Projects
                </h4>
                <div className="group">
                  <div className="flex justify-between items-end mb-3">
                    <strong className="text-2xl font-display font-black text-slate-800">Open Source Contributor</strong>
                    <span className="text-lg font-bold text-slate-400">2024 - Present</span>
                  </div>
                  <p className="text-lg font-medium text-slate-500 leading-relaxed">
                    Active contributor to major frontend ecosystems including React, Vite, and Tailwind CSS. Ranked in top 1% of contributors for experimental performance optimizations.
                  </p>
                </div>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Add cn helper if not imported
function cn(...inputs: any[]) { return inputs.filter(Boolean).join(' '); }

export default ResumeBuilder;
