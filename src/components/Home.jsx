import React from 'react'
import hero from '../assets/hero.png'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import RevolvingText from './RevolvingText'

const Home = () => {
  return (
    <div name='home' id='home' className='h-screen w-full bg-gradient-to-b from-zinc-800 to-gray-900 '>


      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  md:flex-row  '>

        <div className='flex flex-col justify-center h-full -mt-24'>
          <h2 className='text-3xl sm:text-7xl font-bold text-gray-200  '>Full Stack M.E.R.N. Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            <RevolvingText/>
          </p>


          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer -mb-24'>
              Portfolio 
              <span className='group-hover:rotate-90 duration-300 pl-1'>
              <BsFillArrowRightCircleFill />
              </span>
            </Link>
          </div>


        </div>


        <div className="rounded-full">
          <img src={hero} alt="Developer" className=' mx-auto  md:w-full w-2/3 -mt-24 rounded-e-full'/>
        </div>


      </div>
    </div>
  )
}

export default Home

