# LitElement storybook starterkit

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](XXX)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

### Setup

```sh
git clone git@github.com:daniel-jorge/lit-element-storybook-starterkit.git

cd lit-element-storybook-starterkit

yarn install

yarn lerna run build

yarn storybook:start
```

Storybook will automatically open a page in your default browser.

### Available scripts

| Script                  | Description                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------- |
| `yarn start`  | Starts the storybook development environment.<br />[http://localhost:9009/](http://localhost:9009/) |
| `yarn storybook:build`  | Builds the storybook static site.                                                                   |
| `yarn storybook:deploy` | Builds and deploys the storybook static site to github pages.                                       |
| `yarn publish:release`  | Releases a new version of the libraries.<br />**This command can only be run from master.**         |
| `yarn plop`             | Generates a new package or component.                                                               |
| `yarn test`             | Runs all tests.                                                                                     |
| `yarn test --watch`     | Runs tests in watch mode.                                                                           |
| `yarn test --coverage`  | Runs test coverage.                                                                                 |
| `yarn build`            | Builds all packages.                                                                                |
