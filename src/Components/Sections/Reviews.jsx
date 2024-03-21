import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../../Components/Sections/ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {

    useEffect(() => {
        AOS.init();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className="w-100 h-full flex justify-center items-center py-10 px-4">
            <div className="flex flex-col items-center gap-4" data-aos="fade-up"
                data-aos-duration="3000">
                <h1 className="text-3xl font-bold mb-2 mt-20">Our Feedback</h1>
                <p className="w-1/2 mb-1 text-center mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dignissimos similique obcaecati! Mollitia, soluta corrupti, distinctio dicta impedit eveniet cupiditate consectetur ratione quasi atque nisi, nostrum minima ullam earum eius.</p>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
                {/* <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
                    <Card
                        url
                        userName="Ayesha"
                        review="Overall, I had a great time exploring with Explorease. The destinations were beautiful, and the accommodations were comfortable."
                        rating={4}
                    />
                    <Card
                        url="image-url.jpg"
                        userName="Usama"
                        review=" My trip with Explorease exceeded all expectations! From start to finish, everything was well-organized and stress-free."
                        rating={5}
                    />
                    <Card
                        url="image-url.jpg"
                        userName="Aymess"
                        review="My experience with Explorease was decent. While the trip was enjoyable, there were a few minor issues with the accommodations."
                        rating={3}
                    />
                    <Card
                        url="image-url.jpg"
                        userName="Zyaima"
                        review="Unfortunately, my experience with Explorease was disappointing. The tour guides seemed inexperienced, and the accommodations were subpar. Would not recommend booking with them."
                        rating={2}
                    />
                    <Card
                        url="image-url.jpg"
                        userName="Ifrah Tariq"
                        review="What an amazing experience! The tour guides were incredibly knowledgeable and made the trip unforgettable. Highly recommend Explorease for anyone looking for an adventure!"
                        rating={4}
                    />
                </div> */}
            </div>
        </div>
    );
}
