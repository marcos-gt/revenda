/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Playfair Display , sans- serif'
      }, colors: {
        transparent: 'transparent',
        black: '#000000',
        white: '#ffffff',
        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7c7c8a',
          200: '#c4c4cc',
          100: '#e1e1e6',
        }
      }
    },
  },
  plugins: [],
}
