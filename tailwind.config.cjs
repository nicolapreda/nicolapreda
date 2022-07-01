module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'primary-blue': '#03045E',
                'secondary-blue': '#F5F9FF',
                'light-blue': '#707CFF',
            },
            spacing: {
                '80': '17rem',
                '128': '32rem',
            },
            height: {
                '128': '32rem',
                '140': '38rem',
                '300': '60rem',

            },
            width: {
                '140': '50rem',
                '280': '100rem',
            },
            lineHeight: {
                'extra-loose': '2.5',
                '12': '3rem',
            },
            margin: {
                'm2': '-1.3rem',
            }


        }
    },
    plugins: []
};