import React from 'react';
import Landing from '../components/Landing';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Main: React.FC = () => {
  return (
    <>
      <Landing />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  )
}

export default Main;