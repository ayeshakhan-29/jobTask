import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../../Components/Sections/ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Reviews() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='  py-10 px-4 text-white'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-3xl font-bold mb-2 mt-20'>What Our Customers Say</h1>
                <p className='w-1/2 mb-1 text-center mt-3 font-thin'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                    dignissimos similique!
                </p>
            </div>
            <div className='w-3/4 mx-auto mt-10'>
                {" "}
                <Slider {...settings}>
                    <Card
                        url
                        userName='Ayesha'
                        review='Overall, I had a great time exploring with Explorease. The accommodations were comfortable.'
                        rating={4}
                    />
                    <Card
                        url='image-url.jpg'
                        userName='Usama'
                        review=' My trip with Explorease exceeded all expectations! From start to finish, everything was well-organized.'
                        rating={5}
                    />
                    <Card
                        url='image-url.jpg'
                        userName='Aymess'
                        review='My experience with Explorease was decent. There were a few minor issues with the accommodations.'
                        rating={3}
                    />
                    <Card
                        url='image-url.jpg'
                        userName='Zyaima'
                        review='Unfortunately, my experience with Explorease was disappointing. The tour guides seemed inexperienced.'
                        rating={2}
                    />
                    <Card
                        url='image-url.jpg'
                        userName='Ifrah Tariq'
                        review='What an amazing experience! The tour guides were incredibly knowledgeable and made the trip unforgettable. I will highly recommend Explorease.'
                        rating={4}
                    />
                </Slider>
            </div>
        </div>
    );
}