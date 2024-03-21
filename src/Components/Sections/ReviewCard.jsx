import React from "react";
import user from "../../assets/user.png";
import Rating from 'react-rating-stars-component';

const ReviewCard = ({ userName, review, rating }) => {
    return (
        <div className="w-[16vw] h-full z-10 items-start cursor-pointer bg-[#181d22] rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
                <img src={user} alt={userName} className="h-12 w-12 rounded-full mr-2" />
                <span className="text-sm font-medium text-left">{userName}</span>
            </div>
            <div className="flex items-center mb-2">
                <Rating
                    count={5}
                    size={24}
                    value={rating}
                    edit={false}
                />
            </div>
            <div className="overflow-hidden h-[6.5rem]">
                <p className="text-gray-700 text-left">{review}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
