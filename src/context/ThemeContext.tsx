
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Initialize theme based on stored preference or time of day
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      // Auto switch based on time (5am to 5pm = light, 5pm to 5am = dark)
      const currentHour = new Date().getHours();
      const shouldBeDark = currentHour < 5 || currentHour >= 17; // Dark from 5pm to 5am
      setTheme(shouldBeDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', shouldBeDark);
    }

    // Set up interval to check time and update theme
    const intervalId = setInterval(() => {
      // If user has manually set a preference, don't auto-switch
      if (!localStorage.getItem('theme')) {
        const currentHour = new Date().getHours();
        const shouldBeDark = currentHour < 5 || currentHour >= 17;
        setTheme(shouldBeDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', shouldBeDark);
      }
    }, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const setThemeValue = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: setThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
