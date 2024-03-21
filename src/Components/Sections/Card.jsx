import React from "react";
import world from "../../assets/world.png"

const Card = ({ url, heading, desc }) => {
    return (
        <div className="w-[26vw] h-[17vw] z-10 items-start cursor-pointer bg-[#181d22] hover:bg-black transition-all duration-300 ease-in-out rounded-3xl p-8 shadow-md text-white">
            <img src={world} alt="world" className="section-img" />
            <h1 className="text-2xl my-4 font-bold text-left">{heading}</h1>
            <p className="text-s font-normal text-left">{desc}</p>
        </div>
    );
};

export default Card;