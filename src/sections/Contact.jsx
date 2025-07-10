


import React, { useEffect,useRef } from 'react'
import { useDarkMode } from '../components/DarkModeContent'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  //w-full px-6 py-3 border-2 border-gray-200 rounded-xl
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
      <section id="contact" className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[95%] w-full m-auto h-fit rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}>
        <div data-aos ="zoom-in" className={`${darkMode ? 'dark bg-black' : 'light bg-white'} p-10 flex flex-col justify-center items-start gap-4 rounded-xl`}>
          <h1 className={`${darkMode ? 'dark text-white' : 'light text-black'} text-2xl font-semibold`}> 
            Send us a message today
          </h1>
          <input type="text" placeholder='Enter your Full name here' className={`${darkMode ? 'dark text-white' : 'light text-black'} w-full px-6 py-3 border-2 border-gray-200 rounded-xl`}/>
          <input type="text" placeholder='Enter your valid email here' className={`${darkMode ? 'dark text-white' : 'light text-black'} w-full px-6 py-3 border-2 border-gray-200 rounded-xl`}/>
          <input type="text" placeholder='Enter your valid mobile number here' className={`${darkMode ? 'dark text-white' : 'light text-black'} w-full px-6 py-3 border-2 border-gray-200 rounded-xl`}/>
          <textarea name="" id="" cols="30" rows="5" placeholder='Enter your message here...' className={`${darkMode ? 'dark text-white' : 'light text-black'} w-full px-6 py-3 border-2 border-gray-200 rounded-xl`}></textarea>
          <button className={`${darkMode ? 'dark hover:bg-red-700' : 'light bg-black'} bg-red-600 w-full text-md px-8 py-3 text-white font-semibold cursor-pointer rounded-2xl`} >
            SEND EMAIL
          </button> 
        </div>

        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1 data-aos="zoom-in" data-aos-delay="200" className={`${darkMode ? 'dark text-white' : 'light text-red-500'}  text-2xl font-semibold leading-10`}>
            REACH US
          </h1>
          <h1 data-aos="zoom-in" data-aos-delay="200" className={`${darkMode ? 'dark text-white' : 'light text-black'} text-[40px] font-semibold`}>
            Get in touch with us today and our team will assist you
          </h1>
          <p data-aos="zoom-in" data-aos-delay="400" className={`${darkMode ? 'dark text-white' : 'light text-gray-700'} text-xl leading-10`}>
            Our experts and developers would love to contribute their expertise and insights and help you today.Contact us to help you plan your next transaction, either buying or selling a home
          </p>
          <button className={`${darkMode ? 'dark hover:bg-red-700' : 'light bg-black'} bg-red-600 px-8 py-3 text-white font-semibold cursor-pointer rounded-xl`}>
            CONTACT US
          </button> 
        </div>
      </section>
    </div>
  )
}

export default Contact   