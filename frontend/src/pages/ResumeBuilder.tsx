import React, { useState } from 'react';
import { 
  FileText, 
  Sparkles, 
  GraduationCap,
  Briefcase,
  Terminal,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  RefreshCcw
} from 'lucide-react';
import Button, { cn } from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useResume } from '../features/resume/hooks/useResume';
import PersonalInfoForm from '../features/resume/components/PersonalInfoForm';
import EducationForm from '../features/resume/components/EducationForm';
import ExperienceForm from '../features/resume/components/ExperienceForm';
import SkillsForm from '../features/resume/components/SkillsForm';
import ResumePreview from '../features/resume/components/ResumePreview';
import AdUnit from '../components/ads/AdUnit';

type Section = 'personal' | 'education' | 'experience' | 'skills';

const ResumeBuilder: React.FC = () => {
  const {
    data,
    template,
    isPremium,
    isSaving,
    upgradeToPremium,
    saveResume,
    setTemplate,
    updatePersonalInfo,
    addEducation,
    updateEducation,
    removeEducation,
    addExperience,
    updateExperience,
    removeExperience,
    addSkill,
    updateSkill,
    removeSkill,
    clearResume
  } = useResume();

  const [activeSection, setActiveSection] = useState<Section>('personal');

  const sections: { id: Section; name: string; icon: any }[] = [
    { id: 'personal', name: 'Personal info', icon: FileText },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'experience', name: 'Work Experience', icon: Briefcase },
    { id: 'skills', name: 'Skills & Tech', icon: Terminal },
  ];

  const renderForm = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfoForm personalInfo={data.personalInfo} onUpdate={updatePersonalInfo} />;
      case 'education':
        return (
          <EducationForm 
            education={data.education} 
            addEducation={addEducation} 
            updateEducation={updateEducation} 
            removeEducation={removeEducation} 
          />
        );
      case 'experience':
        return (
          <ExperienceForm 
            experience={data.experience} 
            addExperience={addExperience} 
            updateExperience={updateExperience} 
            removeExperience={removeExperience} 
          />
        );
      case 'skills':
        return (
          <SkillsForm 
            skills={data.skills} 
            addSkill={addSkill} 
            updateSkill={updateSkill} 
            removeSkill={removeSkill} 
          />
        );
      default:
        return null;
    }
  };

  const nextSection = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex < sections.length - 1) setActiveSection(sections[currentIndex + 1].id);
  };

  const prevSection = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex > 0) setActiveSection(sections[currentIndex - 1].id);
  };

  return (
    <div className="container mx-auto px-6 py-24 animate-fade-in max-w-[1600px]">
      <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <div className="flex gap-2">
           <h1 className="text-5xl lg:text-7xl font-display font-black tracking-tighter text-slate-900 leading-tight">
             Resume <span className="gradient-text">Builder</span>
           </h1>
           {isPremium && (
              <div className="bg-primary-50 text-primary-600 px-3 py-1.5 rounded-xl h-fit border border-primary-100 flex items-center gap-1.5 text-[0.6rem] font-black uppercase tracking-widest translate-y-2">
                 <ShieldCheck size={12} /> PRO
              </div>
           )}
        </div>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          Craft a professional, ATS-optimized resume in minutes with our specialized editor for students and graduates.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
           <Button 
             variant="ghost" 
             className="h-12 px-8 rounded-xl font-bold text-slate-500 hover:text-red-500"
             onClick={clearResume}
             icon={RefreshCcw}
           >
             Start From Scratch
           </Button>
           <Button 
             variant="primary" 
             className="h-12 px-8 rounded-xl font-bold"
             onClick={() => saveResume(data.personalInfo.fullName + ' Resume')}
             disabled={isSaving}
           >
             {isSaving ? 'Saving...' : 'Save Draft'}
           </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start h-full pb-20 isolate">
        {/* Editor sidebar + Form */}
        <div className="lg:col-span-2 space-y-8 h-full flex flex-col">
          <Card className="p-10 ring-1 ring-slate-100 shadow-[0_40px_80px_rgba(0,0,0,0.06)] overflow-hidden rounded-[3rem] isolate flex-1">
             <div className="flex bg-slate-100/50 p-2 rounded-[2rem] gap-2 mb-12">
                {sections.map((section) => (
                  <button 
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={cn(
                      'flex-1 flex flex-col items-center justify-center py-4 rounded-3xl transition-all gap-2 h-20',
                      activeSection === section.id ? 'bg-white shadow-xl text-primary-600' : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
                    )}
                  >
                    <section.icon size={20} className={activeSection === section.id ? 'text-primary-600' : 'text-slate-300'} />
                    <span className="text-[0.65rem] font-black uppercase tracking-widest">{section.name}</span>
                  </button>
                ))}
             </div>
             
             <div className="min-h-[400px] py-6 animate-fade-in relative z-10 transition-all">
                <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-50">
                  <div className="flex items-center gap-4">
                    <Sparkles size={24} className="text-secondary-light" />
                    <h3 className="text-2xl font-display font-black text-slate-800 tracking-tight uppercase tracking-[0.2em] text-sm">
                      {sections.find(s => s.id === activeSection)?.name}
                    </h3>
                  </div>
                  {!isPremium && activeSection === 'experience' && (
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-amber-500 bg-amber-50 px-3 py-1 rounded-lg">Pro Feature</span>
                  )}
                </div>
                {renderForm()}
             </div>

             <div className="flex justify-between items-center mt-12 pt-12 border-t border-slate-50">
                <Button variant="ghost" className="h-14 px-8 rounded-2xl gap-3 font-bold" onClick={prevSection} disabled={activeSection === sections[0].id}>
                   <ChevronLeft size={20} /> Back
                </Button>
                <div className="flex gap-2">
                   {sections.map(s => (
                      <div key={s.id} className={cn('w-2 h-2 rounded-full transition-all', s.id === activeSection ? 'bg-primary-600 w-8' : 'bg-slate-200')} />
                   ))}
                </div>
                <Button className="h-14 px-10 rounded-2xl gap-3 font-bold shadow-lg shadow-primary-500/10" onClick={nextSection} disabled={activeSection === sections[sections.length - 1].id}>
                  Next Step <ChevronRight size={20} />
                </Button>
             </div>
          </Card>
          
          <AdUnit format="horizontal" className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm" />
        </div>

        {/* Live Preview */}
        <ResumePreview 
          data={data} 
          template={template} 
          setTemplate={setTemplate} 
          isPremium={isPremium}
          onUpgrade={upgradeToPremium}
        />
      </div>
    </div>
  );
};

export default ResumeBuilder;
