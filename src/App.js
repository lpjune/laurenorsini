import React from 'react';
import Landing from "./components/Landing"
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Links from './components/Links';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Links />
    </div>
  );
}

export default App;