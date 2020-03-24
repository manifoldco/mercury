/**
 * Return static Manifold branded gradients
 *
 * Note(drew): This file is a little deceiving because you’d think we could
 * just pull gradients from Figma. Well, it’s HARD! I originalli tried copying
 * Diez’ linear-gradients code, but then I found a bug. 👀 Observe:
 *
 * Figma: linear-gradient(272.4deg, #FE1360 -13.37%, #814EAE 26.05%, #2D98CC 77.38%, #FD8745 95.25%, #FDC935 135.64%)
 * Diez: linear-gradient(240deg, hsla(340.3404255319149, 99.15611814345992%, 53.529411764705884%, 1) -12%, hsla(271.875, 38.095238095238095%, 49.411764705882355%, 1) 24%, hsla(199.62264150943395, 63.85542168674698%, 48.82352941176471%, 1) 70%, hsla(21.52173913043478, 97.87234042553192%, 63.13725490196078%, 1) 86%, hsla(44.39999999999999, 98.03921568627452%, 60%, 1) 123%);
 *
 * 272.2deg !== 240deg! This is just an example; in other gradients I found the
 * values off by just enough each time it made me not want to use it.
 *
 * Until I either find an existing solution that can generate CSS from Figma
 * (currently CSS isn’t accessible from Figma’s API), or I do the maths myself,
 * returning static values here is less work and easier to manage since these
 * don’t change very often.
 */
import { DesignTokens } from '../../types/design-tokens';

export default function transform(): DesignTokens['gradient'] {
  return {
    brand: 'linear-gradient(45deg, #da566c 0%, #8c4794 100%)',
    brandMuted: 'linear-gradient(45deg, #edc2ca 0%, #e3cfe6 100%)',
    green: 'linear-gradient(237.2deg, #4cbc88 6.74%, #329dd1 111%)',
    greenMuted: 'linear-gradient(237.2deg, #d2f5e4 6.74%, #d5f1ff 111%)',
    red: 'linear-gradient(45deg, #af0d1e 0%, #ff3570 100%)',
    redMuted: 'linear-gradient(225deg, #ffb3b3 0%, #fd83b2 100%)',
    yellow: 'linear-gradient(43.45deg, #ffb83a -2.87%, #ffe268 100%)',
    yellowMuted: 'linear-gradient(43.67deg, #ffd995 -2.85%, #fff7d3 108.09%)',
    orange: 'linear-gradient(47.51deg, #ff0264 -34.31%, #fddf31 111.92%)',
    orangeMuted: 'linear-gradient(45.05deg, #f5bca5 -11.1%, #fff1d7 111.79%)',
    purple: 'linear-gradient(225deg, #a572ff 0%, #543edd 100%)',
    purpleMuted: 'linear-gradient(225deg, #eadeff 0%, #cbc3ff 100%)',
    blue: 'linear-gradient(225deg, #329dd1 0%, #4f50a4 100%)',
    blueMuted: 'linear-gradient(225deg, #b1e5ff 0%, #c5c6ff 100%)',
    manifold:
      'linear-gradient(272.4deg, #fe1360 -13.37%, #814eae 26.05%, #2d98cc 77.38%, #fd8745 95.25%, #fdC935 135.64%)',
  };
}
