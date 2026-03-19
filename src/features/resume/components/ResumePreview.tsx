import React from 'react';
import { 
  FileText, 
  Download,
  Layout as LayoutIcon
} from 'lucide-react';
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
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, template, setTemplate }) => {
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

  const templates: { id: TemplateType; name: string }[] = [
    { id: 'modern', name: 'Modern' },
    { id: 'classic', name: 'Classic' },
    { id: 'minimal', name: 'Minimal' },
  ];

  return (
    <div className="lg:col-span-3 space-y-8 animate-fade-in sticky top-32">
      <Card className="p-6 bg-white/80 border-slate-100 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 backdrop-blur-3xl rounded-[2.5rem] isolate">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-2xl border border-slate-100 group">
             <LayoutIcon size={20} className="text-primary-500" />
             <span className="text-sm font-bold text-slate-500">Template</span>
           </div>
           <div className="flex gap-2 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-100">
              {templates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTemplate(t.id)}
                  className={cn(
                    'px-6 py-2 rounded-xl text-[0.7rem] font-black uppercase tracking-widest transition-all',
                    template === t.id ? 'bg-white shadow-xl text-primary-600' : 'text-slate-400 hover:text-slate-600'
                  )}
                >
                  {t.name}
                </button>
              ))}
           </div>
        </div>
        <Button size="lg" className="h-14 px-10 rounded-2xl shadow-xl shadow-primary-600/10" icon={Download}>
          Download PDF
        </Button>
      </Card>

      <Card className="bg-white min-h-[1000px] p-20 rounded-[3.5rem] shadow-2xl relative overflow-hidden isolate ring-8 ring-primary-50/50">
        {renderTemplate()}
      </Card>
    </div>
  );
};

export default ResumePreview;
