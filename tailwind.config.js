/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['Cormorant Upright', 'serif'],
        alt: ['Open Sans', 'sans-serif'],
        logo: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        black: '#0C0C0C',
        green: '#52bf90',
        grey: '#f4f4f5',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

