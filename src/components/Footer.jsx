import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {BsMailbox, BsFillFileEarmarkTextFill} from "react-icons/bs"

function Footer() {

  const links =[
    {
      id: 1,
      child: (

        <>
          <FaLinkedin size={33}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/juan-pablo-archuleta/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (

        <>
        <FaGithub size={33}/>
        </>
      ),
      href: 'https://github.com/xJuanPablo',
    },
    {
      id: 3,
      child: (

        <>
        <BsMailbox size={33}/>
        </>
      ),
      href: "mailto:pabloarchuleta@gmail.com",
    },
    {
      id: 4,
      child: (

        <><BsFillFileEarmarkTextFill size={33}/>
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true
    },
  ]

  return (
    <section className='bg-gray-900 border-t w-full h-full min-h-fit flex flex-col justify-center items-center py-16 px-5  '>

      <p className='text-white text-center mt-2 mb-5'>
        © 2023, xJuanPablo
      </p>
      <div className='flex items-center justify-between'>

      {links.map(({id, href, download, child })=>(

        <div key={id} className='m-5 hover:scale-105  duration-300'>
        <a href={href} className='text-white ' download={download} target='_blank' rel="noreferrer"> {child} </a>
        </div>

      ))}

        </div>

    </section>
  )
}

export default Footer