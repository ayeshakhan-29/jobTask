import React from "react";
import user from "../../assets/user.png"

const ReviewCard = ({ userImage, userName, stars, review }) => {
    return (
        <div className="w-[16vw] h-[13vw] z-10 items-start cursor-pointer bg-[#181d22] rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
                <img src={user} alt={userName} className="h-12 w-12 rounded-full mr-2" />
                <span className="text-sm font-medium text-left">{userName}</span>
            </div>
            <div className="flex items-center mb-2">
                <span className="text-yellow-500">
                    {[...Array(stars)].map((_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                            <path d="M10 3l2.65 6.27L18 8.5l-5 4.73 1.82 7.27L10 15.23 5.18 20l1.82-7.27L2 8.5l5.35.77L10 3z" />
                        </svg>
                    ))}
                </span>
            </div>
            <p className="text-gray-700">{review}</p>
        </div>
    );
}

export default ReviewCard;
