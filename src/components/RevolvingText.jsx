import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function RevolvingText() {


  return (
      <div>
        <div className='text-xl'>
        <span className='font-bold inline text-gray-200'>I am</span>{' '}
          <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline text-transparent bg-clip-text'>
            <Typewriter
              words={['experienced in building dynamic web applications.', 'passionate about creating seamless user experiences.', 'dedicated to delivering high-quality software solutions.', 'ready to tackle complex development challenges.']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={60}
              deleteSpeed={10}
              delaySpeed={1000}
            />
          </span>
          </div>
      </div>
    )
}

export default RevolvingText