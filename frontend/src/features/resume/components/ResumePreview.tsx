import React, { useRef, useState } from 'react';
import { 
  Download,
  Lock,
  Sparkles,
  Loader2,
  Eye
} from 'lucide-react';
// @ts-ignore
import html2pdf from 'html2pdf.js';
import { type ResumeData } from '../types/resume';
import { type TemplateType } from '../hooks/useResume';
import Card from '../../../components/ui/Card';
import Button, { cn } from '../../../components/ui/Button';

// Templates
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import MinimalTemplate from './templates/MinimalTemplate';

interface ResumePreviewProps {
  data: ResumeData;
  template: TemplateType;
  setTemplate: (template: TemplateType) => void;
  isPremium: boolean;
  onUpgrade: () => void;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ 
  data, 
  template, 
  setTemplate, 
  isPremium,
  onUpgrade
}) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'free' | 'pro'>('free');

  const templates: { id: TemplateType; name: string; premium: boolean; category: 'free' | 'pro' }[] = [
    { id: 'modern', name: 'Professional', premium: false, category: 'free' },
    { id: 'classic', name: 'Executive', premium: false, category: 'free' },
    { id: 'minimal', name: 'Creative', premium: true, category: 'pro' },
  ];

  const filteredTemplates = templates.filter(t => t.category === activeCategory);
  
  const isTemplatePremium = (t: TemplateType) => templates.find(temp => temp.id === t)?.premium || false;
  const isLocked = isTemplatePremium(template) && !isPremium;

  const handleDownload = async () => {
    if (!resumeRef.current) return;
    if (isLocked) {
      onUpgrade();
      return;
    }
    
    setIsDownloading(true);
    
    // Add a slight delay to ensure all animations are finished
    await new Promise(resolve => setTimeout(resolve, 500));

    const element = resumeRef.current;
    
    // PDF Options optimized for high quality and compatibility
    const opt = {
      margin: 0,
      filename: `${data.personalInfo.fullName.replace(/\s+/g, '_') || 'Resume'}_StudentHub.pdf`,
      image: { type: 'jpeg' as const, quality: 1.0 },
      html2canvas: { 
        scale: 3, // High scale for crisp text
        useCORS: true, 
        letterRendering: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: 850 // Fixed width for consistent rendering
      },
      jsPDF: { 
        unit: 'mm' as const, 
        format: 'a4' as const, 
        orientation: 'portrait' as const,
        compress: true 
      }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF Generation failed:', error);
      alert('PDF generation encountered an error. Try using a modern browser like Chrome or contact support.');
    } finally {
      setIsDownloading(false);
    }
  };

  const renderTemplate = () => {
    switch (template) {
      case 'modern': return <ModernTemplate data={data} />;
      case 'classic': return <ClassicTemplate data={data} />;
      case 'minimal': return <MinimalTemplate data={data} />;
      default: return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="lg:col-span-3 space-y-8 animate-fade-in sticky top-32">
      <Card className="p-4 lg:p-6 bg-white border-slate-100 shadow-xl flex flex-col lg:flex-row justify-between items-center gap-6 rounded-[2.5rem] isolate overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto">
           {/* Category Switcher */}
           <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200 shrink-0">
             <button 
                onClick={() => setActiveCategory('free')}
                className={cn(
                  "px-4 py-2 rounded-xl text-[0.65rem] font-black uppercase tracking-widest transition-all",
                  activeCategory === 'free' ? "bg-white shadow text-slate-800" : "text-slate-400 hover:text-slate-600"
                )}
             >
               Free
             </button>
             <button 
                onClick={() => setActiveCategory('pro')}
                className={cn(
                  "px-4 py-2 rounded-xl text-[0.65rem] font-black uppercase tracking-widest transition-all flex items-center gap-2",
                  activeCategory === 'pro' ? "bg-white shadow text-primary-600" : "text-slate-400 hover:text-slate-600"
                )}
             >
               Pro <Sparkles size={10} className="text-amber-500" />
             </button>
           </div>

           <div className="flex gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-100 overflow-x-auto max-w-full no-scrollbar overscroll-contain">
              {filteredTemplates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTemplate(t.id)}
                  className={cn(
                    'px-6 py-2 rounded-xl text-[0.7rem] font-black uppercase tracking-widest transition-all flex items-center gap-2 whitespace-nowrap',
                    template === t.id ? 'bg-white shadow-xl text-primary-600' : 'text-slate-400 hover:text-slate-600'
                  )}
                >
                  {t.name}
                  {t.premium && <Lock size={10} className={template === t.id ? 'text-primary-400' : 'text-slate-300'} />}
                </button>
              ))}
           </div>
        </div>
        <Button 
          onClick={handleDownload}
          isLoading={isDownloading}
          disabled={isDownloading}
          size="lg" 
          className="h-14 px-10 rounded-2xl shadow-xl shadow-primary-600/10 w-full lg:w-auto flex justify-center items-center gap-3" 
          icon={isDownloading ? Loader2 : Download}
        >
          {isDownloading ? 'Generating...' : 'Download PDF'}
        </Button>
      </Card>

      <div className="relative group">
        <div className="flex items-center gap-4 mb-4 ml-6 uppercase tracking-[0.3em] text-[0.65rem] font-bold text-slate-400">
           <Eye size={12} /> Live Preview
        </div>
        
        {/* The Capture Container */}
        <div className={cn(
          "transition-all duration-700 bg-slate-200 p-8 rounded-[4rem] shadow-inner",
          isLocked ? "blur-xl grayscale scale-[0.98] pointer-events-none select-none opacity-40" : ""
        )}>
          <div 
            ref={resumeRef} 
            className="bg-white shadow-2xl mx-auto overflow-hidden"
            style={{ 
              width: '210mm', 
              minHeight: '297mm',
              backgroundColor: '#ffffff'
            }}
          >
            <div className="p-16">
              {renderTemplate()}
            </div>
          </div>
        </div>

        {isLocked && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-12">
            <div className="max-w-md w-full bg-white/90 backdrop-blur-3xl border-2 border-primary-100 p-12 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] text-center animate-fade-in flex flex-col items-center gap-8 ring-8 ring-white/30">
              <div className="w-24 h-24 bg-primary-600 text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-primary-200">
                <Lock size={48} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-black text-slate-800 tracking-tight leading-tight">Premium Template</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  The <strong className="text-primary-600">Minimalist</strong> plan is a premium feature. Unlock all templates and expert tools to stand out.
                </p>
              </div>
              <Button 
                onClick={onUpgrade}
                size="lg" 
                className="w-full h-20 text-xl font-black rounded-[2rem] shadow-2xl shadow-primary-600/20"
                icon={Sparkles}
              >
                Upgrade to Premium
              </Button>
              <button 
                onClick={() => setTemplate('modern')}
                className="text-sm font-black uppercase tracking-widest text-slate-400 hover:text-primary-600 transition-colors"
              >
                Continue with Free
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
