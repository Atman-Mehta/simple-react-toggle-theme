import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <header>
          <h1>Theme Toggle Demo</h1>
          <ThemeToggle />
        </header>
        
        <main>
          <div className="card">
            <h2>Light and Dark Theme</h2>
            <p>
              This is a demonstration of a light and dark theme toggle in React.
              The theme preference is saved to localStorage and respects the user's
              system preference as the default.
            </p>
          </div>
          
          <div className="card">
            <h2>How it works</h2>
            <p>
              The theme context manages the current theme state and provides a toggle function.
              CSS variables are used to define different color schemes for light and dark themes.
              When the theme changes, CSS classes are applied to the document root element.
            </p>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;