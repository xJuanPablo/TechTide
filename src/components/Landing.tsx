import React from 'react';
import Hero from '../assets/images/Heading.jpg';

const Landing: React.FC = () => {
  return (
    <section className='py-5 mt-5'>
      <div className='container'>
        Landing
      </div>
      <img src={Hero} alt="" className='w-100'/>
    </section>
  )
}

export default Landing