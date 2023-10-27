/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',

        gray: '#cccccc',
        gray_dark: '#808080',

        orange: '#e09952',
        orange_dark: '#ad661f',

        brown: '#996633',
        brown_dark: '#734d26',

        beige: '#ebd6ad',
        beige_light: '#edca85',
        beige_dark: '#cc9933',
      },
      backgroundImage: {
        'lasanha': "url('images/lasanha_1.jpg')",
        'lasanha': "url('images/lasanha_2.jpg')",
        'lasanha': "url('images/lasanha_3.jpg')",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'ml': '1056px',
        'gx': '1216px',
        'xg': '1232px',
        'xl': '1280px',
        '1xl': '1400px',
        '2xl': '1536px',
        '3xl': '1700px'
      },
    },
  },
  plugins: [],
}