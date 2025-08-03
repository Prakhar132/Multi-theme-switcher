/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Theme 1 - Minimalist
        'theme1-primary': '#2c3e50',
        'theme1-secondary': '#34495e',
        'theme1-background': '#ffffff',
        'theme1-surface': '#f8f9fa',
        'theme1-text': '#2c3e50',
        'theme1-text-secondary': '#7f8c8d',
        'theme1-accent': '#3498db',
        'theme1-border': '#e9ecef',
        
        // Theme 2 - Dark Mode
        'theme2-primary': '#1a1a1a',
        'theme2-secondary': '#2d2d2d',
        'theme2-background': '#121212',
        'theme2-surface': '#1e1e1e',
        'theme2-text': '#ffffff',
        'theme2-text-secondary': '#b0b0b0',
        'theme2-accent': '#bb86fc',
        'theme2-border': '#333333',
        
        // Theme 3 - Colorful
        'theme3-primary': '#ff6b6b',
        'theme3-secondary': '#4ecdc4',
        'theme3-background': '#f7f7f7',
        'theme3-surface': '#ffffff',
        'theme3-text': '#2d3436',
        'theme3-text-secondary': '#636e72',
        'theme3-accent': '#ffa726',
        'theme3-border': '#e0e0e0',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 