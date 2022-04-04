import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ review }) => {
    return (
        <div className='rounded-2xl w-[400px] shadow-lg bg-white p-4 m-8'>
            <Link to='/reviews'>
                <div className='justify-items-center'>
                    <img className='mx-auto object-cover rounded-full h-20 w-20 ' src={review.img} alt="personImage" />
                    <div className='mt-5'>
                        <span className='text-gray-600 font-medium text-center mt-4'>{review.name}: </span>
                        <span className='text-gray-400 font-small'>{review.Reviews} </span>
                        <br />
                        <span className='text-gray-600 font-medium text-center mt-4'>Ratings: {review.Ratings}</span>

                    </div>


                </div>
            </Link>


        </div>
    );
};

export default Review;