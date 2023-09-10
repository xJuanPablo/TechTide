import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-900 to-zinc-800 text-white'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

      <div className='pb-9'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-gray-200'>About</p>
      </div>

      <p className='text-xl text-gray-200 font-bold'>I am in the midst of a career transition from the real estate industry to the dynamic world of web development. Currently, I am pursuing a Full-stack Web Development Certificate from the University of Texas at Austin. This journey has ignited my passion for coding and equipped me with the essential knowledge and skills for success in this fast-paced field.
      </p>

      <br />

      <p className='text-xl text-gray-200 font-bold'>With a real estate background, I bring essential skills to the table. My analytical thinking and creative problem-solving empower me to address complex challenges in web development, and I possess a proven aptitude for rapid learning and effective communication. I'm excited to contribute my skill set to collaborative action and any challenges I may encounter.</p>
    </div>

    </div>
  )
}

export default About