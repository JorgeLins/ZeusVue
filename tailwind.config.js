/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'yellow-first': "#F8B933",
      'yellow-second': "#FAD240",
      'blue-text': "#100100"
    },
    fontFamily: {
      "body": ['Raleway'],
      "roboto": ["Roboto"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
