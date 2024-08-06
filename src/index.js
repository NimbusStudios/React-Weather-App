/**
 * This is the entry point of the application.
 * It renders the main component, App, into the root HTML element.
 */

import React from 'react';
import ReactDOM from 'react-dom';

// Import the CSS file for styling
import './styles/styles.css';

// Import the main component of the application
import App from './App';

/**
 * Render the main component, App, into the root HTML element.
 * @param {ReactElement} app - The main component to be rendered.
 * @param {HTMLElement} root - The root HTML element where the component will be rendered.
 */
ReactDOM.render(<App />, document.getElementById('root'));

