/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f3ead2',
          200: '#e7d6a5',
          300: '#dcc178',
          400: '#d0ad4b',
          DEFAULT: '#c4981e',
          600: '#9d7a18',
          700: '#765b12',
          800: '#4e3d0c',
          900: '#271e06',
        },
        secondary: {
          DEFAULT: '#1cc67c',
          600: '#169e63',
        },
        reds: {
          DEFAULT: '#cc1b3c'
        },
        blues: {
          DEFAULT: '#371fbf',
          600: '#2c1999',
          700: '#211373',
        },
        grays: {
          100: '#e7e9ea',
          200: '#d0d2d4',
          300: '#b8bcbf',
          400: '#a1a5a9',
          DEFAULT: '#898f94',
          600: '#6e7276',
          700: '#525659',
          800: '#37393b',
          900: '#1b1d1e',
        }
      },
    },
  },
  plugins: [],
}
