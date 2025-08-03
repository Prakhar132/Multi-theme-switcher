import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const HeaderTailwind: React.FC = () => {
  const { theme, currentTheme, setTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as any);
  };

  const getThemeClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return {
          header: 'bg-theme1-surface border-theme1-border text-theme1-text font-sans',
          logo: 'text-theme1-primary hover:text-theme1-accent',
          navLink: 'text-theme1-text hover:bg-theme1-background hover:text-theme1-accent',
          select: 'bg-theme1-surface text-theme1-text border-theme1-border focus:border-theme1-accent'
        };
      case 'theme2':
        return {
          header: 'bg-theme2-surface border-theme2-border text-theme2-text font-serif',
          logo: 'text-theme2-text hover:text-theme2-accent',
          navLink: 'text-theme2-text hover:bg-theme2-background hover:text-theme2-accent',
          select: 'bg-theme2-surface text-theme2-text border-theme2-border focus:border-theme2-accent'
        };
      case 'theme3':
        return {
          header: 'bg-theme3-surface border-theme3-border text-theme3-text font-pacifico',
          logo: 'text-theme3-primary hover:text-theme3-accent',
          navLink: 'text-theme3-text hover:bg-theme3-background hover:text-theme3-accent',
          select: 'bg-theme3-surface text-theme3-text border-theme3-border focus:border-theme3-accent'
        };
      default:
        return {
          header: 'bg-theme1-surface border-theme1-border text-theme1-text font-sans',
          logo: 'text-theme1-primary hover:text-theme1-accent',
          navLink: 'text-theme1-text hover:bg-theme1-background hover:text-theme1-accent',
          select: 'bg-theme1-surface text-theme1-text border-theme1-border focus:border-theme1-accent'
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b shadow-md ${classes.header}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className={`text-xl font-bold ${classes.logo}`}>
            MultiTheme
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={`px-4 py-2 rounded transition-colors ${classes.navLink}`}>
            Home
          </Link>
          <Link to="/about" className={`px-4 py-2 rounded transition-colors ${classes.navLink}`}>
            About
          </Link>
          <Link to="/contact" className={`px-4 py-2 rounded transition-colors ${classes.navLink}`}>
            Contact
          </Link>
          
          <select
            value={currentTheme}
            onChange={handleThemeChange}
            className={`px-4 py-2 border rounded cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-20 ${classes.select}`}
          >
            <option value="theme1">Theme 1 - Minimalist</option>
            <option value="theme2">Theme 2 - Dark Mode</option>
            <option value="theme3">Theme 3 - Colorful</option>
          </select>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-col items-end gap-2">
          <select
            value={currentTheme}
            onChange={handleThemeChange}
            className={`px-3 py-1 border rounded text-sm ${classes.select}`}
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
          
          <div className="flex flex-col gap-1 mt-2">
            <Link to="/" className={`text-sm py-1 ${classes.navLink}`}>
              Home
            </Link>
            <Link to="/about" className={`text-sm py-1 ${classes.navLink}`}>
              About
            </Link>
            <Link to="/contact" className={`text-sm py-1 ${classes.navLink}`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTailwind; 