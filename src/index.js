import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './index.scss';
import NavContextProvider from './context/nav-context'

ReactDOM.render(
  <NavContextProvider>
    <Router>
      <App />
    </Router>
  </NavContextProvider>,

  document.getElementById('root')
);


