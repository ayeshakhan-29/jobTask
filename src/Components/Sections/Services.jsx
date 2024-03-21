import React from "react";
import Card from "../../Components/Sections/Card";

export default function Services() {
    return (
        <div id="services" className="w-full h-full flex justify-center items-center py-10 px-4">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-3xl font-bold mb-2">Our Services</h1>
                <p className="w-1/2 mb-1 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dignissimos similique obcaecati! Mollitia, soluta corrupti, distinctio dicta impedit eveniet cupiditate consectetur ratione quasi atque nisi, nostrum minima ullam earum eius.</p>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <Card
                        url="image-url.jpg"
                        heading="Guided Tours"
                        desc="Expert-led adventures, explore with knowledgeable guides."
                    />
                    <Card
                        url="image-url.jpg"
                        heading="Accommodation Booking"
                        desc=" Comfortable stays, find your perfect lodging."
                    />
                    <Card
                        url="image-url.jpg"
                        heading="Transportation Arrangements"
                        desc="Seamless travel, hassle-free transportation options."
                    />
                    <Card
                        url="image-url.jpg"
                        heading="Travel Insurance"
                        desc="Secure your trip, peace of mind on your adventures."
                    />
                    <Card
                        url="image-url.jpg"
                        heading="Next Journey"
                        desc="Our platform stands at the forefront of travel technology. Our platform stands at the forefront of travel technology."
                    />
                </div>
            </div>
        </div>
    );
}
