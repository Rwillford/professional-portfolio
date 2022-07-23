import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Project from './components/Project';
import ContactForm from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [projects] = useState([
    { name: 'Recipe Roulette', description: 'This app grabs a random food recipe & drink for you to try!'},
    { name: 'LEGO Twitter', description: 'Social Media site all about LEGO!'},
    { name: 'Low Tech Blog', description: 'A MVP level blog site!'},
    { name: 'Trip Weather OutLook', description: 'A weather forecast app!'},
  ])

  const [currentProject, setCurrentProject] = useState(projects[0]);

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
