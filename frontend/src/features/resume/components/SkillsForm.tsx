import React from 'react';
import { type Skill } from '../types/resume';
import { Plus, Trash2 } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Button, { cn } from '../../../components/ui/Button';

interface SkillsFormProps {
  skills: Skill[];
  addSkill: () => void;
  updateSkill: (id: string, field: keyof Skill, value: string) => void;
  removeSkill: (id: string) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ 
  skills, 
  addSkill, 
  updateSkill, 
  removeSkill 
}) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((item) => (
          <div key={item.id} className="relative p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100 group shadow-sm transition-all hover:bg-white group">
            <button 
              onClick={() => removeSkill(item.id)}
              className="absolute -top-3 -right-3 p-2 bg-white text-red-500 rounded-full shadow-lg border border-red-50 opacity-0 group-hover:opacity-100 transition-all z-10"
            >
              <Trash2 size={16} />
            </button>
            <div className="space-y-4">
              <Input 
                label="Skill Name" 
                value={item.name} 
                onChange={(e) => updateSkill(item.id, 'name', e.target.value)} 
                placeholder="e.g. React"
              />
              <div className="flex gap-1.5 isolate p-1.5 bg-white border border-slate-100 rounded-2xl shadow-sm overflow-x-auto no-scrollbar">
                {['Expert', 'Advanced', 'Intermediate', 'Beginner'].map((level) => (
                   <button 
                     key={level}
                     onClick={() => updateSkill(item.id, 'level', level)}
                     className={cn(
                       'flex-1 px-3 py-2 rounded-xl text-[0.6rem] sm:text-[0.7rem] font-bold transition-all h-full whitespace-nowrap',
                       item.level === level ? 'bg-primary-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                     )}
                   >
                     {level}
                   </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" onClick={addSkill} icon={Plus} className="w-full h-14 rounded-[1.5rem] border-dashed border-2 hover:border-primary-500 font-bold">
        Add Skill
      </Button>
    </div>
  );
};

export default SkillsForm;
