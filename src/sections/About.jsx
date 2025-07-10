import React, { useEffect } from 'react'
import abouting from '../assets/images/about.jpg'
import { useDarkMode } from '../components/DarkModeContent'
import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {

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
      <section id="about" className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
        <div>
          <img data-aos="zoom-in" src={abouting} alt="about image" className='rounded-2xl lg:w-[500px] lg:h-[600px]' />
        </div>
        <div className="flex flex-col justify-center items-start gap-8">
           <h1 data-aos="zoom-in" className={`${darkMode ? 'dark text-white' : 'light text-red-500'}`}>WHO WE ARE</h1>
           <h1 data-aos="zoom-in" data-aos-delay="200" className={`${darkMode ? 'dark text-white' : 'light text-black'} text-[40px] font-semibold leading-10`}>We Help clients buy and sell houses since 1989</h1>
           <p data-aos="zoom-in" data-aos-delay="400" className={`${darkMode ? 'dark text-white' : 'light text-black'} text-xl text-justify  leading-10`}>
           Since 1989, we have been dedicated to guiding clients through every step of the real estate process, from finding their dream home to securing the best possible sale price for their property. With over three decades of market expertise and deep local knowledge, we provide personalized service and proven strategies that help buyers navigate competitive markets and sellers maximize their investment returns.
           </p>
           <button className={`${darkMode ? 'dark bg-red-700 hover:bg-white hover:text-black' : 'light bg-red-600 hover:bg-black text-white hover:text-white'}text-lg p-4 font-semibold rounded-xl transform hover:scale-110 duration-300`}>READ MORE</button>

        </div>
      </section>
    </>
  )
}

export default About