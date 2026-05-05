/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F9F9F9',
        primary: {
          DEFAULT: '#FFB800',
          container: '#D97706',
        },
        secondary: {
          DEFAULT: '#E85C41',
          container: '#991B1B',
        },
        'surface-container': {
          lowest: '#FFFFFF',
          low: '#F5F5F5',
          DEFAULT: '#EEEEEE',
          high: '#E0E0E0',
          highest: '#D6D6D6',
        }
      },
      fontFamily: {
        serif: ['Amiri', 'serif'],
        sans: ['Cairo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
