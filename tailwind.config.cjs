module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
    theme: {
      extend: {
        colors: {
          "pink": '#FFE9EC',
          "secondarypink": '#FED8DD',
          "primary": '#0000FF',
          "primary-footer": "#0000D0",
          "primary-hover": '#00008C',
          "secondary": '#FFAE4C',
          "white": '#FFFFFF',
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
      },
    },
    plugins: [require('@tailwindcss/typography', require('flowbite/plugin'))]
  }