import React from 'react'
import hero from '../assets/hero.png'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div name='home' id='home' className='h-screen w-full bg-gradient-to-b from-gray-900 to-gray-700 '>


      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>

        <div className='flex flex-col justify-center h-full -mt-24'>
          <h2 className='text-3xl sm:text-7xl font-bold text-white'>Full Stack M.E.R.N. Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores maxime quo sapiente 
          </p>


          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer -mb-24'>
              Portfolio 
              <span className='group-hover:rotate-90 duration-300 pl-1'>
              <BsFillArrowRightCircleFill />
              </span>
            </button>
          </div>


        </div>


        <div className="rounded-tl-lg">
          <img src={hero} alt="Developer" className=' mx-auto w-2/3 md:w-full sm:w-96 rounded-tl-lg -mt-24' />
        </div>


      </div>
    </div>
  )
}

export default Home

