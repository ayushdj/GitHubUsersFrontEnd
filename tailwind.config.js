/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'  /* ... */],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.html'
  ],
  darkMode: "class",
  theme: {
    extend: {},
    
    screens: {
      'xxs':'170px',
      'xs':'340px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px', 
    }
  },
  plugins: [],
}
