# @manifoldco/mercury

Design tokens auto-generated from our Figma files. Powered by [Diez][diez].

## 📚 Usage

```bash
npm install @manifoldco/mercury
```

### CSS (preferred)

You’ll find some starter classes and CSS variables within `/static/styles.css`. Import it like so:

```js
import '@manifoldco/mercury/static/styles.min.css';
```

Inside you’ll find something like the following (please note this is just an example; the actual CSS
file may have changed a little):

```css
:root {
  --c-white: 0, 0%, 100%;
  --c-green: 169.48905109489053, 58.29787234042554%, 46.07843137254902%;
  --c-muted-green: 156.85714285714286, 62.499999999999964%, 78.03921568627452%;
  --c-red: 346.4088397790055, 73.87755102040816%, 48.03921568627451%;
  --c-muted-red: 345.7627118644068, 100%, 88.4313725490196%;
  --c-blue: 224.0425531914894, 75.80645161290323%, 48.627450980392155%;
  --c-muted-blue: 218.1818181818182, 94.2857142857143%, 93.13725490196079%;
  --c-yellow: 48.55491329479769, 100%, 66.07843137254902%;
  --c-muted-yellow: 48.857142857142854, 100%, 86.27450980392157%;
  --c-orange: 29.714285714285715, 91.30434782608697%, 54.90196078431373%;
  --c-muted-orange: 24.666666666666657, 100%, 82.35294117647058%;
  --c-purple: 260.4347826086956, 60.52631578947367%, 55.294117647058826%;
  --c-muted-purple: 261.00000000000006, 71.42857142857146%, 89.01960784313725%;
  --c-teal: 188.4375, 85.71428571428571%, 43.92156862745098%;
  --c-muted-teal: 188.88888888888889, 75.00000000000004%, 85.88235294117648%;
  --c-gray-lightest: 240, 6.666666666666654%, 97.05882352941177%;
  --c-gray-lighter: 240, 2.7027027027026946%, 92.74509803921569%;
  --c-gray-light: 240, 1.4925373134328308%, 86.86274509803921%;
  --c-gray: 240, 2.752293577981655%, 57.25490196078431%;
  --c-gray-dark: 210, 4.395604395604395%, 35.68627450980392%;
  --c-gray-darker: 210, 12.280701754385966%, 22.352941176470587%;
  --c-black: 0, 0%, 0%;
  --c-color-yellow: 48.55491329479769, 100%, 66.07843137254902%;
  --g-green: linear-gradient(
    237deg,
    hsla(152.14285714285714, 45.528455284552855%, 51.76470588235295%, 1) 7%,
    hsla(199.62264150943395, 63.34661354581673%, 50.78431372549019%, 1) 111%
  );
  --g-brand: linear-gradient(
    240deg,
    hsla(340.3404255319149, 99.15611814345992%, 53.529411764705884%, 1) -12%,
    hsla(271.875, 38.095238095238095%, 49.411764705882355%, 1) 24%,
    hsla(199.62264150943395, 63.85542168674698%, 48.82352941176471%, 1) 70%,
    hsla(21.52173913043478, 97.87234042553192%, 63.13725490196078%, 1) 86%,
    hsla(44.39999999999999, 98.03921568627452%, 60%, 1) 123%
  );
  --g-green-muted: linear-gradient(
    237deg,
    hsla(150.8571428571429, 63.636363636363704%, 89.21568627450979%, 1) 7%,
    hsla(200, 100%, 91.76470588235294%, 1) 111%
  );
  --g-brand1: linear-gradient(
    45deg,
    hsla(350, 64.07766990291263%, 59.6078431372549%, 1) 0%,
    hsla(293.76623376623377, 35.15981735159818%, 42.94117647058824%, 1) 100%
  );
  --g-brand-muted: linear-gradient(
    45deg,
    hsla(348.83720930232556, 54.43037974683547%, 84.50980392156863%, 1) 0%,
    hsla(294.5454545454545, 29.72972972972973%, 85.49019607843138%, 1) 100%
  );
  --g-blue: linear-gradient(
    225deg,
    hsla(199.62264150943395, 63.34661354581673%, 50.78431372549019%, 1) 0%,
    hsla(239.2941176470588, 34.97942386831276%, 47.64705882352941%, 1) 100%
  );
  --g-blue-muted: linear-gradient(
    225deg,
    hsla(199.99999999999997, 100%, 84.70588235294117%, 1) 0%,
    hsla(238.96551724137933, 100%, 88.62745098039215%, 1) 100%
  );
  --g-yellow: linear-gradient(
    43deg,
    hsla(38.3756345177665, 100%, 61.372549019607845%, 1) -3%,
    hsla(48.47682119205298, 100%, 70.3921568627451%, 1) 100%
  );
  --g-yellow-muted: linear-gradient(
    44deg,
    hsla(38.49056603773584, 100%, 79.2156862745098%, 1) -3%,
    hsla(49.0909090909091, 100%, 91.37254901960785%, 1) 108%
  );
  --g-orange: linear-gradient(
    48deg,
    hsla(336.75889328063244, 100%, 50.3921568627451%, 1) -34%,
    hsla(51.17647058823529, 98.07692307692308%, 59.21568627450981%, 1) 112%
  );
  --g-orange-muted: linear-gradient(
    45deg,
    hsla(17.25, 80.00000000000004%, 80.3921568627451%, 1) -11%,
    hsla(38.999999999999986, 100%, 92.15686274509804%, 1) 112%
  );
  --g-purple: linear-gradient(
    225deg,
    hsla(261.70212765957444, 100%, 72.35294117647058%, 1) 0%,
    hsla(248.30188679245285, 70.04405286343612%, 55.490196078431374%, 1) 100%
  );
  --g-purple-muted: linear-gradient(
    225deg,
    hsla(261.8181818181818, 100%, 93.52941176470588%, 1) 0%,
    hsla(247.99999999999997, 100%, 88.23529411764706%, 1) 100%
  );
  --g-red: linear-gradient(
    45deg,
    hsla(353.7037037037037, 86.17021276595743%, 36.86274509803922%, 1) 0%,
    hsla(342.4752475247525, 100%, 60.3921568627451%, 1) 100%
  );
  --g-red-muted: linear-gradient(
    225deg,
    hsla(0, 100%, 85.09803921568627%, 1) 0%,
    hsla(336.8852459016394, 96.82539682539684%, 75.29411764705883%, 1) 100%
  );
  --f-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';
  --f-mono: 'IBM Plex Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
}

.diez-typography--caption {
  font-family: var(--f-body);
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--label {
  font-family: var(--f-body);
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--body {
  font-family: var(--f-body);
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--subheading-small {
  font-family: var(--f-body);
  font-weight: 500;
  font-style: normal;
  font-size: 11px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--subheading {
  font-family: var(--f-body);
  font-weight: 600;
  font-style: normal;
  font-size: 13px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--heading {
  font-family: var(--f-body);
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--heading-large {
  font-family: var(--f-body);
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--heading-extra-large {
  font-family: var(--f-body);
  font-weight: 500;
  font-style: normal;
  font-size: 32px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--small-screen-caption {
  font-family: var(--f-body);
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--small-screen-label {
  font-family: var(--f-body);
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--small-screen-body {
  font-family: var(--f-body);
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--small-screen-heading {
  font-family: var(--f-body);
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--small-screen-heading-large {
  font-family: var(--f-body);
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}

.diez-typography--small-screen-heading-extra-large {
  font-family: var(--f-body);
  font-weight: 500;
  font-style: normal;
  font-size: 26px;
  letter-spacing: 0px;
  text-align: start;
  text-decoration: none;
}
```

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
