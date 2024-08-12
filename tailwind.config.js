  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          ghea: ['GHEA', 'sans-serif'],
          grapalat: ['Grapalat', 'sans-serif'],
          nicolo: ['Nicolo', 'sans-serif'],
        },
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
