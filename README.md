# parcel-plugin-lit-svg

Turns SVG imports into an inlined
[lit-html](https://github.com/Polymer/lit-html) `svg` template suitable for
including in other `lit-html` or `lit-element` templates.

## Usage

`lit-html` must be included as a dependency of your project (transitively
through lit-element, or directly).

```
npm install parcel-plugin-lit-svg
```

```js
import {html} from 'lit-html'
import MyCoolVector from './my-cool-vector.svg'

export default html`
  <div class="vector-container">
    ${MyCoolVector}
  </div>
`
```

## License

MIT