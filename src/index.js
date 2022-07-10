import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'mobx-react';

import ButtonsStore from './data/stores/ButtonsStore';

import './sass/style.sass';

import App from './App';

const animationPatterns = {
  startLoading: {
    opacity: 0,
  },

  endLoading: { 
    opacity: 1,
    transition: { ease: 'easeIn', duration: .05 },
  },

  exitLoading: {
    opacity: 0,
    transition: { ease: 'easeIn', duration: .05 },
  },
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider ButtonsStore={ButtonsStore} animationPatterns={animationPatterns}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);