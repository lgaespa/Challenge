import React from 'react';
import ReactDOM from 'react-dom';
import generateStore from './redux/store';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';

const store = generateStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
