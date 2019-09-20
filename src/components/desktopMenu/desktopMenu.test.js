import React from 'react';
import ReactDOM from 'react-dom';
import DesktopMenu from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DesktopMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});