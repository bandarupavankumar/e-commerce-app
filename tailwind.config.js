/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)',  },
        },
      },
      animation: {
        bounceSlow: 'bounceSlow 3s forwards',
      },
      transitionTimingFunction: {
        'cubic-slow': 'cubic-bezier(0.8, 0, 0.2, 1)',
      },
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        hero: "url('./img/bghero.jpg')",
      },
    },
  },
  plugins: [],
};
