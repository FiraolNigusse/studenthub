import React, { useState } from 'react';
import { 
  Calculator, 
  Plus, 
  Trash2, 
  RefreshCw, 
  GraduationCap,
  Save,
  FileText
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Modal from '../components/ui/Modal';

interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

const gradePoints: Record<string, number> = {
  'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0
};

const GPACalculator: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Introduction to CS', credits: 4, grade: 'A' },
    { id: '2', name: 'Calculus I', credits: 4, grade: 'B+' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCourse = () => {
    const newCourse: Course = {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      credits: 3,
      grade: 'A'
    };
    setCourses([...courses, newCourse]);
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const updateCourse = (id: string, field: keyof Course, value: any) => {
    setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    
    courses.forEach(course => {
      const gpa = gradePoints[course.grade] || 0;
      totalPoints += gpa * course.credits;
      totalCredits += course.credits;
    });
    
    return totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="container mx-auto px-6 py-24 animate-fade-in max-w-6xl">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
          GPA <span className="gradient-text">Calculator</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium leading-relaxed">
          Manage your academic performance with precision. Track semester results, simulate future outcomes, and stay on top of your goals.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <Card className="lg:col-span-2 p-10 ring-1 ring-slate-100 shadow-xl overflow-hidden hover:ring-primary-100 active:scale-[0.995]">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
            <h3 className="text-2xl font-display font-extrabold text-slate-800 flex items-center gap-3">
              <FileText size={24} className="text-primary-500" /> Course List
            </h3>
            <div className="flex gap-3">
              <Button onClick={addCourse} icon={Plus} size="sm" className="hidden sm:flex">Add Course</Button>
              <Button onClick={() => setCourses([])} variant="ghost" size="sm" icon={RefreshCw}>Reset</Button>
            </div>
          </div>

          <div className="space-y-6">
            {courses.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center gap-4 bg-slate-50/50 rounded-[2rem] border-2 border-dashed border-slate-200">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-300 mb-2">
                  <Plus size={32} />
                </div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No courses added yet</p>
                <Button onClick={addCourse} variant="outline" size="md">Add your first course</Button>
              </div>
            ) : (
              courses.map((course) => (
                <div key={course.id} className="flex flex-col sm:flex-row gap-6 p-6 bg-slate-50/50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-lg transition-all items-center">
                  <div className="flex-1 w-full">
                    <Input 
                      placeholder="e.g. Physics 101" 
                      value={course.name}
                      label="Course Name"
                      onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    />
                  </div>
                  <div className="w-full sm:w-32">
                    <Input 
                      type="number" 
                      value={course.credits}
                      label="Credits"
                      onChange={(e) => updateCourse(course.id, 'credits', parseFloat(e.target.value))}
                      min="0"
                    />
                  </div>
                  <div className="w-full sm:w-40">
                    <Select 
                      value={course.grade}
                      label="Grade"
                      onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                    >
                      {Object.keys(gradePoints).map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </Select>
                  </div>
                  <div className="pt-6 sm:pt-4">
                    <Button 
                      onClick={() => removeCourse(course.id)}
                      variant="ghost"
                      size="icon"
                      className="text-red-400 hover:text-red-600 hover:bg-red-50"
                      icon={Trash2}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
          
          {courses.length > 0 && (
             <div className="mt-10 sm:hidden">
                <Button onClick={addCourse} icon={Plus} size="lg" className="w-full">Add Course</Button>
             </div>
          )}
        </Card>

        <div className="space-y-8 sticky top-32">
          <Card className="text-center p-10 bg-gradient-to-br from-white to-primary-50 border-primary-100 shadow-2xl overflow-hidden relative isolate">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl -z-10 opacity-60 translate-x-8 -translate-y-8" />
            
            <div className="flex flex-col items-center gap-6 mb-10">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-200">
                <Calculator size={32} />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-slate-800 tracking-tight">Your Results</h3>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border-4 border-double border-primary-200 mb-10 group hover:border-primary-400 transition-all flex flex-col items-center shadow-lg shadow-primary-900/5">
              <span className="text-7xl font-display font-black text-primary-600 tracking-tighter mb-2 group-hover:scale-110 transition-transform">{calculateGPA()}</span>
              <span className="text-sm font-black text-primary-400 uppercase tracking-widest">Cumulative GPA</span>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex justify-between items-center px-6 py-4 bg-white/50 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Credits</span>
                <span className="text-xl font-display font-black text-slate-700">{courses.reduce((acc, c) => acc + c.credits, 0)}</span>
              </div>
              <div className="flex justify-between items-center px-6 py-4 bg-white/50 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Courses</span>
                <span className="text-xl font-display font-black text-slate-700">{courses.length}</span>
              </div>
            </div>

            <Button onClick={() => setIsModalOpen(true)} size="lg" className="w-full h-16 text-lg tracking-tight shadow-xl shadow-primary-600/20" icon={Save}>
              Save Progress
            </Button>
          </Card>
          
          <div className="flex gap-6 p-8 bg-cyan-600 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400 rounded-full blur-2xl opacity-40 translate-x-12 -translate-y-12" />
            <GraduationCap size={48} className="text-cyan-200 shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
            <div className="space-y-2">
              <h4 className="font-display font-extrabold text-lg flex items-center gap-2">Scholarly Insight</h4>
              <p className="text-cyan-100 text-sm leading-relaxed font-medium">Save this result to your profile to visualize your academic growth over semesters.</p>
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Success!"
      >
        <div className="text-center py-6 space-y-6">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Save size={40} className="animate-bounce" />
          </div>
          <p className="text-slate-600 font-medium text-lg leading-relaxed">
            Your current GPA calculation has been saved to your academic profile. Keep up the excellent work!
          </p>
          <Button onClick={() => setIsModalOpen(false)} size="lg" className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200">
            Great, thanks!
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default GPACalculator;
