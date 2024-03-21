import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import world from "../../assets/world.png";

export default function DetailsSec() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="about" className="w-full flex justify-center">
            <div className="flex flex-wrap w-full md:w-[70rem] text-center text-justify md:flex-col mb-20 mx-14 mt-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2 ">
                    <div data-aos="fade-right" data-aos-offset="300">
                        <h1 className="text-3xl font-semibold text-center mb-8">
                            Discover Your Perfect Destination with Explorease
                        </h1>
                        <p className="text-sm md:text-base md:h-10 font-normal opacity-90">
                            Explorease is your gateway to unparalleled travel experiences, meticulously curated to suit your unique preferences and aspirations. Dive into a world of endless possibilities as our intuitive platform offers tailored destination recommendations, insider insights, and seamless booking solutions. Whether you're craving the tranquility of a tropical paradise, the thrill of an urban adventure, or the charm of a cultural escapade, Explorease ensures every journey is filled with wonder and discovery. With expert support and a commitment to excellence, let us guide you on a transformative travel journey unlike any other.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img src={world} alt="world" className="world" />
                    </div>
                </div>
            </div>
        </div>
    );
}
