module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '900px'
      },

      animation: {
        fadeOut: 'fadeOut .5s forwards ',
        fadeIn: 'fadeIn 2s forwards ',
        fadeMessage: 'fadeOutMessage 3s ease-in forwards',
        fadeInLeft: 'fadeInLeft 0.5s ease-out forwards',
        fadeOutRight: 'fadeOutRight 0.5s ease-in-out forwards'
      },
      keyframes: theme => ({
        fadeOutMessage: {
          '0%': { color: theme('colors.red.700') },
          '100%': { color: theme('colors.transparent') },
        },

        fadeOut: {
          '0%': { opacity: 100 },
          '100%': { opacity: 0 },
        },

        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },

        fadeInLeft: {
          '0%': {
              // opacity: '0',
              transform: 'translateX(-100vw)'
          },
          '100%': {
              // opacity: '1',
              transform: 'translateX(0)'
          },
        },
        fadeOutRight: {
          '0%': {
            // opacity: '1',
            transform: 'translateX(0)'
          },
          '100%': {
            // opacity: '0',
            transform: 'translateX(-100vw)'
          },
        }
      }),


    },
  },
  plugins: [],
}
