// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Facebook Primary Colors
        'fb-blue': '#1877F2',
        'fb-green': '#38A169',
        'fb-gray-bg': '#F0F2F5',
        'fb-gray-text': '#606770',
        'fb-gray-border': '#DADDE1',
        'fb-gray-hover': '#EBEDF0',

        // Custom Utility Colors
        'primary': '#1877F2',
        'secondary': '#38A169',
        'background': '#F0F2F5',
        'text-primary': '#050505',
        'text-secondary': '#606770',
      },
      spacing: {
        '18': '4.5rem', // 72px (for sidebar width)
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'fb-card': '0 1px 2px rgba(0, 0, 0, 0.2)',
        'fb-popup': '0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}