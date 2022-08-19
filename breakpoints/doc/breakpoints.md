```js script
import '../src/breakpoints.scss';
```

# Breakpoints

Contains a set of px values do define styles specific to common screens.
Values are exposed as Sass variables in contrast to other tokens, because CSS Custom Properties are not usable in place of media queries.

## Setup

```scss
// all tokens
@import './node_modules/@divriots/starter-sass/tokens.scss';
// or breakpoints only
@import './node_modules/@divriots/starter-sass/breakpoints/breakpoints.scss';
```

## Usage

There are 3 values: `$breakpoint-sm`, `$breakpoint-md` and `$breakpoint-lg`.
Define specific styles for different screens using media queries:

```scss
// mobile-first styles

@media (min-width: #{$breakpoint-sm}) {
  // small devices and above
}

@media (min-width: #{$breakpoint-md}) {
  // medium devices and above
}

@media (min-width: #{$breakpoint-lg}) {
  // large devices only
}
```
