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
        'poppins': ['Poppins', 'sans-serif'],
        'figtree': ['Figtree', 'sans-serif'],
      },
    }
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],

  daisyui: {
    themes: [], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },


};