import React from 'react';
import bookify from "../assets/portfolio/bookify.png";
import Weather from "../assets/portfolio/Weather.png";
import Schedule from "../assets/portfolio/Schedule.png";
import ExpressExtract from '../assets/portfolio/ExpressExtract.png';

const Portfolio = () => {

  const projects = [ 
    {
      id: 1,
      image: ExpressExtract,
      title: 'Express Extract',
      github: 'https://github.com/xJuanPablo/ExpressExtract',
      website: 'https://gleeful-piroshki-d88867.netlify.app/'
    },  {
      id: 2,
      image: Weather,
      title: 'Weather',
      github: 'https://github.com/xJuanPablo/WindWhisper',
      website: 'https://famous-malabi-a2e901.netlify.app/'
    },  {
      id: 3,
      image: Schedule,
      title: 'Day Scheduler',
      github: 'https://github.com/xJuanPablo/list-it',
      website: 'https://xjuanpablo.github.io/list-it/'
    }
  ]

  return (
    <section name="portfolio" className='w-full bg-cover h-full  bg-gradient-to-b from-zinc-800 to-gray-900 text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>


      <div className='pb-5'>
        <p className=' text-4xl font-bold inline border-b-4 border-gray-500 text-gray-200'>Portfolio</p>
      </div>
      <p className='text-xl py-6 text-gray-200 font-bold'>Here is a collection of a few of my Projects.</p>

      <div className='grid sm:grid-col-2 md:grid-col-3 gap-8 px-12 lg:gap-10 sm:px-0 lg:grid-cols-2 '>
    {projects.map(({id, image, title, github, website})=>(
      <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden  p-4 mx-auto flex-row duration-500 hover:shadow-blue-500 bg-gray-700'>
        <img src={image} alt={title} className='w-2/3 rounded-lg duration-200 hover:scale-105'/>
        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
          <h2>{title}</h2>
          <a href={github} className='duration-200 hover:scale-105' target='_blank' rel="noreferrer">GitHub</a>
          <a href={website} className='duration-200 hover:scale-105' target='_blank' rel="noreferrer">Website</a>
        </div>
      </div>
    ))}


      </div>
      </div>
    </section>
  )
}

export default Portfolio