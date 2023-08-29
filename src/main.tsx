import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/globalStyle.css';
import './styles/layout.css';
import './styles/header.css';
import './styles/products.css';
import './styles/card.css';
import './styles/filter.css';
import './styles/snackbar.css';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
