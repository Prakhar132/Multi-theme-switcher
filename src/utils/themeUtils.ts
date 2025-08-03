import { ThemeType } from '../types/theme';

export const getStoredTheme = (): ThemeType | null => {
  try {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
    return savedTheme;
  } catch (error) {
    console.error('Error reading theme from localStorage:', error);
    return null;
  }
};

export const setStoredTheme = (theme: ThemeType): void => {
  try {
    localStorage.setItem('selectedTheme', theme);
    console.log(`Theme saved to localStorage: ${theme}`);
  } catch (error) {
    console.error('Error saving theme to localStorage:', error);
  }
};

export const clearStoredTheme = (): void => {
  try {
    localStorage.removeItem('selectedTheme');
    console.log('Theme cleared from localStorage');
  } catch (error) {
    console.error('Error clearing theme from localStorage:', error);
  }
};

export const testThemePersistence = (): void => {
  console.log('=== Theme Persistence Test ===');
  console.log('Current stored theme:', getStoredTheme());
  
  // Test setting a theme
  setStoredTheme('theme2');
  console.log('After setting theme2:', getStoredTheme());
  
  // Test clearing
  clearStoredTheme();
  console.log('After clearing:', getStoredTheme());
  
  // Restore theme1
  setStoredTheme('theme1');
  console.log('After restoring theme1:', getStoredTheme());
}; 