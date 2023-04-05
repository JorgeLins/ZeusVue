/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'yellow-header': "#f59e0b",
      'blue-text': "#004242"
    },
    fontFamily: {
      "body": ['Raleway']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
