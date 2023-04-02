/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#141923',
        secondary: '#242935',
        accent: '#afe9fa',
        light: '#313541',
        bright: '#eaecf1',
      },
    },
  },
  plugins: [],
};
