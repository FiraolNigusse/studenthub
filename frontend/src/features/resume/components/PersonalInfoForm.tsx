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
    </div>
  );
};

export default PersonalInfoForm;
