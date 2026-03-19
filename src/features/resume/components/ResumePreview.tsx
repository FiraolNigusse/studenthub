import React from 'react';
import { 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Terminal, 
  Download
} from 'lucide-react';
import { type ResumeData } from '../types/resume';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  return (
    <div className="lg:col-span-3 space-y-8 animate-fade-in sticky top-32">
      <Card className="p-6 bg-white/80 border-slate-100 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 backdrop-blur-3xl rounded-[2.5rem] isolate">
        <div className="flex items-center gap-4 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 group">
          <FileText size={24} className="text-primary-500 opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="text-lg font-bold text-slate-500">Live Preview: <strong className="text-primary-600 font-extrabold ml-1">Modern Graduate</strong></span>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <Button size="lg" className="flex-1 md:flex-initial h-14 px-10 rounded-[1.5rem] shadow-xl shadow-primary-600/10" icon={Download}>
            Download PDF
          </Button>
        </div>
      </Card>

      <Card className="bg-white min-h-[1000px] p-20 rounded-[3.5rem] shadow-2xl relative overflow-hidden isolate ring-8 ring-primary-50/50 text-left">
        {/* Paper design elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-primary-600" />
        
        <header className="text-center mb-16 pb-12 border-b-2 border-slate-900 group">
          <h2 className="text-5xl font-display font-black text-slate-900 tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500">
            {data.personalInfo.fullName || 'Full Name'}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 text-base font-bold text-slate-500">
            <span>{data.personalInfo.email || 'email@example.com'}</span>
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
            <span>{data.personalInfo.phone || 'Phone Number'}</span>
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
            <span>{data.personalInfo.location || 'Location'}</span>
          </div>
        </header>

        <div className="space-y-16">
          {data.education.length > 0 && (
            <section className="space-y-8 animate-fade-in">
              <h4 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-[0.3em] pb-3 border-b border-slate-100">
                 <GraduationCap size={16} className="text-primary-500" /> Education
              </h4>
              {data.education.map((item) => (
                <div key={item.id} className="group transition-all">
                  <div className="flex justify-between items-end mb-2">
                    <strong className="text-2xl font-display font-black text-slate-800">{item.school || 'School Name'}</strong>
                    <span className="text-lg font-bold text-slate-400">{item.year || 'Year'}</span>
                  </div>
                  <p className="text-xl font-bold text-slate-600 mb-1 italic">{item.degree || 'Degree / Major'}</p>
                  {item.gpa && <p className="text-lg font-black text-primary-600 tracking-tight">GPA: {item.gpa}</p>}
                </div>
              ))}
            </section>
          )}

          {data.experience.length > 0 && (
            <section className="space-y-8 animate-fade-in delay-150">
              <h4 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-[0.3em] pb-3 border-b border-slate-100">
                 <Briefcase size={16} className="text-primary-500" /> Professional Experience
              </h4>
              <div className="space-y-12">
                {data.experience.map((item) => (
                  <div key={item.id} className="group hover:bg-slate-50/50 p-6 -m-6 rounded-3xl transition-all">
                    <div className="flex justify-between items-end mb-2">
                      <strong className="text-2xl font-display font-black text-slate-800">{item.company || 'Company Name'}</strong>
                      <span className="text-lg font-bold text-slate-400">{item.duration || 'Duration'}</span>
                    </div>
                    <p className="text-xl font-bold text-slate-600 mb-6 italic">{item.role || 'Job Title'}</p>
                    <ul className="space-y-4 text-lg font-medium text-slate-500 list-disc ml-5 marker:text-primary-500">
                      {item.description.map((desc, i) => (
                        desc && <li key={i} className="pl-2 leading-relaxed">{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {data.skills.length > 0 && (
            <section className="space-y-8 animate-fade-in delay-300">
              <h4 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-[0.3em] pb-3 border-b border-slate-100">
                 <Terminal size={16} className="text-primary-500" /> Skills
              </h4>
              <div className="flex flex-wrap gap-4">
                {data.skills.map((skill) => (
                  skill.name && (
                    <div key={skill.id} className="px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl group transition-all hover:bg-white hover:shadow-lg hover:border-primary-100 active:scale-95 cursor-default flex flex-col items-center">
                       <span className="text-lg font-black text-slate-800">{skill.name}</span>
                       <span className="text-[0.65rem] font-black uppercase tracking-widest text-primary-500 mt-1">{skill.level || 'Expert'}</span>
                    </div>
                  )
                ))}
              </div>
            </section>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ResumePreview;
