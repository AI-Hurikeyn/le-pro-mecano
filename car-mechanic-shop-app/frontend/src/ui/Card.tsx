import type { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => (
  <div className={`rounded-lg shadow-md bg-white p-6 ${className}`}>
    {children}
  </div>
)
