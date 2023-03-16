import React from "react";
import './App.css';
import Sidebar from './components/sidebar/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
//import Resume from './components/resume/Resume';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className = 'main'>
        <Home />
        <About />
        
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default App;
