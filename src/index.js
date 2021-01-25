import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { App } from './App';
import { ThemeContext } from './context/ThemeContext';
import './index.css';

const ThemeMode = {
  darkMode: 'darkMode',
  lightMode: 'lightMode',
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={ThemeMode}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
