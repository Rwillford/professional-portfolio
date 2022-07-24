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
  const [categories] = useState([
    { name: 'about'},
    { name: 'project'},
    { name: 'contact'},
    { name: 'resume'}
  ])
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] =  useState(false);

  function activeCategory(currentCategory, categories) {
    switch(currentCategory.name) {
      case 'about': 
        return(<About />)
      case 'project':
        return(<Project />)
      case 'contact':
        return(<ContactForm />)
      case 'resume':
        return(<Resume />)
      default: 
        return(<About />)
    };
  }
  

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {activeCategory(currentCategory)}
      </main>
      <Footer />
    </div>
  )
}

export default App;
