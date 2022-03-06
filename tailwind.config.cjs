module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'header-dark': '#243c5a',
                'header-light': '#E6F0FF',
                'light-button': '#0F1B4C',
                'light-heading': '#000336',
                'light-text': '#5A6473'
            },
            fontFamily: {
                'poppins': 'Poppins, sans-serif',
            },
            height: {
                '128': '32rem',
            }

        }
    },
    plugins: []
};