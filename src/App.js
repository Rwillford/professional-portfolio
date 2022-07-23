import './App.css';
import './index.css';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  )
}

export default App;
