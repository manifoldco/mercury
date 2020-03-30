const ICONS_FILE = 'pC4poTrGLfTWiDEMul9uPb';

module.exports = {
  commands: [
    [
      'components',
      {
        fileId: ICONS_FILE,
        onlyFromPages: ['Icons'],
        transformers: [
          require('@figma-export/transform-svg-with-svgo')({
            plugins: [{ removeDimensions: true }, { removeViewBox: false }],
          }),
        ],
        outputters: [
          require('@figma-export/output-components-as-svg')({
            output: './src',
          }),
        ],
      },
    ],
  ],
};
