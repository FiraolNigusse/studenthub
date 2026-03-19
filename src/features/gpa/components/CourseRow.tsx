import React, { memo } from 'react';
import { Trash2 } from 'lucide-react';
import { type Course, gradePoints } from '../utils/gpaUtils';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

interface CourseRowProps {
  course: Course;
  onUpdate: (id: string, field: keyof Course, value: any) => void;
  onRemove: (id: string) => void;
}

const CourseRow: React.FC<CourseRowProps> = memo(({ course, onUpdate, onRemove }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 bg-slate-50/50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-lg transition-all items-center">
      <div className="flex-1 w-full text-left">
        <Input 
          placeholder="e.g. Physics 101" 
          value={course.name}
          label="Course Name"
          onChange={(e) => onUpdate(course.id, 'name', e.target.value)}
        />
      </div>
      <div className="w-full sm:w-32 text-left">
        <Input 
          type="number" 
          value={course.credits}
          label="Credits"
          onChange={(e) => onUpdate(course.id, 'credits', parseFloat(e.target.value) || 0)}
          min="0"
        />
      </div>
      <div className="w-full sm:w-40 text-left">
        <Select 
          value={course.grade}
          label="Grade"
          onChange={(e) => onUpdate(course.id, 'grade', e.target.value)}
        >
          {Object.keys(gradePoints).map(grade => (
            <option key={grade} value={grade}>{grade}</option>
          ))}
        </Select>
      </div>
      <div className="pt-6 sm:pt-4">
        <Button 
          onClick={() => onRemove(course.id)}
          variant="ghost"
          size="icon"
          className="text-red-400 hover:text-red-600 hover:bg-red-50 h-12 w-12"
          icon={Trash2}
        />
      </div>
    </div>
  );
});

CourseRow.displayName = 'CourseRow';

export default CourseRow;
