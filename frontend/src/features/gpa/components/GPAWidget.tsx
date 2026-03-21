import React, { useState } from 'react';
import { 
  Plus, 
  RefreshCw, 
  FileText,
  Save
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import Modal from '../../../components/ui/Modal';
import CourseRow from './CourseRow';
import GPASummary from './GPASummary';
import { useGPA } from '../hooks/useGPA';

interface GPAWidgetProps {
  initialCourses?: { id: string; name: string; credits: number; grade: string }[];
  showActions?: boolean;
}

const GPAWidget: React.FC<GPAWidgetProps> = ({ 
  initialCourses = [
    { id: '1', name: 'Software Engineering', credits: 4, grade: 'A' },
    { id: '2', name: 'Database Systems', credits: 4, grade: 'A-' },
  ],
  showActions = true
}) => {
  const { 
    courses, 
    addCourse, 
    removeCourse, 
    updateCourse, 
    reset, 
    gpa, 
    totalCredits 
  } = useGPA(initialCourses);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      <Card className="lg:col-span-2 p-6 md:p-10 ring-1 ring-slate-100 shadow-xl overflow-hidden hover:ring-primary-100 transition-all bg-white rounded-[2.5rem]">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <h3 className="text-xl font-display font-extrabold text-slate-800 flex items-center gap-3">
            <FileText size={20} className="text-primary-500" /> My Courses
          </h3>
          <div className="flex gap-2">
            <Button onClick={addCourse} icon={Plus} size="sm" className="hidden sm:flex">Add Course</Button>
            <Button onClick={reset} variant="ghost" size="sm" icon={RefreshCw}>Reset</Button>
          </div>
        </div>

        <div className="space-y-4">
          {courses.length === 0 ? (
            <div className="py-12 text-center flex flex-col items-center gap-3 bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200">
              <Plus size={24} className="text-slate-300" />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Start by adding a course</p>
              <Button onClick={addCourse} variant="outline" size="sm">Add Course</Button>
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
           <div className="mt-8 sm:hidden">
              <Button onClick={addCourse} icon={Plus} size="lg" className="w-full h-14 rounded-2xl">Add Course</Button>
           </div>
        )}
      </Card>

      <div className="space-y-6">
        <GPASummary 
          gpa={gpa}
          totalCredits={totalCredits}
          totalCourses={courses.length}
          onSave={() => setIsModalOpen(true)}
        />
        
        {showActions && (
          <div className="p-8 bg-slate-900 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500 rounded-full blur-3xl opacity-20 translate-x-12 -translate-y-12" />
            <div className="space-y-4 relative z-10">
              <h4 className="font-display font-extrabold text-lg">Pro Tip</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">Higher credits have more impact on your final GPA. Focus on excelling in 4-credit courses!</p>
            </div>
          </div>
        )}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Calculation Saved"
      >
        <div className="text-center py-6 space-y-6">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Save size={32} className="animate-bounce" />
          </div>
          <p className="text-slate-600 font-medium text-lg">
            Your GPA calculation has been saved successfully.
          </p>
          <Button onClick={() => setIsModalOpen(false)} size="lg" className="w-full h-14 bg-emerald-600 hover:bg-emerald-700">
            Continue
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default GPAWidget;
