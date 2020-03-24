# @manifoldco/mercury

Design tokens auto-generated from our Figma files.

## 📚 Usage

```bash
npm install @manifoldco/mercury
```

### 👓 Sass Modules

Mercury ships with some [Sass Modules][sass-modules] which can be imported and extended if you’re
using Sass:

```scss
@use "node_modules/@manifoldco/mercury";

.Manifold__Button {
  @include mercury.Manifold__Button; /* extend button styles */
  @include mercury.Manifold__Typography__Body;

  background: mercury.$color-purple; /* provide overrides from common variables */
  color: mercury.$color-white;
  font-family: mercury.$typography-bodyMonoFontFamily;
}
```

For reference, please see the [generated `.scss` files](./dist) which are tracked in version
control.

## 🌀 Variables

| Group                                             | Sass Prefix     |
| :------------------------------------------------ | :-------------- |
| [Color](./src/design-tokens/color.scss)           | `$color-*`      |
| [Gradient](./src/design-tokens/gradient.scss)     | `$gradient-*`   |
| [Shadow](./src/design-tokens/shadow.scss)         | `$shadow-*`     |
| [Typography](./src/design-tokens/typography.scss) | `$typography-*` |

## ⚛️ Components

| Component | Description                              |
| :-------- | :--------------------------------------- |
| `.button` | Those Manifold buttons you know and love |

## 🚺 Icons

Icons are all included in the [`icons/`](./src/icons) folder as `.svg` files. You should be able to
import these however you normally import files from npm.

## ♻️ Updating from Figma

In your `.zshrc` or `.bashrc`, add your [Figma access token][figma] (needed to access Manifold
files):

```
export FIGMA_TOKEN=myaccesstoken
```

Then run:

```bash
npm run extract
```

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

[figma]: https://www.figma.com/developers/api#access-tokens
[sass-modules]: https://sass-lang.com/blog/the-module-system-is-launched
