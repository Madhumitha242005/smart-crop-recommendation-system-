import { Leaf } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export function Logo({ size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24',
  };

  const iconSizes = {
    small: 20,
    medium: 40,
    large: 60,
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-primary flex items-center justify-center shadow-lg`}>
      <Leaf className="text-white" size={iconSizes[size]} />
    </div>
  );
}
