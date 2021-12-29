module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

    },
    colors: {
      'primary': '#191b25',
      'secondary': '#e1595c',
      'white': '#fff',
      'black': '#000',
      'primary-100': '#252732'
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
