import React from 'react';
import { type ResumeData } from '../../types/resume';

const ClassicTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="text-left animate-fade-in font-serif max-w-4xl mx-auto space-y-12 bg-white antialiased">
      <header className="text-center mb-16 pb-12 border-b-2 border-[#1a1a1a]">
        <h1 className="text-6xl font-bold text-[#000000] tracking-tight mb-4">{data.personalInfo.fullName || 'Full Name'}</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-base font-bold text-[#64748b]">
          <span>{data.personalInfo.email}</span>
          <span className="w-1.5 h-1.5 bg-[#e2e8f0] rounded-full" />
          <span>{data.personalInfo.phone}</span>
          <span className="w-1.5 h-1.5 bg-[#e2e8f0] rounded-full" />
          <span>{data.personalInfo.location}</span>
        </div>
      </header>

      {data.personalInfo.summary && (
        <section className="space-y-8">
          <h2 className="text-base font-black text-[#000000] uppercase tracking-widest pb-3 border-b-2 border-[#000000]">Professional Summary</h2>
          <p className="text-lg text-[#334155] leading-relaxed italic whitespace-pre-wrap">{data.personalInfo.summary}</p>
        </section>
      )}

      {data.education.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-base font-black text-[#000000] uppercase tracking-widest pb-3 border-b-2 border-[#000000]">Education</h2>
          {data.education.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between items-end mb-2">
                <strong className="text-2xl font-bold text-[#1e293b]">{item.school}</strong>
                <span className="text-lg font-bold text-[#94a3b8] italic">{item.year}</span>
              </div>
              <p className="text-xl font-bold text-[#475569] mb-1 italic">{item.degree}</p>
              {item.gpa && <p className="text-lg font-black text-[#000000] tracking-tight">Cumulative GPA: {item.gpa}</p>}
            </div>
          ))}
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-base font-black text-[#000000] uppercase tracking-widest pb-3 border-b-2 border-[#000000]">Experience</h2>
          <div className="space-y-12">
            {data.experience.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between items-end mb-2">
                  <strong className="text-2xl font-bold text-[#1e293b]">{item.company}</strong>
                  <span className="text-lg font-bold text-[#94a3b8] italic">{item.duration}</span>
                </div>
                <p className="text-xl font-bold text-[#475569] mb-6 italic">{item.role}</p>
                <ul className="space-y-4 text-lg font-normal text-[#334155] list-disc ml-5">
                  {item.description.map((desc, i) => (
                    desc && <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {data.skills.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-base font-black text-[#000000] uppercase tracking-widest pb-3 border-b-2 border-[#000000]">Skills & Tech</h2>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {data.skills.map((skill) => (
              skill.name && (
                <div key={skill.id} className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-[#94a3b8] rounded-full" />
                   <span className="text-lg font-medium text-[#1e293b]">{skill.name}</span>
                   <span className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] italic">({skill.level})</span>
                </div>
              )
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
