import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../../Components/Sections/ReviewCard";

export default function Reviews() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="w-100 h-full flex justify-center items-center py-10 px-4">
            <div className="flex flex-col items-center gap-4" data-aos="fade-up"
                data-aos-duration="3000">
                <h1 className="text-3xl font-bold mb-2">Our Feedback</h1>
                <p className="w-1/2 mb-1 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dignissimos similique obcaecati! Mollitia, soluta corrupti, distinctio dicta impedit eveniet cupiditate consectetur ratione quasi atque nisi, nostrum minima ullam earum eius.</p>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <Card
                        url
                        userName="Ayesha"
                        review="Expert-led adventures, explore with knowledgeable guides."
                    />
                    <Card
                        url="image-url.jpg"
                        userName="Usama"
                        review=" Comfortable stays, find your perfect lodging."
                    />
                    <Card
                        url="image-url.jpg"
                        userName="Aymess"
                        review="Seamless travel, hassle-free transportation options."
                    />
                    <Card
                        url="image-url.jpg"
                        userName="Zyaima"
                        review="Secure your trip, peace of mind on your adventures."
                    />
                    <Card
                        url="image-url.jpg"
                        userName="Ifrah Tariq"
                        review="Our platform stands at the forefront of travel technology. Our platform stands at the forefront of travel technology."
                    />
                </div>
            </div>
        </div>
    );
}
