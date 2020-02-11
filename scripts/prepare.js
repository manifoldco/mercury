const fs = require('fs');
const path = require('path');

const pkgRoot = path.resolve(__dirname, '..', 'build', 'diez-manifoldco-mercury-web');

// CSS
const BODY_FONT = 'var(--f-body)';
const cssFile = path.resolve(pkgRoot, 'static', 'styles.css');
let css = fs.readFileSync(cssFile, 'utf8');

// prevent system fonts from downloading
css = css.replace(/@font-face[^}]+}\n/gi, '');
css = css.replace(
  /\n  font-family: "SFProText-Regular",sans-serif;\n  font-weight: 400/gi,
  `\n  font-family: ${BODY_FONT};\n  font-weight: 400`
);
css = css.replace(
  /\n  font-family: "SFProText-Medium",sans-serif;\n  font-weight: 400/gi,
  `\n  font-family: ${BODY_FONT};\n  font-weight: 500`
);
css = css.replace(
  /\n  font-family: "SFProText-Semibold",sans-serif;\n  font-weight: 400/gi,
  `\n  font-family: ${BODY_FONT};\n  font-weight: 600`
);
css = css.replace(
  /\n  font-family: "SFProText-Bold",sans-serif;\n  font-weight: 400/gi,
  `\n  font-family: ${BODY_FONT};\n  font-weight: 700`
);

// shorten variable & class names
css = css.replace(/--styles-colors-/g, '--c-'); // colors
css = css.replace(/--styles-gradients-gradient-/g, '--g-'); // gradients

// remove unused classes
css = css.replace(/\n\.styles-colors-[^}]+}\n/gi, '');
css = css.replace(/\n\.styles-gradients-[^}]+}\n/gi, '');

// replace color, text-align, and text-decoration on typography utils
css = css.replace(/\n\.styles-typography-[^}]+}/gi, style =>
  style
    .replace(/\n  color:[^;]+;/, '')
    .replace(/\n  text-align:[^;]+;/, '')
    .replace(/\n  text-decoration:[^;]+;/, '')
);

// rename other classes
css = css.replace(/\n\.styles-typography-/gi, '\n.diez-typography--');

// remove hsla() wrapper to make the following possible: `color: hsla(var(--c-blue), 0.5);`
css = css.replace(/--[^:]+: hsla\([^)]+\)/g, value =>
  value.replace(': hsla(', ': ').replace(', 1)', '')
);

// add --f-text, --f-heading, and --f-mono to :root
css = css.replace(
  /(:root {[^}]+)}/,
  `$1  --f-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  --f-mono: "IBM Plex Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}`
);

fs.writeFileSync(cssFile, css, 'utf8');

// package.json
const pkgJsonPath = path.resolve(pkgRoot, 'package.json');
const pkgManifest = require(pkgJsonPath);
pkgManifest.name = '@manifoldco/mercury';
pkgManifest.private = false;
pkgManifest.description = 'Manifold Design tokens, powered by Diez';
pkgManifest.homepage = 'https://github.com/manifoldco/ui';
pkgManifest.bugs = { url: 'https://github.com/manifoldco/ui/issues' };
pkgManifest.repository = {
  type: 'git',
  url: 'git+https://github.com/manifoldco/mercury.git',
};
pkgManifest.main = './main.js';
pkgManifest.types = './index.d.ts';
fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgManifest, undefined, 2), 'utf8');

// Copy files
['README.md', 'LICENSE'].forEach(file =>
  fs.copyFileSync(path.resolve(__dirname, '..', file), path.resolve(pkgRoot, file))
);
