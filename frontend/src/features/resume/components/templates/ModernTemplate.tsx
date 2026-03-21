import React from 'react';
import { type ResumeData } from '../../types/resume';

const ModernTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="text-left font-sans text-[#1a1a1a] leading-relaxed max-w-[850px] mx-auto p-2 antialiased">
      <header className="mb-12 text-center border-b border-[#e2e8f0] pb-10">
        <h1 className="text-[36pt] font-bold text-[#000000] tracking-tighter mb-4 leading-none uppercase">
          {data.personalInfo.fullName || 'Full Name'}
        </h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#4b5563] text-[11pt] font-medium">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
      </header>

      {/* Summary Section */}
      {data.personalInfo.summary && (
        <section className="mb-10">
          <h2 className="text-[13pt] font-bold text-[#000000] uppercase tracking-[0.2em] mb-4 border-b-2 border-[#1a1a1a] pb-2">
            Professional Summary
          </h2>
          <p className="text-[10.5pt] text-[#1f2937] leading-[1.6] font-normal whitespace-pre-wrap">
            {data.personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience Section */}
      {data.experience.length > 0 && (
        <section className="mb-10">
          <h2 className="text-[13pt] font-bold text-[#000000] uppercase tracking-[0.2em] mb-6 border-b-2 border-[#1a1a1a] pb-2">
            Experience
          </h2>
          <div className="space-y-10">
            {data.experience.map((item) => (
              <div key={item.id} className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[13pt] font-bold text-[#000000] tracking-tight">{item.company}</h3>
                  <span className="text-[10.5pt] font-medium text-[#4b5563] italic">{item.duration}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <p className="text-[11.5pt] font-bold text-[#374151] uppercase tracking-wide">{item.role}</p>
                  <span className="text-[10pt] font-medium text-[#6b7280]">{item.location || 'Remote'}</span>
                </div>
                <ul className="space-y-2 list-disc ml-5 text-[10.5pt] text-[#1f2937]">
                  {item.description.map((desc, i) => (
                    desc && <li key={i} className="pl-1 leading-[1.5]">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education Section */}
      {data.education.length > 0 && (
        <section className="mb-10">
          <h2 className="text-[13pt] font-bold text-[#000000] uppercase tracking-[0.2em] mb-6 border-b-2 border-[#1a1a1a] pb-2">
            Education
          </h2>
          <div className="space-y-8">
            {data.education.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[13pt] font-bold text-[#000000] tracking-tight">{item.school}</h3>
                  <span className="text-[10.5pt] font-medium text-[#4b5563] italic">{item.year}</span>
                </div>
                <div className="flex justify-between items-baseline">
                   <p className="text-[11pt] font-medium text-[#374151] italic">{item.degree}</p>
                   {item.gpa && <span className="text-[10pt] font-bold text-[#374151]">GPA: {item.gpa}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      {data.skills.length > 0 && (
        <section className="mb-10">
          <h2 className="text-[13pt] font-bold text-[#000000] uppercase tracking-[0.2em] mb-6 border-b-2 border-[#1a1a1a] pb-2">
            Skills & Competencies
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {data.skills.map((skill) => (
              skill.name && (
                <div key={skill.id} className="flex items-center justify-between border-b border-[#f1f5f9] pb-2">
                  <span className="text-[11pt] font-medium text-[#111827]">{skill.name}</span>
                  {skill.level && (
                    <span className="text-[9pt] font-bold text-[#6b7280] uppercase tracking-tighter">
                      {skill.level}
                    </span>
                  )}
                </div>
              )
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ModernTemplate;
