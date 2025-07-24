import React from 'react';
import HeroImage from './HeroImage';

const Landing: React.FC = () => {
  return (
    <section className=''>
      <div className='container py-5 mt-2'>
        <p className='display-1 caprasimo-regular text-center'>Pablo's TechTide</p>
        <p className='text-center h4'>Frontend to backend, logic to launch — code that flows with purpose.</p>
      </div>
      <HeroImage />
    </section>
  )
}

export default Landing