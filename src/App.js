import React, { useState, useContext } from 'react';

import { Header } from './components/Header';
import { Characters } from './components/Characters';
import { ThemeContext } from './context/ThemeContext';

export const App = () => {
  const [theme, setTheme] = useState(false);
  const { darkMode, lightMode } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(!theme);
  };
  return (
    <div className={`app ${theme ? darkMode : lightMode}`}>
      <Header />
      <div className='btn-align'>
        <button className='btn-theme' type='button' onClick={handleClick}>
          {theme ? <b>LightMode 🌞</b> : <b>DarkMode 🌑</b>}
        </button>
      </div>
      <Characters />
    </div>
  );
};
