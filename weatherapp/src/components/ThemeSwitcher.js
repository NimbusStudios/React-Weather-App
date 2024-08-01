import React from 'react';

const ThemeSwitcher = ({ theme, setTheme }) => {
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i> Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeSwitcher;
