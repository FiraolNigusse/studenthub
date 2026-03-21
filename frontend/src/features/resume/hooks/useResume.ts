import { useState, useCallback } from 'react';
import { 
  type PersonalInfo, 
  type Education, 
  type Experience, 
  type Skill, 
  type ResumeData 
} from '../types/resume';
import { AuthService, PaymentService, ResumeService } from '../../../services';

const initialData: ResumeData = {
  personalInfo: {
    fullName: 'Alexander Student',
    email: 'alex.student@university.edu',
    phone: '+1 555-0123',
    location: 'San Francisco, CA',
    summary: 'Highly motivated computer science student with a strong foundation in software development and experience in scalable cloud infrastructure. Eager to contribute to innovative projects and grow as a professional engineer.'
  },
  education: [
    {
      id: '1',
      school: 'Stanford University',
      degree: 'B.S. in Computer Science',
      year: '2022 - Present',
      gpa: '3.95/4.0'
    }
  ],
  experience: [
    {
      id: '1',
      company: 'Google',
      role: 'Summer Intern (SWE)',
      duration: 'Summer 2025',
      description: [
        'Developed scalable backend infrastructure using Go and Kubernetes.',
        'Optimized mission-critical API endpoints, reducing latency by 40%.'
      ]
    }
  ],
  skills: [
    { id: '1', name: 'React', level: 'Expert' },
    { id: '2', name: 'TypeScript', level: 'Advanced' },
    { id: '3', name: 'Go', level: 'Intermediate' }
  ]
};

export type TemplateType = 'modern' | 'classic' | 'minimal';

export const useResume = () => {
  const user = AuthService.getCurrentUser();
  const isPremium = user?.is_premium || false;

  // Use a refined initial state that can be cleared
  const [data, setData] = useState<ResumeData>(() => {
    // If user is logged in, try to use their real info instead of dummy Alexander
    if (user && user.email) {
      return {
        ...initialData,
        personalInfo: {
          ...initialData.personalInfo,
          fullName: user.first_name ? `${user.first_name} ${user.last_name || ''}`.trim() : (user.email.split('@')[0]),
          email: user.email,
          phone: '',
          location: '',
          summary: ''
        },
        // Optionally clear the dummy sections if user is logged in for first time
        education: [],
        experience: [],
        skills: []
      };
    }
    return initialData;
  });

  const [template, setTemplate] = useState<TemplateType>('modern');
  const [isSaving, setIsSaving] = useState(false);
  
  const clearResume = useCallback(() => {
    if (window.confirm('Are you sure you want to clear all data and start from scratch?')) {
        setData({
          personalInfo: { fullName: '', email: '', phone: '', location: '', summary: '' },
          education: [],
          experience: [],
          skills: []
        });
    }
  }, []);

  const upgradeToPremium = useCallback(async () => {
    try {
      const { checkout_url } = await PaymentService.createCheckoutSession();
      window.location.href = checkout_url;
    } catch (error) {
      console.error('Failed to start checkout:', error);
      alert('Could not initiate checkout. Please try again or sign in.');
    }
  }, []);

  const saveResume = useCallback(async (title: string = 'My Resume') => {
    if (!AuthService.isAuthenticated()) {
      alert('You must be signed in to save your resume.');
      return;
    }
    
    setIsSaving(true);
    try {
      await ResumeService.createResume({
        title,
        data,
        template,
      });
      alert('Resume saved successfully!');
    } catch (error) {
      console.error('Failed to save resume:', error);
      alert('Failed to save resume. Please try again.');
    } finally {
      setIsSaving(false);
    }
  }, [data, template]);

  const updatePersonalInfo = useCallback((field: keyof PersonalInfo, value: string) => {
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  }, []);

  const addEducation = useCallback(() => {
    const newItem: Education = {
      id: Math.random().toString(36).substr(2, 9),
      school: '',
      degree: '',
      year: '',
      gpa: ''
    };
    setData(prev => ({ ...prev, education: [...prev.education, newItem] }));
  }, []);

  const updateEducation = useCallback((id: string, field: keyof Education, value: string) => {
    setData(prev => ({
      ...prev,
      education: prev.education.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  }, []);

  const removeEducation = useCallback((id: string) => {
    setData(prev => ({ ...prev, education: prev.education.filter(item => item.id !== id) }));
  }, []);

  const addExperience = useCallback(() => {
    const newItem: Experience = {
      id: Math.random().toString(36).substr(2, 9),
      company: '',
      role: '',
      duration: '',
      description: ['']
    };
    setData(prev => ({ ...prev, experience: [...prev.experience, newItem] }));
  }, []);

  const updateExperience = useCallback((id: string, field: keyof Experience, value: any) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  }, []);

  const removeExperience = useCallback((id: string) => {
    setData(prev => ({ ...prev, experience: prev.experience.filter(item => item.id !== id) }));
  }, []);

  const addSkill = useCallback(() => {
    const newItem: Skill = {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      level: ''
    };
    setData(prev => ({ ...prev, skills: [...prev.skills, newItem] }));
  }, []);

  const updateSkill = useCallback((id: string, field: keyof Skill, value: string) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  }, []);

  const removeSkill = useCallback((id: string) => {
    setData(prev => ({ ...prev, skills: prev.skills.filter(item => item.id !== id) }));
  }, []);

  return {
    data,
    template,
    isPremium,
    isSaving,
    upgradeToPremium,
    saveResume,
    setTemplate,
    updatePersonalInfo,
    addEducation,
    updateEducation,
    removeEducation,
    addExperience,
    updateExperience,
    removeExperience,
    addSkill,
    updateSkill,
    removeSkill,
    clearResume
  };
};
