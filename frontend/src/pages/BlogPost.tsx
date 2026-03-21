import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Link as LinkIcon, Target, Sparkles, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SEO from '../components/seo/SEO';
import AffiliateSection from '../components/affiliate/AffiliateSection';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // In a real app, you would fetch this from a CMS or API
  const post = {
    title: slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Blog Post',
    excerpt: 'Optimizing your study routine is the first step toward academic mastery. This guide explores proven techniques used by Ivy League students.',
    date: 'Mar 15, 2026',
    readTime: '6 min read',
    category: 'Study Tips',
    content: `
      <p>Landing a top-tier GPA isn't just about how long you study, but <strong>how</strong> you study. Most students fall into the trap of passive reading, which leads to high stress and low retention.</p>
      
      <h2>1. The Pomodoro Technique 2.0</h2>
      <p>We all know the standard 25/5 split, but for complex subjects like Organic Chemistry or Advanced Calculus, a 50/10 split often works better to maintain deep focus.</p>
      
      <blockquote>"Deep work is the ability to focus without distraction on a cognitively demanding task." - Cal Newport</blockquote>

      <h2>2. Active Recall & Spaced Repetition</h2>
      <p>Instead of re-reading your notes, quiz yourself. This forces your brain to retrieve information, strengthening the neural pathways.</p>

      <h2>3. Track Your Progress</h2>
      <p>You can't improve what you don't measure. Staying on top of your grades is essential for early intervention if a subject becomes too challenging.</p>
    `,
    author: {
      name: 'Dr. Sarah Jenkins',
      role: 'Academic Advisor',
      avatar: 'SJ'
    }
  };

  return (
    <div className="bg-white min-h-screen pb-24 animate-fade-in">
      <SEO 
        title={post.title}
        description={post.excerpt}
        type="article"
      />

      <div className="h-[50vh] w-full bg-slate-900 relative overflow-hidden isolate flex flex-col items-center justify-center text-center px-6">
         <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-slate-900 z-10" />
         <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1434031213665-da1909f18730?auto=format&fit=crop&q=80')] bg-cover bg-center" />
         
         <div className="relative z-20 max-w-4xl space-y-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors mb-4 group">
               <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
            </Link>
            
            <h1 className="text-4xl lg:text-7xl font-display font-black text-white tracking-tighter leading-tight italic">
               {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-300 font-bold uppercase tracking-[0.2em] text-[0.7rem]">
               <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary-500" /> {post.date}
               </span>
               <div className="w-1 h-1 bg-slate-700 rounded-full" />
               <span className="flex items-center gap-2">
                  <Clock size={16} className="text-primary-500" /> {post.readTime}
               </span>
               <div className="w-1 h-1 bg-slate-700 rounded-full" />
               <span className="bg-primary-600/20 text-primary-400 px-3 py-1 rounded-lg border border-primary-500/30">
                  {post.category}
               </span>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-30">
         <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8 bg-white p-10 lg:p-20 rounded-[3.5rem] shadow-2xl shadow-slate-900/5 border border-slate-100 prose prose-slate prose-xl max-w-none prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-blockquote:border-primary-500 prose-blockquote:bg-slate-50 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:not-italic prose-strong:text-primary-600">
               <div dangerouslySetInnerHTML={{ __html: post.content }} />
               
               <div className="mt-20 pt-12 border-t border-slate-100">
                  <h3 className="text-2xl font-display font-black text-slate-900 mb-8 tracking-tight">Boost Your Performance with StudentHub</h3>
                  <div className="grid sm:grid-cols-2 gap-6 not-prose">
                     <Link to="/resume" className="group">
                        <Card className="p-6 bg-primary-50 border-primary-100 hover:bg-primary-100 transition-colors flex items-center gap-4 rounded-3xl">
                           <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform shadow-sm">
                              <Zap size={24} />
                           </div>
                           <div>
                              <h4 className="font-bold text-primary-900">Resume Builder</h4>
                              <p className="text-xs text-primary-600 font-medium">Create a pro CV in minutes</p>
                           </div>
                        </Card>
                     </Link>
                     <Link to="/resume" className="group"> {/* Fixed link to tool later if needed */}
                        <Card className="p-6 bg-cyan-50 border-cyan-100 hover:bg-cyan-100 transition-colors flex items-center gap-4 rounded-3xl">
                           <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform shadow-sm">
                              <Target size={24} />
                           </div>
                           <div>
                              <h4 className="font-bold text-cyan-900">GPA Tracker</h4>
                              <p className="text-xs text-cyan-600 font-medium">Monitor your academic growth</p>
                           </div>
                        </Card>
                     </Link>
                  </div>
               </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
               <Card className="p-10 rounded-[2.5rem] border-slate-100 shadow-xl sticky top-32">
                  <h4 className="text-xl font-display font-black text-slate-800 mb-8 tracking-tight uppercase tracking-widest text-xs">Share this guide</h4>
                  <div className="flex gap-4 mb-12">
                     <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-slate-100 hover:text-blue-600">
                        <Facebook size={20} />
                     </Button>
                     <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-slate-100 hover:text-sky-500">
                        <Twitter size={20} />
                     </Button>
                     <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-slate-100 hover:text-primary-600">
                        <LinkIcon size={20} />
                     </Button>
                  </div>
                  
                  <div className="p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden group isolate">
                     <div className="absolute top-0 right-0 w-20 h-20 bg-primary-600 rounded-full blur-2xl opacity-40 translate-x-10 -translate-y-10" />
                     <Sparkles size={32} className="text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                     <h4 className="font-display font-black text-lg mb-2 tracking-tight leading-tight">Join 50k+ students</h4>
                     <p className="text-slate-400 text-sm font-medium mb-6">Get weekly study tips and exclusive templates delivered to you.</p>
                     <Button className="w-full h-12 rounded-xl text-sm font-bold bg-primary-600 hover:bg-primary-500 shadow-xl shadow-primary-900/20">Subscribe Now</Button>
                  </div>
               </Card>
            </aside>
         </div>
      </div>
      <AffiliateSection />
    </div>
  );
};

export default BlogPost;
