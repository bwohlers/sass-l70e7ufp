# Sass Starter Kit

This starter kit shows how to build a Sass-based design system in Backlight.
It has a very minimalistic setup with a set of tokens, some mixins, one component and a few documentation pages with examples.

Thanks to Backlight we can use Sass features right in the browser.
Check the documentation [here](https://backlight.dev/docs/sass).

If you are starting with [Backlight](https://backlight.dev), check the links below:

- [Explore starter kits](https://backlight.dev/starterkits)
- [Backlight documentation](https://backlight.dev/docs)
- [Join chat](https://discord.gg/XkQxSU9)

## Quick Start

Include styles:

```scss
// contains Sass mixins
@use './node_modules/@divriots/starter-sass/mixins.scss';
// contains design tokens
@import './node_modules/@divriots/starter-sass/tokens.scss';
// contains CSS classes of all components
@import './node_modules/@divriots/starter-sass/components.scss';

// use mixins or override tokens
```

Use component classes:

```html
<button class="btn">Click me!</button>
```

## Select individual components

You can choose which components to use and prevent unnesessary styles in the bundle.
E.g. instead of importing `components.scss` you can import the button classes like this:

```scss
@import './node_modules/@divriots/starter-sass/button.scss';
```

Follow documentation of other components on how to import only specific bits.
