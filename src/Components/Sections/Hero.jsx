import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id='home'
      className='h-screen w-screen mt-[8rem] md:mt-0 flex items-center justify-center sm:mb-10 '
    >
      <div
        className='flex flex-col items-center h-auto '
        data-aos='fade-down'
        data-aos-duration='800'
      >
        <h1 className='text-6xl font-semibold text-center mb-7 '>
          Embark on Your Next Journey <br /> with Us!
        </h1>
        <p className=' font-thin mx-auto w-[55%] opacity-90'>
          {" "}
          Explorease helps in elevating Travel Experiences with Digital
          Innovation. Our platform stands at the forefront of travel technology,
          seamlessly blending adventure with convenience, all while upholding
          the highest standards of ethical and regulatory integrity.
        </p>
        <div className='flex justify-center mt-7'>
          <a href='/about#about'>
            <button className='bg-[#181d22] hover:bg-[#76ABAE] text-white font-semibold py-2 px-4 mr-4 rounded-lg'>
              Learn More
            </button>
          </a>
          <a href='/about#contact'>
            <button className='bg-[#181d22]  hover:bg-[#76ABAE] text-white font-semibold py-2 px-4 rounded-lg'>
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}