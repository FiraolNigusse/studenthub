export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary?: string;
  github?: string;
  linkedin?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
  gpa?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  description: string[];
}

export interface Skill {
  id: string;
  name: string;
  level?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
}
