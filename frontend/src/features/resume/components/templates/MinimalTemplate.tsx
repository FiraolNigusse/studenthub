import React from 'react';
import { type ResumeData } from '../../types/resume';

const MinimalTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="text-left animate-fade-in font-sans max-w-4xl mx-auto space-y-16">
      <header className="mb-24 flex justify-between items-start">
        <h1 className="text-8xl font-black text-slate-900 tracking-tighter hover:text-primary-600 transition-colors cursor-default leading-[0.85]">{data.personalInfo.fullName || 'Full Name'}</h1>
        <div className="text-right space-y-2 pt-6">
          <p className="text-base font-black text-slate-900 uppercase tracking-widest">{data.personalInfo.email}</p>
          <p className="text-sm font-bold text-slate-400">{data.personalInfo.phone}</p>
          <p className="text-sm font-bold text-slate-400">{data.personalInfo.location}</p>
        </div>
      </header>

      {data.experience.length > 0 && (
        <section className="space-y-12">
          <h2 className="text-sm font-black text-slate-900 border-l-4 border-slate-900 pl-6 uppercase tracking-widest">Experience</h2>
          <div className="space-y-12">
            {data.experience.map((item) => (
              <div key={item.id} className="grid grid-cols-4 gap-8">
                <div className="col-span-1 border-r border-slate-100 pr-6">
                  <p className="text-sm font-black text-slate-900 mb-2 uppercase tracking-widest">{item.duration}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.location || 'Remote'}</p>
                </div>
                <div className="col-span-3 space-y-4">
                  <div className="flex flex-col">
                    <strong className="text-2xl font-black text-slate-900 tracking-tight">{item.role}</strong>
                    <span className="text-base font-bold text-primary-600 uppercase tracking-widest">{item.company}</span>
                  </div>
                  <ul className="space-y-4 text-base font-medium text-slate-500 list-disc ml-5 marker:text-slate-900">
                    {item.description.map((desc, i) => (
                      desc && <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education.length > 0 && (
        <section className="space-y-12">
          <h2 className="text-sm font-black text-slate-900 border-l-4 border-slate-900 pl-6 uppercase tracking-widest">Education</h2>
          {data.education.map((item) => (
            <div key={item.id} className="grid grid-cols-4 gap-8">
              <div className="col-span-1 border-r border-slate-100 pr-6">
                 <p className="text-sm font-black text-slate-900 uppercase tracking-widest">{item.year}</p>
              </div>
              <div className="col-span-3">
                 <strong className="text-2xl font-black text-slate-900 tracking-tight">{item.school}</strong>
                 <p className="text-base font-bold text-slate-500 uppercase tracking-widest mt-2 italic">{item.degree}</p>
                 {item.gpa && <p className="text-sm font-black text-primary-600 mt-2 tracking-widest">GPA: {item.gpa}</p>}
              </div>
            </div>
          ))}
        </section>
      )}
      
      {data.skills.length > 0 && (
        <section className="space-y-12">
          <h2 className="text-sm font-black text-slate-900 border-l-4 border-slate-900 pl-6 uppercase tracking-widest">Skills & Tech</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1 pr-6" />
            <div className="col-span-3 flex flex-wrap gap-4">
              {data.skills.map((skill) => (
                skill.name && (
                  <div key={skill.id} className="px-6 py-3 bg-slate-900 text-white rounded-full transition-all hover:bg-primary-600 hover:scale-105 active:scale-95 cursor-default flex items-center justify-center">
                     <span className="text-xs font-black uppercase tracking-widest">{skill.name}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
