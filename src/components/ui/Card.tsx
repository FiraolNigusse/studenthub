import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from './Button';

interface CardProps extends HTMLMotionProps<'div'> {
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hoverEffect = true,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' } : {}}
      className={cn(
        'bg-white/80 backdrop-blur-md border border-slate-200 rounded-[2rem] p-8 shadow-sm transition-all',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
