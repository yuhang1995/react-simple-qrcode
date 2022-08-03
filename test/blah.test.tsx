import React from 'react';
import * as ReactDOM from 'react-dom';
import { Base } from '../stories/Thing.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Base />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
