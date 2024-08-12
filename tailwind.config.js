// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], 
  darkMode: 'media',
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
