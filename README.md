# postcss-configuration-example


This example shows how to implement and use postcss in your projects.
I added bootstrap.css to show file size difference before and after with postcss configuration.
# Steps

## Testing on this project

- `npm install` to install all dependency.
- `npm run postcss` to see how postcss works.

## To Use In Your Project
- in your terminal, at root path of your project `npm i -D postcss postcss-cli`. This will add postcss and postcss-cli as dev dependencies.
- `npm i -D cssnano` to add cssnano.
- `npm i -D @fullhuman/postcss-purgecss` to add purgecss.
- create `postcss.config.js` file at root path of your project.
- add requirements as this example (see postcss.config.js) .
- add plugins.
- cssnano minifies at default preset. discardComments > removeAll: true option removes all comments in your css file.
- purgecss removes unused css selectors. by doing this, it reduces your css file dramatically.
- At safelist standart option, we keep selectors that starts with `display`. You can use any regex to keep selectors you need (e.g. classes added with JS). This option is a string array. 
- There is postcss script at `package.json`. The template is as below:

`post [global css file's path] -o (output) [generated css file by postcss]`
