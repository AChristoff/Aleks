import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import LangContextProvider from "./context/langContext";
import App from './App';
import './index.scss';

ReactDOM.render(
  <LangContextProvider>
    <Router>
      <App />
    </Router>
  </LangContextProvider>,
  document.getElementById('root')
)


