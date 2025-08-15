import { ComponentType } from 'react';

export interface Feature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  company: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface MotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export interface WaitlistEntry {
  id?: string
  full_name: string
  email: string
  marketplace: string
  created_at?: string
  status?: 'pending' | 'approved' | 'rejected'
}

export interface WaitlistFormData {
  fullName: string
  email: string
  marketplace: string
}

export interface ContactSupportEntry {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  category: 'general' | 'technical' | 'billing' | 'feature_request' | 'bug_report'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  status?: 'open' | 'in_progress' | 'resolved' | 'closed'
  created_at?: string
  updated_at?: string
}

export interface ContactSupportFormData {
  name: string
  email: string
  subject: string
  message: string
  category: 'general' | 'technical' | 'billing' | 'feature_request' | 'bug_report'
  priority: 'low' | 'medium' | 'high' | 'urgent'
} 