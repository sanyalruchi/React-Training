import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<React.Suspense fallback={'...loading'}><App /></React.Suspense>, div);
  ReactDOM.unmountComponentAtNode(div);
});
