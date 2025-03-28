
import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: string;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 800,
  distance = "20px",
  threshold = 0.1
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: threshold,
      rootMargin: '0px'
    };
    
    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.transitionProperty = 'opacity, transform';
          target.style.transitionDuration = `${duration}ms`;
          target.style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
          target.style.transitionDelay = `${delay}ms`;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
          observer.unobserve(target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (ref.current) {
      ref.current.style.opacity = '0';
      ref.current.style.transform = `translateY(${distance})`;
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, duration, distance, threshold]);
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
