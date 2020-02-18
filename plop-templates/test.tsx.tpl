import React from 'react';
import { render } from '@testing-library/react';

import {{name}} from './{{name}}';

describe('<{{name}} />', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<{{name}} />);
    expect(getByText('{{name}}')).toBeDefined();
  });

  it('should definitely have more tests ;)', () => {
    expect(true).toBe(false);
  });
});
