import './App.css';
import './index.css';
import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import ContactForm from './components/Contact';
import Project from './components/Projects'
import Footer from './components/Footer'
import Resume from './components/Resume'

function App() {
  const [contactSelected, setContactSelected] =  useState(false);



  return (
    <div>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
            <Project />
            <About />
            <Resume />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App;
