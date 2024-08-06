import React from 'react';

/**
 * ThemeSwitcher component.
 *
 * A component that allows the user to switch between light and dark themes.
 *
 * @param {string} theme - The current theme of the app.
 * @param {function} setTheme - A function to set the theme of the app.
 * @return {JSX.Element} The rendered ThemeSwitcher component.
 */
const ThemeSwitcher = ({ theme, setTheme }) => {
  // Handle the click event to switch the theme.
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // Render a button with an icon and a label to switch the theme.
    <button onClick={handleClick}>
      {/* Render the icon based on the current theme. */}
      <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
      {/* Render the label based on the current theme. */}
      &nbsp;Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeSwitcher;

