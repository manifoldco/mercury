# @manifoldco/mercury

## Usage

```bash
npm install @manifoldco/mercury
```

### CSS (preferred)

You’ll find some starter classes and CSS variables within `/static/styles.css`. Import it like so:

```js
import "@manifoldco/mercury/static/styles.css";
```

Refer to the [Diez documentation][diez-css] for usage.

### JavaScript

The JavaScript client allows for color manipulation and better handling of some values, but at an impact on your bundlesize.

```js
import { DesignLanguage } from "@manifoldco/mercury";
```

Refer to the [Diez documentation][diez-js] for usage.

[diez-css]: https://diez.org/getting-started/css-sass.html
[diez-js]: https://diez.org/getting-started/javascript.html
