/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'lato': ["'Lato', sans-serif"],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        imperialRed: '#e63946',
        honeyDew: '#f1faee',
        powderBlue: '#a8dadc',
        celadonBlue: '#457b9d',
        prussianBlue: '#1d3557',
      }
    },    
  },
  plugins: [],
}
