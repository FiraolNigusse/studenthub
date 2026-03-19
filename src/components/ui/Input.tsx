import React, { InputHTMLAttributes, forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from './Button';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon: Icon, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full group">
        {label && (
          <label className="text-sm font-semibold text-slate-700 ml-1">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-600 transition-colors" 
              size={18} 
            />
          )}
          <input
            ref={ref}
            className={cn(
              'w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-700 font-medium transition-all focus:border-primary-500 focus:ring-4 focus:ring-primary-50 px-12 group-focus-within:shadow-md outline-none placeholder:text-slate-400',
              !Icon && 'px-4',
              error && 'border-red-400 focus:border-red-400 focus:ring-red-50',
              className
            )}
            {...props}
          />
        </div>
        {error && <span className="text-xs font-medium text-red-500 ml-1 mt-0.5">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
