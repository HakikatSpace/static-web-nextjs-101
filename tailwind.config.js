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
        'brown-coffee': '#C8A482',
        'warm-white': '#F4EAE4',
        'creamy-latte': '#E4DDDA',
        'hidden-gold': '#D3BE91'
      },
      fontFamily: {
        'title': ['Lato', 'sans'],
        'content': ['Roboto', 'sans'],
        'heading': ['Playfair Display', 'sans-serif']
      },
      height: {
        'h-540px': '540px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
