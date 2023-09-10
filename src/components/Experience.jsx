import React from 'react'

function Experience() {

  const experience = [
    {
      id: 1,
      skill: 'HTML',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },  {
      id: 2,
      skill: 'CSS',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },  {
      id: 3,
      skill: 'JavaScript',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },  {
      id: 4,
      skill: 'React',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },  {
      id: 5,
      skill: 'Handlebars',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg'
    },  {
      id: 6,
      skill: 'TailWindCSS',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
    },  {
      id: 7,
      skill: 'MySQL',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },  {
      id: 8,
      skill: 'MongoDB',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },  {
      id: 9,
      skill: 'jQuery',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg'
    },  {
      id: 10,
      skill: 'Express',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },  {
      id: 11,
      skill: 'NodeJs',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },{
      id: 12,
      skill: 'GitHub',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    }

  ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-900 to to-zinc-800 w-full h-screen'> 



      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

        <div className='mb-5 mt-12'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experience</p>
        </div>

        <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

        {experience.map(({id, skill, href}) => (

        <div key={id} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-gray-700 shadow-gray-500 hover:shadow-blue-500'>
        <img src={href} alt={skill} className='w-20 mx-auto'/>
          <p className='mt-4'>{skill}</p>
        </div>

        ))}



        </div>

      </div>




    </div>
  )
}

export default Experience