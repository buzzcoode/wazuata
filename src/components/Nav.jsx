import { useState } from 'react'
import { Link } from 'react-router-dom'

import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex items-center max-w-screen-2xl gap-16 mx-auto'>
          <Link to="/">
            <img src={headerLogo} alt="logo" className="w-20 h-auto" />
          </Link>
          <div className='lg:hidden'>
            <img
              src={hamburger}
              alt="menu"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div
            className={`lg:hidden absolute top-16 z-10 right-0 mt-2 p-4 border border-gray-300 shadow-md ${
              menuOpen ? 'bg-white block' : 'hidden'
            }`}
          >
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className='text-lg text-gray-700 font-semibold hover:text-coral-blue font-montserrat'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='hidden lg:block'>
            <ul className="flex space-x-8">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className='text-base text-gray-700 font-semibold hover:text-coral-blue font-montserrat'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav
