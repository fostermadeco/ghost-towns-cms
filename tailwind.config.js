module.exports = {
    theme: {
        fontFamily: {
            brand: ['Taberna'],
            serif: ['Faustina', 'serif'],
            sansserif: ['Open Sans', 'sans-serif'],
        },
        extend: {
            colors: {
                black: '#3A3A3C',
                orange: '#CA8643',
                brown: '#716652',
                red: '#D55F36',
                yellow: '#C7A360',
                blue: '#799AB1',
                tan: {
                    '100': '#F7F7F5',
                    '200': '#f4f4f2',
                    '400': '#E3DFD7',
                    '500': '#CCC9C2',
                },
                tanLight: '#f4f4f2',
                tanMed: '#CCC9C2',
                gray: {
                    '200': '#F2F2F2',
                    '500': '#CCC9C2',
                },
            },
            maxWidth: {
                xxs: '15rem',
            },
            minHeight: {
                card: '185px',
            },
            padding: {
                '1/2': '.15rem',
            },
            boxShadow: {
                full: '0px 1px 15px rgba(0, 0, 0, 0.15)',
            },
        },
    },
    variants: {},
    plugins: [
        function({ addUtilities, addComponents, e, prefix, config }) {
            const newUtilities = {
                '.header-top': {
                    top: '70px',
                },
                '.header-top-padding': {
                    'padding-top': '70px',
                },
            };
            addUtilities(newUtilities, {
                variants: ['responsive'],
            });
        },
    ],
};
