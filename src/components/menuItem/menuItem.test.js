import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});