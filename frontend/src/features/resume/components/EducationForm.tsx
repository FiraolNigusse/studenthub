import React from 'react';
import { type Education } from '../types/resume';
import { Plus, Trash2 } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

interface EducationFormProps {
  education: Education[];
  addEducation: () => void;
  updateEducation: (id: string, field: keyof Education, value: string) => void;
  removeEducation: (id: string) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ 
  education, 
  addEducation, 
  updateEducation, 
  removeEducation 
}) => {
  return (
    <div className="space-y-12">
      {education.map((item) => (
        <div key={item.id} className="relative p-6 bg-slate-50/50 rounded-3xl border border-slate-100 group">
          <button 
            onClick={() => removeEducation(item.id)}
            className="absolute -top-3 -right-3 p-2 bg-white text-red-500 rounded-full shadow-lg border border-red-50 opacity-0 group-hover:opacity-100 transition-all z-10"
          >
            <Trash2 size={16} />
          </button>
          
          <div className="space-y-6">
            <Input 
              label="School Name" 
              value={item.school} 
              onChange={(e) => updateEducation(item.id, 'school', e.target.value)} 
              placeholder="e.g. Stanford University"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input 
                label="Degree / Major" 
                value={item.degree} 
                onChange={(e) => updateEducation(item.id, 'degree', e.target.value)} 
                placeholder="e.g. B.S. in Computer Science"
              />
              <Input 
                label="Year / Duration" 
                value={item.year} 
                onChange={(e) => updateEducation(item.id, 'year', e.target.value)} 
                placeholder="e.g. 2022 - Present"
              />
            </div>
            <Input 
              label="GPA (Optional)" 
              value={item.gpa} 
              onChange={(e) => updateEducation(item.id, 'gpa', e.target.value)} 
              placeholder="e.g. 3.95/4.0"
            />
          </div>
        </div>
      ))}
      <Button variant="outline" onClick={addEducation} icon={Plus} className="w-full h-14 rounded-2xl border-dashed border-2 hover:border-primary-500 font-bold">
        Add Education
      </Button>
    </div>
  );
};

export default EducationForm;
