import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-900 to-zinc-800 text-white'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

      <div className='pb-9'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-gray-200'>About</p>
      </div>

      <p className='text-xl text-gray-200 font-bold'>Welcome to my web portfolio! I'm a full-stack web developer, holding a certificate from the University of Texas at Austin, complemented by a solid foundation in business with a Bachelor of Arts in Business Administration.
      </p>

      <br />

      <p className='text-xl text-gray-200 font-bold'>Coming from a real estate background, I merge analytical thinking and creative problem-solving to navigate the dynamic world of web development. My journey reflects a commitment to rapid learning and a passion for crafting robust digital solutions.</p>

      <br />

      <p className='text-xl text-gray-200 font-bold'> As a collaborator, I integrate effective communication and adaptability into team dynamics. My business education enhances this collaborative approach, providing valuable insights into how technology aligns with broader business objectives. </p>

      <br />

      <p className='text-xl text-gray-200 font-bold'>Explore my portfolio to witness projects showcasing not only technical proficiency but also a dedication to creating user-friendly web experiences. </p>

    </div>

    </div>
  )
}

export default About