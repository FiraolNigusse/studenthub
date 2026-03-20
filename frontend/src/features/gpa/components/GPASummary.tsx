import React from 'react';
import { Calculator, Save } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

interface GPASummaryProps {
  gpa: string;
  totalCredits: number;
  totalCourses: number;
  onSave: () => void;
}

const GPASummary: React.FC<GPASummaryProps> = ({ gpa, totalCredits, totalCourses, onSave }) => {
  return (
    <Card className="text-center p-10 bg-gradient-to-br from-white to-primary-50 border-primary-100 shadow-2xl overflow-hidden relative isolate h-fit sticky top-32">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl -z-10 opacity-60 translate-x-8 -translate-y-8" />
      
      <div className="flex flex-col items-center gap-6 mb-10">
        <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-200">
          <Calculator size={32} />
        </div>
        <h3 className="text-2xl font-display font-extrabold text-slate-800 tracking-tight">Your Results</h3>
      </div>
      
      <div className="bg-white p-10 rounded-[2.5rem] border-4 border-double border-primary-200 mb-10 group hover:border-primary-400 transition-all flex flex-col items-center shadow-lg shadow-primary-900/5">
        <span className="text-7xl font-display font-black text-primary-600 tracking-tighter mb-2 group-hover:scale-110 transition-transform">{gpa}</span>
        <span className="text-sm font-black text-primary-400 uppercase tracking-widest">Cumulative GPA</span>
      </div>

      <div className="space-y-4 mb-10">
        <div className="flex justify-between items-center px-6 py-4 bg-white/50 rounded-2xl border border-slate-100 shadow-sm">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Credits</span>
          <span className="text-xl font-display font-black text-slate-700">{totalCredits}</span>
        </div>
        <div className="flex justify-between items-center px-6 py-4 bg-white/50 rounded-2xl border border-slate-100 shadow-sm">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Courses</span>
          <span className="text-xl font-display font-black text-slate-700">{totalCourses}</span>
        </div>
      </div>

      <Button onClick={onSave} size="lg" className="w-full h-16 text-lg tracking-tight shadow-xl shadow-primary-600/20" icon={Save}>
        Save Progress
      </Button>
    </Card>
  );
};

export default GPASummary;
