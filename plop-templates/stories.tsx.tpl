import React from 'react';

import { storiesOf } from '@storybook/react';

import {{name}} from './{{name}}';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const readme = require('../README.md');

storiesOf('components|{{name}}', module)
  .add(
    'default',
    () => {
      return <{{name}} />;
    },
    {
      // https://github.com/storybookjs/storybook/tree/master/addons/jest
      jest: ['{{name}}'],
      // https://github.com/storybookjs/storybook/tree/master/addons/notes
      notes: {
        markdown: readme,
      },
      // https://github.com/storybookjs/storybook/tree/master/addons/info
      info: {
        // override info props
      },
    },
  );
