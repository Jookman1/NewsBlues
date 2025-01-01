/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A5D3FF',
          DEFAULT: '#7CB9E8',
          dark: '#5A9AD6',
        }
      },
    },
  },
  plugins: [],
};