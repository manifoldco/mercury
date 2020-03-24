# @manifoldco/mercury

Design tokens auto-generated from our Figma files.

## 📚 Usage

```bash
npm install @manifoldco/mercury
```

### Sass Modules

Mercury ships with some [Sass Modules][sass-modules] which can be imported and extended if you’re
using Sass:

```scss
@use "@manifoldco/mercury";

.Manifold__Button {
  @include mercury.button; /* extend button styles */

  background: mercury.$color-purple; /* provide overrides from common variables */
  color: mercury.$color-white;
}
```

For reference, please see the [generated `.scss` files](./dist) which are tracked in version
control.

## Variables

| Group    | Sass Name               |
| :------- | :---------------------- |
| Color    | `$color-black`          |
| Color    | `$color-blue`           |
| Color    | `$color-borderGray`     |
| Color    | `$color-gray`           |
| Color    | `$color-grayDark`       |
| Color    | `$color-grayDarker`     |
| Color    | `$color-grayLight`      |
| Color    | `$color-grayLighter`    |
| Color    | `$color-grayLightest`   |
| Color    | `$color-green`          |
| Color    | `$color-mutedBlue`      |
| Color    | `$color-mutedGreen`     |
| Color    | `$color-mutedOrange`    |
| Color    | `$color-mutedPurple`    |
| Color    | `$color-mutedRed`       |
| Color    | `$color-mutedTeal`      |
| Color    | `$color-mutedYellow`    |
| Color    | `$color-orange`         |
| Color    | `$color-purple`         |
| Color    | `$color-red`            |
| Color    | `$color-teal`           |
| Color    | `$color-white`          |
| Color    | `$color-yellow`         |
| Gradient | `$gradient-brand`       |
| Gradient | `$gradient-brandMuted`  |
| Gradient | `$gradient-green`       |
| Gradient | `$gradient-greenMuted`  |
| Gradient | `$gradient-red`         |
| Gradient | `$gradient-redMuted`    |
| Gradient | `$gradient-yellow`      |
| Gradient | `$gradient-yellowMuted` |
| Gradient | `$gradient-orange`      |
| Gradient | `$gradient-orangeMuted` |
| Gradient | `$gradient-purple`      |
| Gradient | `$gradient-purpleMuted` |
| Gradient | `$gradient-blue`        |
| Gradient | `$gradient-blueMuted`   |
| Gradient | `$gradient-manifold`    |
| Shadow   | `$shadow-far`           |
| Shadow   | `$shadow-near`          |

## Components

| Component | Description                              |
| :-------- | :--------------------------------------- |
| `.button` | Those Manifold buttons you know and love |

## ♻️ Updating from Figma

In your `.zshrc` or `.bashrc`, add your [Figma access token][figma] (needed to access Manifold
files):

```
export FIGMA_ACCESS_TOKEN=myaccesstoken
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
