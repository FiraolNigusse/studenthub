import React, { useRef, useState } from 'react';
import { 
  Download,
  Layout as LayoutIcon,
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

  const isTemplatePremium = (t: TemplateType) => t === 'minimal';
  const isLocked = isTemplatePremium(template) && !isPremium;

  const handleDownload = async () => {
    if (!resumeRef.current || isLocked) return;
    
    setIsDownloading(true);
    
    const element = resumeRef.current;
    const opt = {
      margin: [0, 0, 0, 0] as [number, number, number, number],
      filename: `${data.personalInfo.fullName || 'Resume'}_StudentHub.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { 
        scale: 4, 
        useCORS: true, 
        letterRendering: true,
        scrollX: 0,
        scrollY: 0
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };

    try {
      await html2pdf().set(opt).from(element).save();
      // Optional: alert('Resume downloaded successfully!');
    } catch (error) {
      console.error('PDF Generation failed:', error);
      alert('Failed to generate PDF. Please try a different browser or check your connection.');
    } finally {
      setIsDownloading(false);
    }
  };

  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'classic':
        return <ClassicTemplate data={data} />;
      case 'minimal':
        return <MinimalTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  const templates: { id: TemplateType; name: string; premium: boolean }[] = [
    { id: 'modern', name: 'Modern', premium: false },
    { id: 'classic', name: 'Classic', premium: false },
    { id: 'minimal', name: 'Minimal', premium: true },
  ];

  return (
    <div className="lg:col-span-3 space-y-8 animate-fade-in sticky top-32">
      <Card className="p-4 lg:p-6 bg-white/80 border-slate-100 shadow-xl flex flex-col lg:flex-row justify-between items-center gap-6 backdrop-blur-3xl rounded-[2.5rem] isolate overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto">
           <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-2xl border border-slate-100 group shrink-0">
             <LayoutIcon size={20} className="text-primary-500" />
             <span className="text-sm font-bold text-slate-500">Template</span>
           </div>
           <div className="flex gap-2 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-100 overflow-x-auto max-w-full no-scrollbar overscroll-contain">
              {templates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTemplate(t.id)}
                  className={cn(
                    'px-6 py-2 rounded-xl text-[0.7rem] font-black uppercase tracking-widest transition-all flex items-center gap-2 whitespace-nowrap',
                    template === t.id ? 'bg-white shadow-xl text-primary-600' : 'text-slate-400 hover:text-slate-600'
                  )}
                >
                  {t.name}
                  {t.premium && <Sparkles size={12} className={template === t.id ? 'text-amber-500' : 'text-slate-300'} />}
                </button>
              ))}
           </div>
        </div>
        <Button 
          onClick={handleDownload}
          isLoading={isDownloading}
          disabled={isLocked || isDownloading}
          size="lg" 
          className="h-14 px-10 rounded-2xl shadow-xl shadow-primary-600/10 w-full lg:w-auto flex justify-center items-center gap-3" 
          icon={isDownloading ? Loader2 : Download}
        >
          {isDownloading ? 'Generating...' : 'Download PDF'}
        </Button>
      </Card>

      <div className="relative group">
        <div className="flex items-center gap-4 mb-4 ml-6 uppercase tracking-[0.3em] text-[0.65rem] font-bold text-slate-400">
           <Eye size={12} /> Live Resume Preview
        </div>
        <div ref={resumeRef} className={cn(
          "transition-all duration-700",
          isLocked ? "blur-xl grayscale scale-[0.98] pointer-events-none select-none opacity-40" : ""
        )}>
          <Card className="bg-white min-h-[1100px] p-20 rounded-[3.5rem] shadow-2xl relative overflow-hidden isolate ring-1 ring-slate-100">
            {renderTemplate()}
          </Card>
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
