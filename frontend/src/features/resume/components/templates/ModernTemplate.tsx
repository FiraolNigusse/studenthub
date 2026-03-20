import React from 'react';
import { type ResumeData } from '../../types/resume';
import { MapPin, Mail, Phone, GraduationCap, Briefcase, Terminal } from 'lucide-react';

const ModernTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="text-left animate-fade-in font-sans">
      <header className="mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4 uppercase">{data.personalInfo.fullName || 'Full Name'}</h1>
        <div className="flex flex-wrap gap-4 text-slate-500 font-bold text-sm">
          <span className="flex items-center gap-1.5"><Mail size={14} className="text-primary-500" /> {data.personalInfo.email}</span>
          <span className="flex items-center gap-1.5"><Phone size={14} className="text-primary-500" /> {data.personalInfo.phone}</span>
          <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary-500" /> {data.personalInfo.location}</span>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-2 space-y-12">
          {data.experience.length > 0 && (
            <section>
              <h2 className="text-xs font-black text-primary-600 uppercase tracking-[0.3em] mb-6 border-b pb-2 border-slate-100 flex items-center gap-2">
                <Briefcase size={14} /> Experience
              </h2>
              <div className="space-y-8">
                {data.experience.map((item) => (
                  <div key={item.id}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-bold text-slate-800">{item.company}</h3>
                      <span className="text-sm font-bold text-slate-400">{item.duration}</span>
                    </div>
                    <p className="text-primary-600 font-bold mb-3 italic">{item.role}</p>
                    <ul className="space-y-2 list-disc ml-4 text-slate-600 font-medium text-sm marker:text-primary-400">
                      {item.description.map((desc, i) => (
                        desc && <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.education.length > 0 && (
            <section>
              <h2 className="text-xs font-black text-primary-600 uppercase tracking-[0.3em] mb-6 border-b pb-2 border-slate-100 flex items-center gap-2">
                <GraduationCap size={14} /> Education
              </h2>
              <div className="space-y-6">
                {data.education.map((item) => (
                  <div key={item.id}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-bold text-slate-800">{item.school}</h3>
                      <span className="text-sm font-bold text-slate-400">{item.year}</span>
                    </div>
                    <p className="text-slate-600 font-bold italic">{item.degree}</p>
                    {item.gpa && <p className="text-sm font-bold text-primary-600 mt-1">GPA: {item.gpa}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="col-span-1 space-y-12 bg-slate-50 -m-20 ml-0 p-20 pl-12 h-full min-h-[1000px]">
           {data.skills.length > 0 && (
            <section>
              <h2 className="text-xs font-black text-primary-600 uppercase tracking-[0.3em] mb-8 border-b pb-2 border-slate-200 flex items-center gap-2">
                <Terminal size={14} /> Skills
              </h2>
              <div className="space-y-6">
                {data.skills.map((skill) => (
                  skill.name && (
                    <div key={skill.id} className="space-y-2">
                       <p className="text-sm font-bold text-slate-800">{skill.name}</p>
                       <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                          <div className={`h-full bg-primary-600 rounded-full ${
                             skill.level === 'Expert' ? 'w-full' : 
                             skill.level === 'Advanced' ? 'w-3/4' : 
                             skill.level === 'Intermediate' ? 'w-1/2' : 'w-1/4'
                          }`} />
                       </div>
                    </div>
                  )
                ))}
              </div>
            </section>
           )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
