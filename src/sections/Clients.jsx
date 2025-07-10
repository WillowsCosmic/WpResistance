import React, { useEffect } from 'react'
import { client } from '../components/export'
import { useDarkMode } from '../components/DarkModeContent'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaStar } from 'react-icons/fa'


const Clients = () => {
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
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
      <section id="testimonials" className="lg:w-[99%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20">
      <h1 data-aos="zoom-in" className={`${darkMode ? 'dark text-white' : 'light text-red-500'}`}>
            OUR CLIENTS
          </h1>
      <h1 data-aos="zoom-in" className={`${darkMode ? 'dark text-white' : 'light text-black'} text-[40px] font-semibold leading-10`}>
            What our client <br /> saying about us
          </h1>
        <div id="clients-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full">
          {
            client.map((item,index)=>(
              <div data-aos="zoom-in" data-aos-delay="200" key={index} className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'} hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-16 rounded-xl w-full`}>
                  <div className="flex justify-start items-center w-full gap-4">
                    <img src={item.image} alt="client" className='w-[70px] transform hover-scale-110 transition-transform duration-300' />
                    <div className="flex flex-col justify-center items-start gap-1">
                      <h1 className={`${darkMode ? 'dark text-white' : 'light text-black'} font-semi-bold text-xl`}>{item.name}</h1>
                      <h1 className={`${darkMode ? 'dark text-gray-300' : 'light text-slate'}`}>{item.text}</h1>
                    </div>
                  </div>
                  <p className={`${darkMode ? 'dark text-gray-300' : 'light text-slate'}`}>
                    {item.feedback}
                  </p>
                  <div className="flex justify-start items-start gap-2 w-full">
                    <FaStar className="size-4 text-yellow-400"></FaStar>
                    <FaStar className="size-4 text-yellow-400"></FaStar>
                    <FaStar className="size-4 text-yellow-400"></FaStar>
                    <FaStar className="size-4 text-yellow-400"></FaStar>
                    <FaStar className="size-4 text-yellow-400"></FaStar>
                  </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Clients