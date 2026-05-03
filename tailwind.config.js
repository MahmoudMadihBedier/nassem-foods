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
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          DEFAULT: '#F4A623',
          600: '#EA580C',
          700: '#C2410C',
          container: '#D97706',
        },
        secondary: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          DEFAULT: '#E85C41',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          container: '#991B1B',
        },
        accent: {
          DEFAULT: '#FF6B35',
          dark: '#D84315',
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
        serif: ['Noto Serif', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
