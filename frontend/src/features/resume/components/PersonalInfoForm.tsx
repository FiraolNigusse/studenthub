import React from 'react';
import { type PersonalInfo } from '../types/resume';
import Input from '../../../components/ui/Input';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  onUpdate: (field: keyof PersonalInfo, value: string) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ 
  personalInfo, 
  onUpdate 
}) => {
  return (
    <div className="space-y-6">
      <Input 
        label="Full Name" 
        value={personalInfo.fullName} 
        onChange={(e) => onUpdate('fullName', e.target.value)} 
        placeholder="e.g. Alexander Student"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input 
          label="Email Address" 
          type="email" 
          value={personalInfo.email} 
          onChange={(e) => onUpdate('email', e.target.value)} 
          placeholder="e.g. alex@university.edu"
        />
        <Input 
          label="Phone Number" 
          value={personalInfo.phone} 
          onChange={(e) => onUpdate('phone', e.target.value)} 
          placeholder="e.g. +1 555-0123"
        />
      </div>
      <Input 
        label="Location" 
        value={personalInfo.location} 
        onChange={(e) => onUpdate('location', e.target.value)} 
        placeholder="e.g. San Francisco, CA"
      />
      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-sm font-semibold text-slate-700 ml-1">
          Professional Summary
        </label>
        <textarea 
          value={personalInfo.summary || ''} 
          onChange={(e) => onUpdate('summary', e.target.value)} 
          placeholder="Briefly describe your career goals and key strengths..."
          className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-700 font-medium transition-all focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none placeholder:text-slate-400 min-h-[120px] resize-none"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
