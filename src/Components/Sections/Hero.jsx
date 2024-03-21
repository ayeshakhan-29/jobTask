import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="home" className="h-screen w-screen">
      <div className="flex flex-col items-center h-full mt-16" data-aos="fade-down" data-aos-duration="800">
        <h1 className="text-4xl font-bold text-center mb-8 mt-52" >
          Embark on Your Next Journey with Us!
        </h1>
        <p className="text-s font-normal mx-52"> Explorease helps in elevating Travel Experiences with Digital Innovation. Our platform stands at the forefront of travel technology, seamlessly blending adventure with convenience, all while upholding the highest standards of ethical and regulatory integrity.</p>
        <div className="flex justify-center mt-12">
          <a href="/about#about">
            <button className="bg-[#181d22] hover:bg-[#76ABAE] text-white font-semibold py-2 px-4 mr-4 rounded-lg">Learn More</button>
          </a>
          <a href="/about#contact">
            <button className="bg-[#181d22]  hover:bg-[#76ABAE] text-white font-semibold py-2 px-4 rounded-lg">Contact Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}
