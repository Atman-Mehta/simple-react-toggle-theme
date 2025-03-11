import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check if user has a saved preference or use system preference
  const getInitialTheme = () => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      
      // Use system preference as fallback
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Default to light theme if not in browser
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Effect to apply theme to document
  useEffect(() => {
    // Ensure we're in browser environment
    if (typeof window === 'undefined') return;
    
    const root = window.document.documentElement;
    
    // Remove previous theme class and add new one
    root.classList.remove('light-theme', 'dark-theme');
    root.classList.add(`${theme}-theme`);
    
    // Save preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};