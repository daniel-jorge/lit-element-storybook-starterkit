const fs = require('fs');
const { execSync } = require('child_process');

const getComponentInfo = () => fs.readdirSync('packages/');

const execCommand = (cmd, defaultValue = '') => {
  try {
    return execSync(cmd)
      .toString()
      .trim();
  } catch (err) {
    return defaultValue;
  }
};

const getUserName = () => execCommand('git config --get user.name');
const getUserEmail = () => execCommand('git config --get user.email');

module.exports = function(plop) {
  plop.setGenerator('package', {
    description: 'create a new package or add a new component to an existing package',
    prompts: [
      {
        name: 'type',
        type: 'list',
        choices: [
          {
            name: 'a new package',
            value: 'package',
          },
          { 
            name: 'add a component to an existing package', 
            value: 'component' 
          },
        ],
        message: 'What do want to do?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        filter: value => plop.getHelper('pascalCase')(value),
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'What is your name?',
        default: () => getUserName(),
        when: answers => answers.type === 'package',
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'What is your email?',
        default: () => getUserEmail(),
        when: answers => answers.type === 'package',
      },
      {
        type: 'confirm',
        name: 'useStyles',
        message: 'with styles?',
        default: true,
      },
      {
        name: 'main',
        type: 'list',
        choices: () => getComponentInfo(),
        message: 'What is the parent package?',
        when: answers => answers.type === 'component',
      },
    ],
    actions: inputs => {
      const data = {
        dir: plop.getHelper('kebabCase')(inputs.main || inputs.name),
        withStyles: inputs.useStyles ? '.with-styles' : '',
        libName: plop.getHelper('kebabCase')(inputs.name),
      };
      let actions = [
        {
          type: 'add',
          data,
          path: 'packages/{{dir}}/src/{{name}}.tsx',
          templateFile: inputs.useStyles
            ? 'plop-templates/function-component.styled.tsx.tpl'
            : 'plop-templates/function-component.tsx.tpl',
        },
        {
          type: 'add',
          data,
          path: 'packages/{{dir}}/src/{{name}}.test.tsx',
          templateFile: 'plop-templates/test.tsx.tpl',
        },
      ];
      if (inputs.useStyles) {
        actions = [
          ...actions,
          {
            type: 'add',
            data,
            path: 'packages/{{dir}}/src/{{name}}.module.scss',
            templateFile: 'plop-templates/module.scss.tpl',
          },
        ];
      }
      if (inputs.type === 'package') {
        actions = [
          ...actions,
          {
            type: 'add',
            data,
            path: 'packages/{{dir}}/src/index.ts',
            templateFile: 'plop-templates/index.ts.tpl',
          },
          {
            type: 'add',
            data,
            path: 'packages/{{dir}}/src/{{name}}.stories.tsx',
            templateFile: 'plop-templates/stories.tsx.tpl',
          },
          {
            type: 'add',
            data,
            path: 'packages/{{dir}}/README.md',
            templateFile: 'plop-templates/README.md.tpl',
          },
          {
            type: 'add',
            data,
            path: 'packages/{{dir}}/package.json',
            templateFile: 'plop-templates/package.json.tpl',
          },
          {
            type: 'add',
            data,
            path: 'packages/{{dir}}/rollup.config.js',
            templateFile: 'plop-templates/rollup.config.js.tpl',
          },
          {
            type: 'add',
            data,
            path: 'packages/{{dir}}/tsconfig.json',
            templateFile: 'plop-templates/tsconfig.json.tpl',
          },
        ];
      }
      return actions;
    },
  });
};
