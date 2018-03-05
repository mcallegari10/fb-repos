import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

import App from '~components/App'; // eslint-disable-line import/first
import store from '~store'; // eslint-disable-line import/first

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
