import React, { SelectHTMLAttributes, forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from './Button';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, children, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full grup relative">
        {label && (
          <label className="text-sm font-semibold text-slate-700 ml-1">
            {label}
          </label>
        )}
        <div className="relative isolate group">
          <select
            ref={ref}
            className={cn(
              'w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-3 pb-3 pr-10 text-slate-700 font-medium transition-all focus:border-primary-500 focus:ring-4 focus:ring-primary-50 active:scale-[0.99] outline-none appearance-none cursor-pointer placeholder:text-slate-400 group-hover:border-slate-200',
              error && 'border-red-400 focus:border-red-400 focus:ring-red-50',
              className
            )}
            {...props}
          >
            {children}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-bold group-hover:text-slate-600 transition-colors">
            <ChevronDown size={20} />
          </div>
        </div>
        {error && <span className="text-xs font-medium text-red-500 ml-1 mt-0.5">{error}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
