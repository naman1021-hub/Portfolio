import React, { createContext, useContext, useLayoutEffect, useState } from 'react';
const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('portfolio-theme');
        return saved === 'light' ? 'light' : 'dark';
    });
    useLayoutEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        root.classList.toggle('light', theme === 'light');
        root.style.colorScheme = theme;
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };
    return (<ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>);
};
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
