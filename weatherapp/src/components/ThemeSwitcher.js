import React from 'react';

const ThemeSwitcher = ({ theme, setTheme }) => {
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeSwitcher;
