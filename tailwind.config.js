module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mochy': ['Mochiy_Pop_P_One'],
        'rSalt': ['Rock_Salt'],
      },

      animation: {
        fadeOut: 'fadeOut .5s forwards ',
        fadeIn: 'fadeIn 2s forwards ',
        fadeMessage: 'fadeOutMessage 3s ease-in forwards',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        fadeOutDown: 'fadeOutDown 0.5s ease-in-out forwards'
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

        fadeInUp: {
          '0%': {
              opacity: '0',
              transform: 'translateY(100vw)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
        },
        fadeOutDown: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(100vw)'
          },
        }
      }),
    },
  },

  plugins: [],
}