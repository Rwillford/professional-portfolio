import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Project from './components/Project';
import ContactForm from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div>
      <Header></Header>
      <main>
        {!contactSelected ? (
          <>
            <Project currentProjects={currentProject}></Project>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
