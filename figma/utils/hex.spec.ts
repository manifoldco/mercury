import hex from './hex';

// prettier-ignore
const colors = {
  blue: { hex: '#1e50da', figma: { r: 0.11764705926179886, g: 0.3137255012989044, b: 0.8549019694328308, a: 1 }, },
  green: { hex: '#31baa2', figma: { r: 0.1921568661928177, g: 0.729411780834198, b: 0.6352941393852234, a: 1 }, },
  purple: { hex: '#7748d2', figma: { r: 0.46666666865348816, g: 0.2823529541492462, b: 0.8235294222831726, a: 1, }, },
  red: { hex: '#d52049', figma: { r: 0.8352941274642944, g: 0.125490203499794, b: 0.2862745225429535, a: 1 }, },
  white: { hex: '#ffffff', figma: { r: 1, g: 1, b: 1, a: 1 } },
};

describe('hex', () => {
  Object.entries(colors).forEach(([name, color]) => {
    it(name, () => {
      expect(hex(color.figma)).toBe(color.hex);
    });
  });
});
