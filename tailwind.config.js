/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "pink": '#FFF5F7',
        "secondarypink": '#FED8DD',
        "primary": '#0000FF',
        "primary-footer": "#0000D0",
        "primary-hover": '#00008C',
        "secondary": '#FFAE4C',
        "secondary-hover": '#FFA538',
        "gray-footer": '#D4D4D4',
      },
      fontFamily: {
        "bricebold": "BriceBold",
        "briceregular": "BriceRegular",
        "bricelight": "BriceLight",
        "briceextralight": "BriceExtraLight",
        "briceextrabold": "BriceExtraBold",
        "briceblack": "BriceBlack",

        'poppins': ['Poppins', 'sans-serif'],
        'figtree': ['Figtree', 'sans-serif']
      },
    }
  },
  plugins: [require('@tailwindcss/typography')]
};