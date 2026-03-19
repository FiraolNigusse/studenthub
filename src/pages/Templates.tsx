import React from 'react';
import { Layout as LayoutIcon, Filter, Search, Download, Star, ChevronRight } from 'lucide-react';
import Button, { cn } from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';

const Templates: React.FC = () => {
  const templates = [
    { id: 1, title: 'Study Planner 2026', category: 'Academic', rating: 4.8, downloads: '2.4k', color: 'primary' },
    { id: 2, title: 'Essay Structure Pro', category: 'Writing', rating: 4.9, downloads: '5.1k', color: 'secondary' },
    { id: 3, title: 'PhD Research Tracker', category: 'Graduate', rating: 4.7, downloads: '1.2k', color: 'cyan' },
    { id: 4, title: 'Internship Tracker', category: 'Career', rating: 4.8, downloads: '3.8k', color: 'emerald' },
    { id: 5, title: 'Lab Report Master', category: 'STEM', rating: 4.6, downloads: '1.9k', color: 'amber' },
    { id: 6, title: 'Job Search Toolkit', category: 'Career', rating: 5.0, downloads: '8.4k', color: 'secondary' },
  ];

  return (
    <div className="container mx-auto px-6 py-24 animate-fade-in max-w-7xl">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
          Template <span className="gradient-text">Library</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium leading-relaxed">
          Expertly crafted resources for every step of your academic journey. 
          Premium quality templates ready to download and use.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between mb-20 bg-white/80 backdrop-blur-3xl p-10 rounded-[3rem] border-2 border-slate-50 shadow-2xl overflow-hidden relative isolate">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-[100px] -z-1 opacity-40 translate-x-32 -translate-y-32" />
        
        <div className="flex-1 w-full max-w-2xl relative">
          <Input 
            type="text" 
            placeholder="Search templates (e.g. essay, chemistry lab, cv)..." 
            icon={Search}
            className="h-16 px-14 text-lg rounded-[1.5rem] shadow-sm border-slate-100 group-hover:border-primary-100"
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
           <Button variant="outline" size="md" className="h-14 px-8 rounded-2xl gap-3 font-bold border-slate-100" icon={Filter}>Filters</Button>
           <div className="h-14 p-1.5 bg-slate-50 border border-slate-100 rounded-2xl flex gap-1 isolate">
             {['All', 'Academic', 'Career', 'Writing'].map((cat, i) => (
               <button 
                 key={i} 
                 className={cn(
                   'px-6 py-2.5 rounded-xl font-bold transition-all h-full flex items-center',
                   cat === 'All' ? 'bg-white shadow-md text-primary-600' : 'text-slate-400 hover:text-slate-600'
                 )}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {templates.map((template) => (
          <Card key={template.id} className="group p-0 border-slate-100 shadow-xl relative overflow-hidden flex flex-col hover:border-primary-100">
            <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center relative overflow-hidden isolate">
              <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-24 h-24 bg-white/80 backdrop-blur-xl rounded-3xl flex items-center justify-center rotate-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-slate-900/5">
                <LayoutIcon size={48} className="text-primary-500" />
              </div>
              <div className="absolute top-6 right-6 px-4 py-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-xl text-[0.7rem] font-black uppercase tracking-[0.2em] text-slate-500 shadow-sm">
                {template.category}
              </div>
            </div>
            
            <div className="p-10 space-y-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-display font-extrabold text-slate-800 tracking-tight leading-tight group-hover:text-primary-600 transition-colors">{template.title}</h3>
              
              <div className="flex items-center justify-between text-sm font-bold text-slate-400 uppercase tracking-widest pb-8 border-b border-slate-50">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-lg text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <span>{template.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download size={16} />
                  <span>{template.downloads} downloads</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full h-16 rounded-[1.5rem] mt-auto shadow-xl shadow-primary-500/10 group-active:scale-95 transition-transform" icon={Download}>
                Get Template
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-32 p-16 bg-slate-900 rounded-[3.5rem] text-center relative overflow-hidden isolate group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-[150px] -z-1 opacity-40 translate-x-1/2 -translate-y-1/2 animate-pulse-subtle" />
        <h2 className="text-4xl lg:text-5xl font-display font-black text-white mb-8 group-hover:scale-105 transition-transform">Want a custom template?</h2>
        <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">Tell us what you need and our academic experts will create it for you in under 48 hours.</p>
        <Button size="lg" className="h-20 px-12 text-2xl font-black rounded-[2rem] bg-white text-slate-900 hover:bg-white/90 group-active:scale-95 transition-transform">
          Request Now <ChevronRight size={28} className="ml-2 group-hover:translate-x-2 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default Templates;
