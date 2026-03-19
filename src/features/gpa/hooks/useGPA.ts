import { useState, useCallback } from 'react';
import { type Course, calculateGPA, getTotalCredits } from '../utils/gpaUtils';

export const useGPA = (initialCourses: Course[] = []) => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  const addCourse = useCallback(() => {
    const newCourse: Course = {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      credits: 3,
      grade: 'A'
    };
    setCourses(prev => [...prev, newCourse]);
  }, []);

  const removeCourse = useCallback((id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  }, []);

  const updateCourse = useCallback((id: string, field: keyof Course, value: any) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, [field]: value } : c));
  }, []);

  const reset = useCallback(() => {
    setCourses([]);
  }, []);

  const gpa = calculateGPA(courses);
  const totalCredits = getTotalCredits(courses);

  return {
    courses,
    addCourse,
    removeCourse,
    updateCourse,
    reset,
    gpa,
    totalCredits
  };
};
