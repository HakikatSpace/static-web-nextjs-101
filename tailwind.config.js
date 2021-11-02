module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'elegant-black': '#29272C',
      },
      fontFamily: {
        'content': ['roboto', 'sans']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
