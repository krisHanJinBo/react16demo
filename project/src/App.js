import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const element = <h1>我是标题{new Date().toLocaleTimeString()}</h1>
  return (
    <div className="App">
       {element}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          sdlkfjaslkdjfalksjd
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
