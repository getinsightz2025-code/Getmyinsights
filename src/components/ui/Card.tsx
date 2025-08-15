import { CardProps } from '@/lib/types';

export function Card({ children, className = '', hover = true, ...props }: CardProps) {
  const baseClasses = "bg-white rounded-2xl border border-gray-100";
  const hoverClasses = hover ? "hover:shadow-xl hover:border-gray-200 transition-all duration-300" : "";
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
} 