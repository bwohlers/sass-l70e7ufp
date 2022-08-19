# Text Mixins

Contains common patterns to style text.

## Setup

```scss
// all mixins
@use './node_modules/@divriots/starter-sass/mixins.scss';
// or text-mixins only
@use './node_modules/@divriots/starter-sass/text-mixins/text-mixins.scss';
```

Make sure to use a correct namespace `text-mixins` when using the second method.

## Mixins

### text-ellipsis

Cuts long text with an ellipsis.

```scss
.link-container {
  max-width: 100px;
}
.link {
  @include mixins.text-ellipsis();
}
```

```html
<li class="link-container">
  <a class="link" href="some-url">Possibly long name of the page</a>
</li>
```
