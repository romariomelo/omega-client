module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary-blue': '#3980FF',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
