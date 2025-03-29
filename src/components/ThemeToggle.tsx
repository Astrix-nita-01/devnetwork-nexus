
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Toggle } from '@/components/ui/toggle';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);

  // Only show toggle after hydration to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    toggleTheme();
    toast({
      title: theme === 'dark' ? 'Light mode activated' : 'Dark mode activated',
      description: theme === 'dark' 
        ? 'Switched to light theme' 
        : 'Switched to dark theme',
      duration: 2000,
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={theme === 'dark'}
      onPressedChange={handleToggle}
      className="w-10 p-0 bg-transparent border-0 hover:bg-secondary animate-fade-in"
    >
      {theme === 'dark' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
