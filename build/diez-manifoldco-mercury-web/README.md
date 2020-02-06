# @manifoldco/mercury

Design tokens auto-generated from our Figma files. Powered by [Diez][diez].

## 📚 Usage

```bash
npm install @manifoldco/mercury
```

### CSS (preferred)

You’ll find some starter classes and CSS variables within `/static/styles.min.css`. Import it like
so:

```js
import '@manifoldco/mercury/static/styles.min.css';
```

To view the generated CSS, see the [`static`](./build/diez-manifoldco-mercury-web/static) folder in
this repo.

Refer to the [Diez documentation][diez-css] for more info.

### JavaScript

The JavaScript client allows for color manipulation and better handling of some values, but at an
impact on your bundlesize.

```js
import { DesignLanguage } from '@manifoldco/mercury';
```

Refer to the [Diez documentation][diez-js] for usage.

[diez-css]: https://diez.org/getting-started/css-sass.html
[diez-js]: https://diez.org/getting-started/javascript.html

## ♻️ Updating from Figma

```bash
npm run extract
```

You’ll need to authenticate with Figma.

⚠️ **Note**: when updating, be mindful of missing assets. Often times, Figma will simply time-out,
and fail to download.

## 🚀 Deploying

Currently, deploying happens manually. You’ll need to be signed into npm.

Bump the patch number (the last digit) in `package.json` manually:

```diff
-  "version": "0.0.9",
+  "version": "0.0.10",
```

**Commit this change.**

_Note: decause this is all managed by design, the version number doesn’t matter as much as
traditional packages._

Then, run:

```
npm run deploy
```

⚠️ **Note**: deploying won’t update the tokens! You’ll need to run `npm run extract` to pull the
latest values.

[diez]: https://diez.org
