import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Router/App';
import { store } from './Redux/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);

