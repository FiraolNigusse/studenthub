import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  ArrowRight,
  Target,
  Sparkles,
  Zap,
  CheckCircle2,
  ExternalLink,
  Calculator
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AffiliateSection from '../components/affiliate/AffiliateSection';

const BestStudyBooks: React.FC = () => {
  const books = [
    {
      title: 'Deep Work',
      author: 'Cal Newport',
      description: 'A groundbreaking guide on how to cultivate intense focus in a world of constant distraction. Newport argues that "deep work" is a superpower in the modern economy.',
      benefit: 'Helps students eliminate distractions and complete complex assignments in half the time by entering a state of high concentration.',
      link: 'https://amzn.to/4lJ4Vnj',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=300&h=450' 
    },
    {
      title: 'Make It Stick',
      author: 'Peter C. Brown',
      description: 'This book destroys common myths about learning (like highlighting or re-reading) and introduces scientifically-proven techniques for long-term retention.',
      benefit: 'Teaches students how to study smarter, not harder, using retrieval practice and spaced repetition for better exam performance.',
      link: 'https://amzn.to/4brzYko',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=300&h=450'
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'The definitive guide to building good habits and breaking bad ones. It explains how tiny changes can lead to remarkable results over time.',
      benefit: 'Perfect for students struggling to build a consistent study routine or those looking to stop procrastinating for good.',
      link: '#', // Placeholder link
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=300&h=450'
    }
  ];

  return (
    <>
      <SEO 
        title="Best Books for Students (Improve Focus & Productivity)" 
        description="Discover the top books every student should read to improve focus, master learning techniques, and build better study habits for academic success."
        keywords="best books for students, study books, improve focus, student productivity, deep work, atomic habits, make it stick"
      />
      
      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Hero Section */}
        <section className="bg-white border-b border-slate-100 pt-32 pb-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50/50 -skew-x-12 translate-x-1/4 z-0" />
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-primary-100">
              <Zap size={14} className="fill-current" />
              <span>Academic Performance</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-black text-slate-900 mb-8 leading-tight tracking-tight">
              Best Books for <span className="gradient-text">Mastering Focus</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
              Studying harder isn't the answer. Studying <strong className="text-slate-900">smarter</strong> is. In an era of non-stop notifications, these books provide the blueprint for deep concentration and academic excellence.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 max-w-5xl -mt-10 space-y-24">
          {/* Intro Section */}
          <Card className="p-10 shadow-2xl border-slate-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-black text-slate-900 mb-6 leading-tight">
                  Why Modern Students Struggle to Focus
                </h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Between social media, instant messaging, and the constant pull of the digital world, the average student's attention span is shorter than ever. 
                  </p>
                  <p>
                    Effective studying requires <strong>Deep Work</strong>—a state of high-intensity concentration. Without it, you spend more time "studying" with fewer results. These curated books address these exact challenges.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-[3rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
                <Target size={64} className="text-primary-500 mb-4 animate-pulse" />
                <span className="text-sm font-black uppercase tracking-widest text-slate-400">Target</span>
                <span className="text-2xl font-display font-black text-slate-800">100% Focus</span>
              </div>
            </div>
          </Card>

          {/* Top 3 Books Section */}
          <section className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
                  The Top 3 <span className="text-primary-600">Must-Reads</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium">Carefully selected to transform your academic results.</p>
              </div>
            </div>

            <div className="grid gap-12">
              {books.map((book, i) => (
                <div key={i} className="group bg-white rounded-[3.5rem] shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row ring-1 ring-slate-100/50">
                  <div className="md:w-1/3 relative overflow-hidden bg-slate-100">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center font-display font-black text-xl text-primary-600 shadow-xl">
                      0{i+1}
                    </div>
                  </div>
                  <div className="p-10 md:p-14 md:w-2/3 flex flex-col justify-center space-y-8">
                    <div className="space-y-2">
                       <h3 className="text-4xl font-display font-black text-slate-900 tracking-tight leading-none group-hover:text-primary-600 transition-colors">{book.title}</h3>
                       <p className="text-lg font-bold text-slate-400 italic">by {book.author}</p>
                    </div>
                    
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                      {book.description}
                    </p>

                    <div className="bg-primary-50/50 p-6 rounded-3xl border border-primary-100">
                       <h4 className="text-sm font-black uppercase tracking-widest text-primary-600 mb-3 flex items-center gap-2">
                         <Sparkles size={16} /> Student Benefit
                       </h4>
                       <p className="text-lg font-bold text-slate-700 leading-snug italic">
                        "{book.benefit}"
                       </p>
                    </div>

                    <div className="pt-4">
                      <a href={book.link} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="h-16 px-10 rounded-2xl text-xl font-black bg-slate-900 hover:bg-black group/btn shadow-xl shadow-slate-200">
                          View on Amazon <ExternalLink size={20} className="ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GPA Tool Section */}
          <Card className="p-12 shadow-2xl border-slate-100 bg-primary-600 text-white overflow-hidden relative isolate text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] z-0" />
            <div className="relative z-10 space-y-10">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-3xl rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                 <Calculator size={48} className="text-white" />
              </div>
              <div className="space-y-4 max-w-2xl mx-auto">
                <h2 className="text-4xl font-display font-black tracking-tight leading-tight">
                  Track Your Academic Improvement
                </h2>
                <p className="text-xl text-primary-100 font-medium leading-relaxed">
                  As you apply the techniques from these books, use our free GPA Calculator to track your grade increases in real-time.
                </p>
              </div>
              <Link to="/gpa-calculator" className="inline-block">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-slate-50 h-16 px-12 rounded-2xl text-xl font-black shadow-2xl">
                  Try GPA Calculator <ArrowRight size={20} className="ml-3" />
                </Button>
              </Link>
            </div>
          </Card>

          {/* Footer Affiliate & Next Actions */}
          <div className="space-y-12 pb-12">
            <AffiliateSection />
            
            <div className="text-center pt-12 border-t border-slate-200">
               <h4 className="text-base font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Related Resources</h4>
               <div className="flex flex-wrap justify-center gap-8">
                  <Link to="/how-to-calculate-gpa" className="text-lg font-bold text-slate-600 hover:text-primary-600 transition-colors flex items-center gap-2">
                    <BookOpen size={18} /> How to Calculate GPA
                  </Link>
                  <Link to="/resume-for-students-no-experience" className="text-lg font-bold text-slate-600 hover:text-primary-600 transition-colors flex items-center gap-2">
                    <Zap size={18} /> Student Resume Guide
                  </Link>
                  <Link to="/free-resume-builder-for-students" className="text-lg font-bold text-slate-600 hover:text-primary-600 transition-colors flex items-center gap-2">
                    <CheckCircle2 size={18} /> Resume Builder
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestStudyBooks;
