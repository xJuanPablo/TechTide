import React, {useState} from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes} from 'react-icons/fa'

const NavBar = () => {

  const [nav, setNav] = useState(false)

  const anchors = [
    {
      id: 1,
      link: 'Home'
    },{
      id: 2,
      link: 'About'
    },{
      id: 3,
      link: 'Portfolio'
    },{
      id: 4,
      link: 'Experience'
    },{
      id: 5,
      link: 'Contact'
    }
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
      <div>
        <h1 className='text-4xl'>Pablo's <span>TechTide</span></h1>
      </div>


      <ul className='hidden md:flex'>
        {anchors.map(a => (
          <li key={a.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{a.link}</li>
        ))}
      </ul>


      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
      {nav ? <FaTimes set={50}/> : <FaBarsStaggered size={30} />}
      </div>


      {nav && (

      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-500'>
        {anchors.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            {link}
          </li>
          ))}
      </ul>


      )}



    

    </div>  
  )
}

export default NavBar;  