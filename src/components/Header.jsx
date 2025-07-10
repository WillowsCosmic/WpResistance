import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import logo1 from '/src/assets/images/Logo1.png'
import logo2 from '/src/assets/images/Logo2.png'
import { useDarkMode } from './DarkModeContent'


const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  const currentLogo = darkMode ? logo1 : logo2;

  const navItems = [
    {
      link: 'Home', path: 'home'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Properties', path: 'properties'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'Testimonials', path: 'testimonials'
    },
    {
      link: 'Contact', path: 'contact'
    },
  ]
  return (
    <nav className={`${darkMode ? 'dark bg-black' : 'light bg-white'} flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}>
      <div id='logo'>
        <img src={currentLogo} alt="Logo" className="lg:w-[150px] w-[120px] " />
      </div>
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link key={path} className={`${darkMode ? 'dark text-white' : 'light text-black'} text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-red-600 hover:text-white`} to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className={`${darkMode ? 'dark text-white' : 'light text-black'} text-2xl`} /> : <FaBars className={`${darkMode ? 'dark text-white' : 'light text-black'} text-2xl`} />}
        </div>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
        {navItems.map(({ link, path }) => (
          <Link key={path} className={`${darkMode ? 'dark text-white' : 'light text-white'} text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-red-600 hover:text-white`} to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header