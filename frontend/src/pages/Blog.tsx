import React from 'react';
import { 
  Calendar, 
  Clock, 
  ChevronRight, 
  Sparkles,
  TrendingUp,
  Award,
  ArrowRight
} from 'lucide-react';
import Button, { cn } from '../components/ui/Button';
import Card from '../components/ui/Card';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: '5 Habits of Top-Performing Students',
      excerpt: 'Learn the core success principles that bridge the gap between good grades and academic mastery.',
      date: 'Mar 15, 2026',
      readTime: '6 min read',
      tag: 'Study Tips',
      icon: <Sparkles size={16} />,
      color: 'bg-violet-50 text-violet-600'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Remote Internships',
      excerpt: 'Navigating the virtual workplace can be tough. Here is how to make a lasting impression from your desk.',
      date: 'Mar 12, 2026',
      readTime: '10 min read',
      tag: 'Career',
      icon: <TrendingUp size={16} />,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      id: 3,
      title: 'How to Master the 4.0 Cumulative GPA',
      excerpt: 'A comprehensive roadmap for maintaining academic brilliance throughout your collegiate career.',
      date: 'Mar 10, 2026',
      readTime: '8 min read',
      tag: 'Academic',
      icon: <Award size={16} />,
      color: 'bg-blue-50 text-blue-600'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24 animate-fade-in max-w-7xl">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
          Student Success <span className="gradient-text">Blog</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium leading-relaxed">
          Expert advice, study techniques, and career tips for the modern scholar. 
          Stay ahead with insights from academic pros.
        </p>
      </div>

      <div className="group mb-24 relative isolate overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary-500/10 to-secondary-light/10 blur-[120px] rounded-full -z-10 animate-pulse-subtle" />
        
        <Card className="p-0 border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.08)] bg-white/80 backdrop-blur-3xl rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row items-stretch group-hover:scale-[1.01] transition-all duration-500">
          <div className="flex-1 p-12 lg:p-20 space-y-10 order-2 lg:order-1 flex flex-col justify-center">
            <div className="flex items-center gap-4">
               <div className="px-5 py-2.5 bg-primary-600 text-white text-[0.75rem] font-black uppercase tracking-[0.25em] rounded-xl shadow-lg shadow-primary-500/20">
                  Featured Article
               </div>
               <div className="h-1.5 w-12 bg-slate-100 rounded-full" />
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display font-black text-slate-800 tracking-tighter leading-tight group-hover:text-primary-600 transition-colors">
              Navigating Undergraduate Research: A Complete Guide
            </h2>
            
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed font-medium">
              Everything you need to know about finding mentors, securing funding, and publishing your first academic paper as a student.
            </p>
            
            <div className="flex flex-wrap items-center gap-10 text-slate-400 text-lg font-bold uppercase tracking-widest border-b border-slate-50 pb-10">
              <span className="flex items-center gap-2.5">
                <Calendar size={22} className="text-primary-400" /> Mar 18, 2026
              </span>
              <span className="flex items-center gap-2.5">
                <Clock size={22} className="text-primary-400" /> 12 min read
              </span>
            </div>
            
            <Button size="lg" className="self-start h-20 px-12 text-2xl font-black rounded-[2.5rem] shadow-2xl shadow-primary-500/20 group-active:scale-95 transition-transform" icon={ChevronRight}>
              Read Full Article
            </Button>
          </div>
          
          <div className="flex-1 min-h-[400px] lg:min-h-0 relative order-1 lg:order-2 overflow-hidden bg-slate-100">
             <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-light/20 rotate-12 scale-150 animate-pulse-subtle" />
             <div className="absolute inset-0 flex items-center justify-center p-20">
                <div className="w-full h-full bg-white/40 backdrop-blur-xl border-4 border-white/40 rounded-[3rem] shadow-2xl shadow-white/50 flex flex-col items-center justify-center gap-8 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-700">
                   <Sparkles size={80} className="text-white drop-shadow-2xl animate-pulse" />
                   <div className="h-2 w-32 bg-white/60 rounded-full" />
                </div>
             </div>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post) => (
          <article key={post.id} className="group relative isolate overflow-visible">
            <Card className="h-full p-10 border-slate-100 shadow-xl bg-white hover:border-primary-100 overflow-visible transition-all flex flex-col">
              <div className={cn('absolute -top-6 left-10 px-5 py-3 rounded-2xl shadow-xl shadow-slate-900/5 flex items-center gap-3 font-display font-black text-sm uppercase tracking-widest border-2 border-white isolate', post.color)}>
                {post.icon} {post.tag}
              </div>
              
              <div className="space-y-8 pt-6 flex-1 flex flex-col mt-4">
                <h3 className="text-3xl font-display font-black text-slate-800 tracking-tight leading-tight group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-lg text-slate-500 leading-relaxed font-medium flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center pt-8 border-t border-slate-50 text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <a href="#" className="flex items-center gap-3 text-xl font-display font-black text-primary-600 group-hover:gap-5 transition-all outline-none focus:gap-5">
                   Read Post <ArrowRight size={24} />
                </a>
              </div>
            </Card>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
