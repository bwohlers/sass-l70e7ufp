# A11Y Mixins

Contains utilities to improve A11Y of the site.

## Setup

```scss
// all mixins
@use './node_modules/@divriots/starter-sass/mixins.scss';
// or a11y-mixins only
@use './node_modules/@divriots/starter-sass/a11y-mixins/a11y-mixins.scss';
```

Make sure to use a correct namespace `a11y-mixins` when using the second method.

## Mixins

### sr-only

Hides content from the screen, but not from screen readers.

```scss
.some-text-to-hide {
  @include mixins.sr-only();
}
```
