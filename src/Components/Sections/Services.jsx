import React from "react";
import world from "../../assets/world.png";

export default function Services() {
    return (
        <div className="w-10">
            <div className="items-start h-full w-96 bg-[#222831] hover:bg-black rounded-3xl p-8 shadow-md">
                <img src={world} alt="world" className="section-img" />
                <h1 className="text-2xl my-4 font-bold text-left">
                    Next Journey
                </h1>
                <p className="text-s font-normal text-left"> Our platform stands at the forefront of travel technology. Our platform stands at the forefront of travel technology</p>
            </div>
        </div>
    );
}