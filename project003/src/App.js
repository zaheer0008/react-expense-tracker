import logo from './logo.svg';
import './App.css';
import ThemeContext from './context/ThemeContext.js';
import Main from "./MainWithFunction.jsx"
import { useState } from 'react';
import Header from './Header.jsx';
import ThemeToggler from './ThemeTogller';

function App() {
  const themeHook = useState("light");
  return (
        <ThemeContext.Provider value={themeHook}>
          <div>
            <Header />
            <Main />
          </div>
          </ThemeContext.Provider>
  );
}

export default App;
