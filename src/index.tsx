import React from 'react';
import ReactDOM from 'react-dom/client';
import { initAmplify } from './api/config/amplify';
import App from './App';

initAmplify();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
