
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: string;
  threshold?: number;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'blur';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 800,
  distance = "20px",
  threshold = 0.1,
  animation = 'slide-up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observerOptions = {
      threshold: threshold,
      rootMargin: '0px'
    };
    
    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  
  const getAnimationStyles = () => {
    const baseStyles: React.CSSProperties = {
      opacity: isVisible ? 1 : 0,
      transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
    };
    
    if (!isVisible) {
      switch (animation) {
        case 'slide-up':
          return { ...baseStyles, transform: `translateY(${distance})` };
        case 'slide-left':
          return { ...baseStyles, transform: `translateX(-${distance})` };
        case 'slide-right':
          return { ...baseStyles, transform: `translateX(${distance})` };
        case 'zoom':
          return { ...baseStyles, transform: 'scale(0.95)' };
        case 'blur':
          return { ...baseStyles, filter: 'blur(8px)' };
        case 'fade':
        default:
          return baseStyles;
      }
    }
    
    return {
      ...baseStyles,
      transform: 'translateY(0) translateX(0) scale(1)',
      filter: 'blur(0)'
    };
  };
  
  return (
    <div 
      ref={ref} 
      className={className}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
