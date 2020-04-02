# ☤ Mercury

Design tokens auto-generated from our Figma files.

[👉 **View Storybook**][storybook]

## 💽 Usage

With [Node][node] installed, run the following in the project folder of your choice:

```bash
npm install @manifoldco/mercury
```

### 👓 Sass

Mercury ships with some [Sass Modules][sass-modules] which can be imported and extended if you’re
using version `1.23.0` or greater:

```scss
@use "node_modules/@manifoldco/mercury";

.Manifold__Button {
  @include mercury.Manifold__Button; /* extend button styles */
  @include mercury.Manifold__Typography__Body;

  background: mercury.$color-purple; /* provide overrides from common variables */
  color: mercury.$color-white;
  font-family: mercury.$typography-bodyMono-fontFamily;
}
```

For reference, please see the [generated `.scss` files][local-scss] which are tracked in version
control.

### 🐢 JS

```js
import { css } from 'linaria';
import { color, typography } from '@manifoldco/mercury';

const header = css`
  font-family: ${typography.body.fontFamily};
  color: ${color.black};
`;
```

## 🌈 Tokens

| Group                                             | Sass            | JS             |
| :------------------------------------------------ | :-------------- | :------------- |
| [Color](./src/design-tokens/color.scss)           | `$color-*`      | `color.*`      |
| [Gradient](./src/design-tokens/gradient.scss)     | `$gradient-*`   | `gradient.*`   |
| [Shadow](./src/design-tokens/shadow.scss)         | `$shadow-*`     | `shadow.*`     |
| [Typography](./src/design-tokens/typography.scss) | `$typography-*` | `typography.*` |

### ⚛️ Components

| Component               | Description                                                     |
| :---------------------- | :-------------------------------------------------------------- |
| `.Manifold__Button`     | Those Manifold buttons you know and love                        |
| `.Manifold__Typography` | Global typography styles to really lighten that copy/paste load |

### 🚺 Icons

Icons are all included in the [`icons/`][local-icons] folder as `.svg` files. You should be able to
import these however you normally import files from npm. If using webpack, you may need to enable
[raw-loader][raw-loader] for SVG files.

## Contributing

### 📚 Running Storybook Locally

```
npm run dev
```

### ♻️ Updating from Figma

Updating from Figma happens ✨ _automatically_ ✨ with a daily check and Pull Requests. However, if
you want to manually try it, add `export FIGMA_TOKEN=[token]` to your `~/.zshrc` or `~/.bashrc` and
run `npm run extract`.

### 🚀 Deploying to npm

npm deployment happens ✨ _automatically_ ✨ on merge to `master`. However, you may still manually
create tags to release yourself (say if you were testing something in a branch, you could tag
`v0.5.0-alpha.0` to test publishing to npm without creating a release that will update all our
apps).

[figma]: https://www.figma.com/developers/api#access-tokens
[local-icons]: ./src/icons
[local-releases]: ./releases
[local-scss]: ./src
[node]: https://nodejs.org
[raw-loader]: https://github.com/webpack-contrib/raw-loader
[sass-modules]: https://sass-lang.com/blog/the-module-system-is-launched
[storybook]: https://mercury.manifold.now.sh
