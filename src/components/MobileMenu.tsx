import React from 'react';
import { NavLinks } from '../data/NavLinks';

const MobileMenu: React.FC = () => {
  return (
    <nav id='mobileNav' className='h-100 d-flex justify-content-center align-items-center'>
      <ul>
        {NavLinks.map((link, index) => (
          <li key={index} className='d-flex justify-content-center'>
            <a href={link.url} className='py-2 my-2 display-5 fw-bold text-decoration-none'>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileMenu;