import React, { useEffect } from 'react'
import { useDarkMode } from './DarkModeContent'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
import prop7 from '/src/assets/images/prop7.jpg'
import prop8 from '/src/assets/images/prop8.jpg'

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">
            About Us
          </h1>
          <p className='text-slate-200 text-justify'>
          Since 1989, we have been dedicated to guiding clients through every step of the real estate process, from finding their dream home to securing the best possible sale price for their property. With over three decades of market expertise and deep local knowledge, we provide personalized service and proven strategies that help buyers navigate competitive markets and sellers maximize their investment returns.
          </p>
          <div id="social-icons" className="flex justify-start items-center gap-4 mt-4">
            <div className="p-3 rounded-xl bg-white hover-bg-red-600 transform hover:scale-110 transition-transform">
              <FaFacebookF className='size-5'/>
            </div>
            <div className="p-3 rounded-xl bg-white hover-bg-red-600 transform hover:scale-110 transition-transform">
              <FaInstagram className='size-5'/>
            </div>
            <div className="p-3 rounded-xl bg-white hover-bg-red-600 transform hover:scale-110 transition-transform">
              <FaTwitter className='size-5'/>
            </div>
            <div className="p-3 rounded-xl bg-white hover-bg-red-600 transform hover:scale-110 transition-transform">
              <FaYoutube className='size-5'/>
            </div>
          </div>
          <h1 className='text-white mt-8'>Copyright WP Resistance,All rights reserved</h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className='text-white text-2xl font-semibold'>
            Contact us
          </h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className='text-white size 5'/>
            <p className="text-slate-200">
              10845 Griffith Peak Dr,Las Vegas,NV 89135
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className='text-white size 5'/>
            <p className="text-slate-200">
              +984 2902 0290
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className='text-white size 5'/>
            <p className="text-slate-200">
              9494 45949
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoMdMail className='text-white size 5'/>
            <p className="text-slate-200">
              office25@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">
            Latest Properties
          </h1>
          <div className="flex justify-center items-center gap-4">
            <img src={prop7} alt="" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <h1 className="text-lg text-white">
              Villa with amazing views
            </h1>
            <p className="text-slate-400">
              $287.99
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img src={prop8} alt="" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300' />
            <h1 className="text-lg text-white">
              Smart view from beach
            </h1>
            <p className="text-slate-400">
              $487.18
            </p>
          </div>
        </div>
      </footer>
      <div id="icon-box" className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6">
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-6 text-white' />
        </Link>
      </div>

      <div>
        <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6 cursor-pointer'>
          {darkMode ? <FaMoon size={25} className='text-black'/>:<FaSun size={25} className='text-black'/>}
        </button>
      </div>
    </>
  )
}

export default Footer   