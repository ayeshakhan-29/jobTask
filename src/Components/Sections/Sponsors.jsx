import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tripadvisor from "../../assets/tripadvisor.png"
import airbnb from "../../assets/airbnb.png"
import hilton from "../../assets/hilton.png"
import express from "../../assets/express.png"
import booking from "../../assets/booking.png"


export default function Sponsors() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-16 py-8">
      <div className="max-w-6xl mx-auto px-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="800">
        <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
        <p className="opacity-90 text-center">We collaborate with them to make your experience better.</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-16">
          {/* Sponsor 1 */}
          <div className="flex justify-center items-center">
            <img src={tripadvisor} alt="Sponsor 1" className="h-20" />
          </div>
          {/* Sponsor 2 */}
          <div className="flex justify-center items-center">
            <img src={airbnb} alt="Sponsor 2" className="h-20" />
          </div>
          {/* Sponsor 3 */}
          <div className="flex justify-center items-center">
            <img src={hilton} alt="Sponsor 3" className="h-20" />
          </div>
          {/* Sponsor 4 */}
          <div className="flex justify-center items-center">
            <img src={express} alt="Sponsor 4" className="h-20" />
          </div>
          {/* Sponsor 5 */}
          <div className="flex justify-center items-center">
            <img src={booking} alt="Sponsor 5" className="h-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
