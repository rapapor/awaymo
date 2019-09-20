import React from 'react';
import ReactDOM from 'react-dom';
import MobileMenu from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MobileMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});