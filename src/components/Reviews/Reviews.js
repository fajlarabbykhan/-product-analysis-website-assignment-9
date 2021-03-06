import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import Spinner from '../Spinner/Spinner'
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            }
            )

    }, [])
    return (
        <>
            {loading ? <Spinner /> : <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                <p className='text-center text-3xl font-bold text-gray'>What our Customer say!</p>
                {/* <h1>length: {reviews.length}</h1> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)

                    }
                </div>
            </div>}

        </>
    );
};

export default Reviews;