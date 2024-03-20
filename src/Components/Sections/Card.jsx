import React from "react";

const Card = ({ url, heading, desc }) => {
    return (
        <div className="w-10 z-10">
            <div className="items-start cursor-pointer h-full w-96 bg-[#181d22] hover:bg-black transition-all duration-300 ease-in-out rounded-3xl p-8 shadow-md text-white">
                <img src={url} alt="world" className="section-img" />
                <h1 className="text-2xl my-4 font-bold text-left">{heading}</h1>
                <p className="text-s font-normal text-left">{desc}</p>
            </div>
        </div>
    );
};

export default Card;