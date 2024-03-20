import React from "react";
import world from "../../assets/world.png";
import Card from "./Card";

export default function Services() {
    return (
        <div className="w-full h-full flex justify-center items-center py-10 px-4">
            <div className="flex flex-wrap gap-4 justify-center items-center">
                <div className="grid grids-row-3">
                    <Card
                        url="image-url.jpg"
                        heading="Next Journey"
                        desc="Our platform stands at the forefront of travel technology. Our platform stands at the forefront of travel technology"
                    />
                    <Card
                        url="image-url.jpg"
                        heading="Next Journey"
                        desc="Our platform stands at the forefront of travel technology. Our platform stands at the forefront of travel technology"
                    />
                    <Card
                        url="image-url.jpg"
                        heading="Next Journey"
                        desc="Our platform stands at the forefront of travel technology. Our platform stands at the forefront of travel technology"
                    />
                </div>
                <div className="grid grids-row-2">
                    <Card
                        url="image-url.jpg"
                        heading="Next Journey"
                        desc="Our platform stands at the forefront of travel technology. Our platform stands at the forefront of travel technology"
                    />
                    <Card
                        url="image-url.jpg"
                        heading="Next Journey"
                        desc="Our platform stands at the forefront of travel technology. Our platform stands at the forefront of travel technology"
                    />
                </div>
            </div>
        </div>
    );
}