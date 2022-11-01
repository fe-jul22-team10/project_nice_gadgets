import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

const Root: React.FC = () => (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<Root />);

