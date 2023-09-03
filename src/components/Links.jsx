import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {BsMailbox, BsFillFileEarmarkTextFill} from "react-icons/bs"


export const Links = () => {

  const links =[
    {
      id: 1,
      child: (

        <>
        LinkedIn <FaLinkedin size={33}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/juan-pablo-archuleta/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (

        <>
        GitHub <FaGithub size={33}/>
        </>
      ),
      href: 'https://github.com/xJuanPablo',
    },
    {
      id: 3,
      child: (

        <>
        Mail <BsMailbox size={33}/>
        </>
      ),
      href: "mailto:pabloarchuleta@gmail.com",
    },
    {
      id: 4,
      child: (

        <>
        Resume <BsFillFileEarmarkTextFill size={33}/>
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true
    },
  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>


    <ul>
      {links.map((link) => (



      <li key={link.id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${link.style}`}>
        <a href={link.href} className='flex justify-between items-center w-full text-white' download={link.download} target='_blank' rel="noreferrer"> 
          {link.child} 

        </a>
      </li>




      ))}
    </ul>


    </div>
  )
}