const path = require('path');

module.exports = {
  // stories are loaded in preview.ts
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false,
        },
        include: [path.resolve(__dirname, '../packages'), path.resolve(__dirname, '../utils')],
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-jest/register',
    '@storybook/addon-a11y/register',
    '@storybook/theming'
  ],
};