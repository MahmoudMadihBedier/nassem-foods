/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#111111',
        primary: {
          DEFAULT: '#FFB800',
          container: '#D97706',
        },
        secondary: {
          DEFAULT: '#E85C41',
          container: '#991B1B',
        },
        'surface-container': {
          lowest: '#050505',
          low: '#0D0D0D',
          DEFAULT: '#141414',
          high: '#1C1C1C',
          highest: '#242424',
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
