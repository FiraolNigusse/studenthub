import React from 'react';
import { type Experience } from '../types/resume';
import { Plus, Trash2 } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

interface ExperienceFormProps {
  experience: Experience[];
  addExperience: () => void;
  updateExperience: (id: string, field: keyof Experience, value: any) => void;
  removeExperience: (id: string) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ 
  experience, 
  addExperience, 
  updateExperience, 
  removeExperience 
}) => {
  return (
    <div className="space-y-12">
      {experience.map((item) => (
        <div key={item.id} className="relative p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100 group">
          <button 
            onClick={() => removeExperience(item.id)}
            className="absolute -top-3 -right-3 p-2 bg-white text-red-500 rounded-full shadow-lg border border-red-50 opacity-0 group-hover:opacity-100 transition-all z-10"
          >
            <Trash2 size={16} />
          </button>
          
          <div className="space-y-6">
            <Input 
              label="Company / Organization" 
              value={item.company} 
              onChange={(e) => updateExperience(item.id, 'company', e.target.value)} 
              placeholder="e.g. Google"
            />
            <div className="grid grid-cols-2 gap-4">
              <Input 
                label="Role / Title" 
                value={item.role} 
                onChange={(e) => updateExperience(item.id, 'role', e.target.value)} 
                placeholder="e.g. Summer Intern"
              />
              <Input 
                label="Duration" 
                value={item.duration} 
                onChange={(e) => updateExperience(item.id, 'duration', e.target.value)} 
                placeholder="e.g. Summer 2025"
              />
            </div>
            
            <div className="space-y-2">
               <label className="text-sm font-semibold text-slate-700 ml-1">Work Description</label>
               <div className="space-y-2">
                 {item.description.map((desc, i) => (
                    <div key={i} className="flex gap-2">
                       <Input 
                         value={desc} 
                         placeholder="Bullet point item..."
                         onChange={(e) => {
                            const newDesc = [...item.description];
                            newDesc[i] = e.target.value;
                            updateExperience(item.id, 'description', newDesc);
                         }}
                       />
                       <Button 
                         variant="ghost" 
                         size="icon" 
                         className="h-12 w-12 text-slate-400"
                         onClick={() => {
                            const newDesc = item.description.filter((_, idx) => idx !== i);
                            updateExperience(item.id, 'description', newDesc);
                         }}
                         icon={Trash2}
                       />
                    </div>
                 ))}
                 <Button 
                   variant="ghost" 
                   size="sm" 
                   icon={Plus}
                   onClick={() => {
                      updateExperience(item.id, 'description', [...item.description, '']);
                   }}
                 >
                   Add Bullet Point
                 </Button>
               </div>
            </div>
          </div>
        </div>
      ))}
      <Button variant="outline" onClick={addExperience} icon={Plus} className="w-full h-14 rounded-2xl border-dashed border-2 hover:border-primary-500 font-bold">
        Add Professional Experience
      </Button>
    </div>
  );
};

export default ExperienceForm;
