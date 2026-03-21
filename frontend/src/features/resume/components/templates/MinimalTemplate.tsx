import React from 'react';
import { type ResumeData } from '../../types/resume';

const MinimalTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="text-left animate-fade-in font-sans max-w-4xl mx-auto space-y-16 bg-white antialiased">
      <header className="mb-24 flex justify-between items-start border-b border-[#f1f5f9] pb-12">
        <h1 className="text-8xl font-black text-[#0f172a] tracking-tighter leading-[0.85]">{data.personalInfo.fullName || 'Full Name'}</h1>
        <div className="text-right space-y-2 pt-6">
          <p className="text-base font-black text-[#0f172a] uppercase tracking-widest">{data.personalInfo.email}</p>
          <p className="text-sm font-bold text-[#64748b]">{data.personalInfo.phone}</p>
          <p className="text-sm font-bold text-[#64748b]">{data.personalInfo.location}</p>
        </div>
      </header>

      {data.personalInfo.summary && (
        <section className="space-y-12">
          <h2 className="text-sm font-black text-[#0f172a] border-l-4 border-[#0f172a] pl-6 uppercase tracking-widest">About</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1" />
            <div className="col-span-3">
              <p className="text-base text-[#475569] leading-relaxed whitespace-pre-wrap">{data.personalInfo.summary}</p>
            </div>
          </div>
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="space-y-12">
          <h2 className="text-sm font-black text-[#0f172a] border-l-4 border-[#0f172a] pl-6 uppercase tracking-widest">Experience</h2>
          <div className="space-y-12">
            {data.experience.map((item) => (
              <div key={item.id} className="grid grid-cols-4 gap-8">
                <div className="col-span-1 border-r border-[#f1f5f9] pr-6">
                  <p className="text-sm font-black text-[#0f172a] mb-2 uppercase tracking-widest">{item.duration}</p>
                  <p className="text-xs font-bold text-[#94a3b8] uppercase tracking-widest">{item.location || 'Remote'}</p>
                </div>
                <div className="col-span-3 space-y-4">
                  <div className="flex flex-col">
                    <strong className="text-2xl font-black text-[#0f172a] tracking-tight">{item.role}</strong>
                    <span className="text-base font-bold text-[#64748b] uppercase tracking-widest">{item.company}</span>
                  </div>
                  <ul className="space-y-4 text-base font-medium text-[#475569] list-disc ml-5 marker:text-[#0f172a]">
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
          <h2 className="text-sm font-black text-[#0f172a] border-l-4 border-[#0f172a] pl-6 uppercase tracking-widest">Education</h2>
          {data.education.map((item) => (
            <div key={item.id} className="grid grid-cols-4 gap-8">
              <div className="col-span-1 border-r border-[#f1f5f9] pr-6">
                 <p className="text-sm font-black text-[#0f172a] uppercase tracking-widest">{item.year}</p>
              </div>
              <div className="col-span-3">
                 <strong className="text-2xl font-black text-[#0f172a] tracking-tight">{item.school}</strong>
                 <p className="text-base font-bold text-[#64748b] uppercase tracking-widest mt-2 italic">{item.degree}</p>
                 {item.gpa && <p className="text-sm font-black text-[#0f172a] mt-2 tracking-widest">GPA: {item.gpa}</p>}
              </div>
            </div>
          ))}
        </section>
      )}
      
      {data.skills.length > 0 && (
        <section className="space-y-12">
          <h2 className="text-sm font-black text-[#0f172a] border-l-4 border-[#0f172a] pl-6 uppercase tracking-widest">Skills & Tech</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1 pr-6" />
            <div className="col-span-3 flex flex-wrap gap-4">
              {data.skills.map((skill) => (
                skill.name && (
                  <div key={skill.id} className="px-6 py-3 bg-[#0f172a] text-white rounded-full transition-all cursor-default flex items-center justify-center">
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
