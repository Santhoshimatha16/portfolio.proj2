import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-5 md:h-6',
    medium: 'h-6 md:h-8',
    large: 'h-8 md:h-12'
  };

  return (
    <div className={`text-netflix-red font-bold ${sizeClasses[size]}`}>
      <span className="text-netflix-red font-bold tracking-tighter text-2xl md:text-3xl lg:text-4xl">NETFLIX</span>
    </div>
  );
};

export default Logo;