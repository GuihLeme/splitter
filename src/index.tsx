import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ValuesProvider } from './context/ValuesContext';

ReactDOM.render(
  <React.StrictMode>
    <ValuesProvider>
      <App />
    </ValuesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

