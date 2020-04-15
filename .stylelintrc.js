module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  syntax: 'scss',
  rules: {
    'at-rule-no-unknown': null,
    'selector-max-specificity': '0,1,3',
    'no-descending-specificity': null,
  },
};
