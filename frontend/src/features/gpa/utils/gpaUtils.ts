export const gradePoints: Record<string, number> = {
  'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0
};

export interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

export const calculateGPA = (courses: Course[]) => {
  let totalPoints = 0;
  let totalCredits = 0;
  
  courses.forEach(course => {
    const gpa = gradePoints[course.grade] || 0;
    totalPoints += gpa * (course.credits || 0);
    totalCredits += (course.credits || 0);
  });
  
  return totalCredits === 0 ? "0.00" : (totalPoints / totalCredits).toFixed(2);
};

export const getTotalCredits = (courses: Course[]) => {
  return courses.reduce((acc, c) => acc + (c.credits || 0), 0);
};
