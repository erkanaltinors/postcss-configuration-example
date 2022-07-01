const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        cssnano({
            preset: ['default',{
                discardComments: {
                    removeAll: true
        },
    }]
        }),
        purgecss({
            content: ['*.html', '**/*.html'],
            safelist: {
                standard: [/^display/]
            }
        })
    ]
}

/*
cssnano minifies at default preset. discardComments > removeAll: true option removes all comments in your css file.

PURGECSS

purgecss removes unused css selectors. by doing this, it reduces your css file dramatically.
content option describes target files to find css selectors.
At safelist standart option, we keep selectors that starts with `display`. You can use any regex to keep selectors you need. this option is a string array.
*/