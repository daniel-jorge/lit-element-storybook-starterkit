import * as React from 'react';

import cn from 'classnames';
import classes from './{{name}}.module.scss';

interface {{name}}Props {
  // TODO: add component props here
}

const {{name}}: React.FC<{{name}}Props> = (props) => {
  return <span className={classes.root}>{{name}}</span>;
};

export default {{name}};
