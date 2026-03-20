import React, { useState } from 'react';
import { 
  Plus, 
  RefreshCw, 
  GraduationCap,
  Save,
  FileText
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import CourseRow from '../features/gpa/components/CourseRow';
import GPASummary from '../features/gpa/components/GPASummary';
import { useGPA } from '../features/gpa/hooks/useGPA';
import AdUnit from '../components/ads/AdUnit';

const GPACalculator: React.FC = () => {
  const { 
    courses, 
    addCourse, 
    removeCourse, 
    updateCourse, 
    reset, 
    gpa, 
    totalCredits 
  } = useGPA([
    { id: '1', name: 'Introduction to CS', credits: 4, grade: 'A' },
    { id: '2', name: 'Calculus I', credits: 4, grade: 'B+' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <Button onClick={reset} variant="ghost" size="sm" icon={RefreshCw}>Reset</Button>
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
                <CourseRow 
                  key={course.id}
                  course={course}
                  onUpdate={updateCourse}
                  onRemove={removeCourse}
                />
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
          <GPASummary 
            gpa={gpa}
            totalCredits={totalCredits}
            totalCourses={courses.length}
            onSave={() => setIsModalOpen(true)}
          />
          
          <div className="flex gap-6 p-8 bg-cyan-600 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400 rounded-full blur-2xl opacity-40 translate-x-12 -translate-y-12" />
            <GraduationCap size={48} className="text-cyan-200 shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
            <div className="space-y-2">
              <h4 className="font-display font-extrabold text-lg flex items-center gap-2">Scholarly Insight</h4>
              <p className="text-cyan-100 text-sm leading-relaxed font-medium">Save this result to your profile to visualize your academic growth over semesters.</p>
            </div>
          </div>
          
          <AdUnit format="rectangle" className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm" />
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
