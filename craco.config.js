const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');

module.exports = {
    style: {
        postcss: {
            plugins: [require('tailwindcss')('./tailwind.config.js')],
        },
    },
};
