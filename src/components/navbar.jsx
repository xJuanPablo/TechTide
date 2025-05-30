import React, {useState} from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavBar = () => {

  const [nav, setNav] = useState(false)

  const anchors = [
    {
      id: 1,
      link: 'home'
    },{
      id: 2,
      link: 'about'
    },{
      id: 3,
      link: 'portfolio'
    },{
      id: 4,
      link: 'experience'
    },{
      id: 5,
      link: 'contact'
    }
  ]

  return (
    <header className='flex justify-between items-center w-full h-20 text-white fixed bg-gray-900 px-4 border-b-2' style={{zIndex: 100}}>
      <div>
        <h1 className='text-4xl text-blue-100'>Pablo's <span>TechTide</span></h1>
      </div>
      <ul className='hidden md:flex'>
        {anchors.map(({id, link}) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-blue-400 duration-200'>
            <Link to={link} smooth duration={500}>{link}</Link>
            </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
      {nav ? <FaTimes set={50}/> : <FaBarsStaggered size={30} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-zinc-800 to-gray-900 text-gray-300'>
          {anchors.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={()=> setNav(!nav)} to={link} scroll duration={500}>{link}</Link>
            </li>
            ))}
        </ul>
      )}
    </header>  
  )
}

export default NavBar;  