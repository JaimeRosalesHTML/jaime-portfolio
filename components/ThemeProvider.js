/**
 * @fileoverview Theme provider for dark/light mode functionality
 * @author Jaime Rosales
 * @created 2024
 * @description Context provider managing theme state and localStorage persistence
 * @course Computer Science - Griffith College Dublin
 */

'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

/**
 * Hook to access theme context
 * @returns {Object} Theme context with darkMode state and toggle function
 * @throws {Error} If used outside ThemeProvider
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

/**
 * Theme provider component managing dark/light mode state
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Theme provider JSX
 */
export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  // Apply theme changes to document and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  /**
   * Toggle between dark and light mode
   */
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
} 