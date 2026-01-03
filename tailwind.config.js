module.exports = {
  content: ["./public/*.{html,js}", "./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Snell Roundhand', 'cursive'],
        cursive: ['Snell Roundhand', 'cursive'],
      },
      colors: {
        primary: '#0000FF', // International Klein Blue style
        secondary: '#f5f3ee',
        dark: '#0a1623',
        lightblue: '#4B7BFF', // Lighter blue for accents
        greyish: '#F0F0F0',
        themeYellow: '#FDB813', // Reference Yellow
        themeRed: '#df0007ff', // Vibrant Red
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
};