const plugin = require('tailwindcss/plugin');
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        aspectRatio: {
            // defaults to {}
            none: 0,
            square: [1, 1], // or 1 / 1, or simply 1
            '16/9': [16, 9], // or 16 / 9
            '4/3': [4, 3], // or 4 / 3
            '21/9': [21, 9], // or 21 / 9
        },
        extend: {
            scale: {
                '-1': '-1',
            },
        },
        backdropFilter: {
            none: 'none',
            blur: 'blur(20px)',
        },
    },
    variants: {
        extend: {
            accessibility: ['last', 'first', 'before', 'after', 'focus-within', 'focus'],
            alignContent: ['last', 'first', 'before', 'after'],
            alignItems: ['last', 'first', 'before', 'after'],
            alignSelf: ['last', 'first', 'before', 'after'],
            animation: ['last', 'first', 'before', 'after'],
            appearance: ['last', 'first', 'before', 'after'],
            backgroundAttachment: ['last', 'first', 'before', 'after'],
            backgroundClip: ['last', 'first', 'before', 'after'],
            backgroundColor: [
                'last',
                'first',
                'before',
                'after',
                'dark',
                'group-hover',
                'focus-within',
                'hover',
                'focus',
            ],
            backgroundImage: ['last', 'first', 'before', 'after'],
            backgroundOpacity: ['last', 'first', 'before', 'after', 'group-hover', 'focus-within', 'hover', 'focus'],
            backgroundPosition: ['last', 'first', 'before', 'after'],
            backgroundRepeat: ['last', 'first', 'before', 'after'],
            backgroundSize: ['last', 'first', 'before', 'after'],
            borderCollapse: ['last', 'first', 'before', 'after'],
            borderColor: ['last', 'first', 'before', 'after', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
            borderOpacity: ['last', 'first', 'before', 'after', 'group-hover', 'focus-within', 'hover', 'focus'],
            borderRadius: ['last', 'first', 'before', 'after'],
            borderStyle: ['last', 'first', 'before', 'after'],
            borderWidth: ['last', 'first', 'before', 'after'],
            boxShadow: ['last', 'first', 'before', 'after', 'group-hover', 'focus-within', 'hover', 'focus'],
            boxSizing: ['last', 'first', 'before', 'after'],
            clear: ['last', 'first', 'before', 'after'],
            container: ['last', 'first', 'before', 'after'],
            cursor: ['last', 'first', 'before', 'after'],
            display: ['last', 'first', 'before', 'after'],
            divideColor: ['last', 'first', 'before', 'after', 'dark'],
            divideOpacity: ['last', 'first', 'before', 'after'],
            divideStyle: ['last', 'first', 'before', 'after'],
            divideWidth: ['last', 'first', 'before', 'after'],
            fill: ['last', 'first', 'before', 'after'],
            flex: ['last', 'first', 'before', 'after'],
            flexDirection: ['last', 'first', 'before', 'after'],
            flexGrow: ['last', 'first', 'before', 'after'],
            flexShrink: ['last', 'first', 'before', 'after'],
            flexWrap: ['last', 'first', 'before', 'after'],
            float: ['last', 'first', 'before', 'after'],
            fontFamily: ['last', 'first', 'before', 'after'],
            fontSize: ['last', 'first', 'before', 'after'],
            fontSmoothing: ['last', 'first', 'before', 'after'],
            fontStyle: ['last', 'first', 'before', 'after'],
            fontVariantNumeric: ['last', 'first', 'before', 'after'],
            fontWeight: ['last', 'first', 'before', 'after'],
            gap: ['last', 'first', 'before', 'after'],
            gradientColorStops: ['last', 'first', 'before', 'after', 'dark', 'hover', 'focus'],
            gridAutoColumns: ['last', 'first', 'before', 'after'],
            gridAutoFlow: ['last', 'first', 'before', 'after'],
            gridAutoRows: ['last', 'first', 'before', 'after'],
            gridColumn: ['last', 'first', 'before', 'after'],
            gridColumnEnd: ['last', 'first', 'before', 'after'],
            gridColumnStart: ['last', 'first', 'before', 'after'],
            gridRow: ['last', 'first', 'before', 'after'],
            gridRowEnd: ['last', 'first', 'before', 'after'],
            gridRowStart: ['last', 'first', 'before', 'after'],
            gridTemplateColumns: ['last', 'first', 'before', 'after'],
            gridTemplateRows: ['last', 'first', 'before', 'after'],
            height: ['last', 'first', 'before', 'after'],
            inset: ['last', 'first', 'before', 'after'],
            justifyContent: ['last', 'first', 'before', 'after'],
            justifyItems: ['last', 'first', 'before', 'after'],
            justifySelf: ['last', 'first', 'before', 'after'],
            letterSpacing: ['last', 'first', 'before', 'after'],
            lineHeight: ['last', 'first', 'before', 'after'],
            listStylePosition: ['last', 'first', 'before', 'after'],
            listStyleType: ['last', 'first', 'before', 'after'],
            margin: ['last', 'first', 'before', 'after'],
            maxHeight: ['last', 'first', 'before', 'after'],
            maxWidth: ['last', 'first', 'before', 'after'],
            minHeight: ['last', 'first', 'before', 'after'],
            minWidth: ['last', 'first', 'before', 'after'],
            objectFit: ['last', 'first', 'before', 'after'],
            objectPosition: ['last', 'first', 'before', 'after'],
            opacity: ['last', 'first', 'before', 'after', 'group-hover', 'focus-within', 'hover', 'focus'],
            order: ['last', 'first', 'before', 'after'],
            outline: ['last', 'first', 'before', 'after', 'focus-within', 'focus'],
            overflow: ['last', 'first', 'before', 'after'],
            overscrollBehavior: ['last', 'first', 'before', 'after'],
            padding: ['last', 'first', 'before', 'after'],
            placeContent: ['last', 'first', 'before', 'after'],
            placeItems: ['last', 'first', 'before', 'after'],
            placeSelf: ['last', 'first', 'before', 'after'],
            placeholderColor: ['last', 'first', 'before', 'after', 'dark', 'focus'],
            placeholderOpacity: ['last', 'first', 'before', 'after', 'focus'],
            pointerEvents: ['last', 'first', 'before', 'after'],
            position: ['last', 'first', 'before', 'after'],
            resize: ['last', 'first', 'before', 'after'],
            ringColor: ['last', 'first', 'before', 'after', 'dark', 'focus-within', 'focus'],
            ringOffsetColor: ['last', 'first', 'before', 'after', 'dark', 'focus-within', 'focus'],
            ringOffsetWidth: ['last', 'first', 'before', 'after', 'focus-within', 'focus'],
            ringOpacity: ['last', 'first', 'before', 'after', 'focus-within', 'focus'],
            ringWidth: ['last', 'first', 'before', 'after', 'focus-within', 'focus'],
            rotate: ['last', 'first', 'before', 'after', 'hover', 'focus'],
            scale: ['last', 'first', 'before', 'after', 'hover', 'focus'],
            skew: ['last', 'first', 'before', 'after', 'hover', 'focus'],
            space: ['last', 'first', 'before', 'after'],
            stroke: ['last', 'first', 'before', 'after'],
            strokeWidth: ['last', 'first', 'before', 'after'],
            tableLayout: ['last', 'first', 'before', 'after'],
            textAlign: ['last', 'first', 'before', 'after'],
            textColor: ['last', 'first', 'before', 'after', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
            textDecoration: ['last', 'first', 'before', 'after', 'group-hover', 'focus-within', 'hover', 'focus'],
            textOpacity: ['last', 'first', 'before', 'after', 'group-hover', 'focus-within', 'hover', 'focus'],
            textOverflow: ['last', 'first', 'before', 'after'],
            textTransform: ['last', 'first', 'before', 'after'],
            transform: ['last', 'first', 'before', 'after'],
            transformOrigin: ['last', 'first', 'before', 'after'],
            transitionDelay: ['last', 'first', 'before', 'after'],
            transitionDuration: ['last', 'first', 'before', 'after'],
            transitionProperty: ['last', 'first', 'before', 'after'],
            transitionTimingFunction: ['last', 'first', 'before', 'after'],
            translate: ['last', 'first', 'before', 'after', 'hover', 'focus'],
            userSelect: ['last', 'first', 'before', 'after'],
            verticalAlign: ['last', 'first', 'before', 'after'],
            visibility: ['last', 'first', 'before', 'after'],
            whitespace: ['last', 'first', 'before', 'after'],
            width: ['last', 'first', 'before', 'after'],
            wordBreak: ['last', 'first', 'before', 'after'],
            zIndex: ['last', 'first', 'before', 'after', 'focus-within', 'focus'],
        },
    },
    plugins: [
        require('tailwindcss-filters'),
        require('tailwindcss-aspect-ratio'),
        plugin(({ addVariant, e }) => {
            addVariant('before', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`before${separator}${className}`)}::before`;
                });
            });
            addVariant('after', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`after${separator}${className}`)}::after`;
                });
            });
        }),
        plugin(({ addUtilities }) => {
            const contentUtilities = {
                '.content': {
                    content: 'attr(data-content)',
                },
                '.content-before': {
                    content: 'attr(data-before)',
                },
                '.content-after': {
                    content: 'attr(data-after)',
                },
            };

            addUtilities(contentUtilities, ['before', 'after']);
        }),
    ],
};
