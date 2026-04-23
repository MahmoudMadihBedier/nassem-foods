/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#141312',
        surface: '#141312',
        primary: {
          DEFAULT: '#e9c349',
          container: '#c5a12a',
        },
        secondary: {
          DEFAULT: '#ffb596',
          container: '#76320f',
        },
        'surface-container': {
          lowest: '#0f0e0d',
          low: '#1d1b1a',
          DEFAULT: '#211f1e',
          high: '#2b2a28',
          highest: '#363433',
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
