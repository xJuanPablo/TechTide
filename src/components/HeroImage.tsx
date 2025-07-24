import React from 'react';
import Hero from '../assets/images/Heading.jpg';

const HeroImage: React.FC =() => {
  return (
    <img src={Hero} alt="" className='w-100'/>
  )
}

export default HeroImage