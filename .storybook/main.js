module.exports = {
  addons: ['@storybook/addon-knobs/register'],
  stories: ['../stories/**/*.stories.js'],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    return config;
  },
};
