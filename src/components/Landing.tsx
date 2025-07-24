import React from 'react';
import HeroImage from './HeroImage';

const Landing: React.FC = () => {
  return (
    <section>
      <div className='container py-5 mt-2'>
        <p className='display-1 caprasimo-regular text-center TT-landing-tag mb-1'>Pablo's TechTide</p>
        <p className='text-center h4'>Frontend to backend, logic to launch — code that flows with purpose.</p>
      </div>
      <HeroImage />
    </section>
  )
}

export default Landing