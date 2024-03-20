import React from "react";
import world from "../../assets/world.png";

export default function DetailsSec() {
    return (
        <div className="h-screen w-screen flex">
            <div className="grid grid-cols-2 gap-2">
                <div className="ml-20">
                    <h1 className="text-3xl font-semibold text-center mb-8 ">
                        Discover Your Perfect Destination with Explorease
                    </h1>
                    <p className="text-s font-normal text-left">
                        Explorease is your gateway to unparalleled travel experiences, meticulously curated to suit your unique preferences and aspirations. Dive into a world of endless possibilities as our intuitive platform offers tailored destination recommendations, insider insights, and seamless booking solutions. Whether you're craving the tranquility of a tropical paradise, the thrill of an urban adventure, or the charm of a cultural escapade, Explorease ensures every journey is filled with wonder and discovery. With expert support and a commitment to excellence, let us guide you on a transformative travel journey unlike any other.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img src={world} alt="world" className="world" />
                </div>
            </div>
        </div>
    );
}