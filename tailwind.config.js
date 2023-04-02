/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#020202',
        secondary: '#0d324d',
        accent: '#7f5a83',
        light: '#a188a6',
        bright: '#9da2ab',
      },
    },
  },
  plugins: [],
};
