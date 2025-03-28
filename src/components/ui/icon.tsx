
import React from 'react';
import { LucideIcon, LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  icon: LucideIcon;
}

const Icon = ({ icon: LucideIcon, ...props }: IconProps) => {
  return <LucideIcon {...props} />;
};

export default Icon;
