import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContent'
import heroimg from '../assets/images/hero1.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '/src/index.css'

const Hero = () => {

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
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'} `}>
        <section id="hero" className='w-[99%] h-[600px] m-auto bg-cover rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20 brightness-85'
          style={{
            backgroundImage: `url(${heroimg})`,
          }}>
          <h1 data-aos="zoom-in" className='text-white text-6xl lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px] font-semibold'>Find your next home in Las Vegas</h1>
          <p data-aos="zoom-in" className='text-white text-xl lg:pr-[500px] pr-0'>Through our proprietory platform, WpResistance is changing how agents and clients navigate the process of finding or selling a home</p>
        </section>
      </div>

      <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`} >
        <div data-aos="zoom-in" id="form" className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
          <div className="w-full">
            <h1 className={`${darkMode ? 'dark bg-black text-white' : 'light bg-transparent'} font-semibold rounded-xl`}>
              LOCATION
            </h1>
            <input type="text" placeholder="Enter an address, state, city or pincode" className="bg-white p-2 w-full mt-2 border-b-[1px] rounded-xl border-[#c9c7c1]" />
          </div>
          <div className="w-full">
            <h1 className={`${darkMode ? 'dark bg-black text-white' : 'light bg-transparent'} rounded-xl font-semibold`}>
              TYPE
            </h1>
            <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 rounded-xl text-md'>
              <option value="Option1">Select Property</option>
              <option value="Option2">Rentals</option>
              <option value="Option3">Sales</option>
              <option value="Option4">Commercial</option>
            </select>
          </div>
          <div className="w-full">
            <h1 className={`${darkMode ? 'dark bg-black text-white' : 'light bg-transparent'} rounded-xl font-semibold`}>
              CATEGORY
            </h1>
            <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] rounded-xl text-gray-500 text-md'>
              <option value="Option1">Select Category</option>
              <option value="Option2">Apartment</option>
              <option value="Option3">Duplex</option>
              <option value="Option4">Condos</option>
              <option value="Option5">Houses</option>
              <option value="Option6">Villas</option>
            </select>
          </div>
          <div className="w-full">
            <button className={`${darkMode ? 'dark bg-red-700 hover:bg-white hover:text-black' : 'light bg-red-600 hover:bg-black text-white hover:text-white'}text-lg p-4 w-full font-semibold rounded-xl transform hover:scale-110 duration-300`}>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero