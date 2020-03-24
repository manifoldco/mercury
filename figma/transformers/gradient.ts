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

type StyleMap = { [key: string]: string };

export default function transform(): StyleMap {
  return {
    brand: 'linear-gradient(45deg, #da566c 0%, #8c4794 100%)',
    brandMuted: 'linear-gradient(45deg, #EDC2CA 0%, #E3CFE6 100%)',
    green: 'linear-gradient(237.2deg, #4cbc88 6.74%, #329dd1 111%)',
    greenMuted: 'linear-gradient(237.2deg, #D2F5E4 6.74%, #D5F1FF 111%)',
    red: 'linear-gradient(45deg, #AF0D1E 0%, #FF3570 100%)',
    redMuted: 'linear-gradient(225deg, #FFB3B3 0%, #FD83B2 100%)',
    yellow: 'linear-gradient(43.45deg, #FFB83A -2.87%, #FFE268 100%)',
    yellowMuted: 'linear-gradient(43.67deg, #FFD995 -2.85%, #FFF7D3 108.09%)',
    orange: 'linear-gradient(47.51deg, #FF0264 -34.31%, #FDDF31 111.92%)',
    orangeMuted: 'linear-gradient(45.05deg, #F5BCA5 -11.1%, #FFF1D7 111.79%)',
    purple: 'linear-gradient(225deg, #A572FF 0%, #543EDD 100%)',
    purpleMuted: 'linear-gradient(225deg, #EADEFF 0%, #CBC3FF 100%)',
    blue: 'linear-gradient(225deg, #329DD1 0%, #4F50A4 100%)',
    blueMuted: 'linear-gradient(225deg, #B1E5FF 0%, #C5C6FF 100%)',
    manifold:
      'linear-gradient(272.4deg, #FE1360 -13.37%, #814EAE 26.05%, #2D98CC 77.38%, #FD8745 95.25%, #FDC935 135.64%)',
  };
}
