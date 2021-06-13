const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      minWidth: {
        500: '500px',
        700: '700px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
