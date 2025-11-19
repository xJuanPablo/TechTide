import React from 'react';
import HeroImage from './HeroImage';

const Landing: React.FC = () => {
  return (
    <>
    <section className='tt-hero text-center py-5'>
      <div className='container'>
        <h2 className='display-4 caprasimo-regular fw-bold'>Building Waves in Technology</h2>
        <p className='lead mt-2 mb-4'>Frontend to backend, logic to launch — code that flows with purpose.</p>
        <a href="#projects" className="btn btn-primary btn-lg px-4">View My Work</a>
      </div>
    </section>
      <HeroImage />
    </>
  )
}

export default Landing