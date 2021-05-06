import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { enableES5 } from 'immer';
import store from 'src/redux';
import App from 'src/App';

//--- Style
import 'nprogress/nprogress.css';
import 'src/assets/css/style.scss';

enableES5();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
