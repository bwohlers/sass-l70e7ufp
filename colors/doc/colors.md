```js script
import '../src/colors.scss';
```

# Colors

## Setup

```scss
// all tokens
@import './node_modules/@divriots/starter-sass/tokens.scss';
// or colors only
@import './node_modules/@divriots/starter-sass/colors/colors.scss';
```

## Usage

Just copy the name and use a native CSS Custom Property syntax `var(--color-name)`.

## Accent colors

Colors based on the accent color of our brand.

### Fill

<dockit-css-showcases css-props-prefix="--color-accent-fill" component-class="box" style-key="background-color"></dockit-css-showcases>

### Text

<dockit-css-showcases css-props-prefix="--color-text-on-accent" component-class="box" style-key="background-color"></dockit-css-showcases>

## Neutral colors

Colors for secondary elements.

### Fill

<dockit-css-showcases css-props-prefix="--color-neutral-fill" component-class="box" style-key="background-color"></dockit-css-showcases>

### Text

<dockit-css-showcases css-props-prefix="--color-text-on-neutral" component-class="box" style-key="background-color"></dockit-css-showcases>

## Focus

Focus ring shadow color.

<dockit-css-showcases css-props-prefix="--color-focus" component-class="box" style-key="background-color"></dockit-css-showcases>
