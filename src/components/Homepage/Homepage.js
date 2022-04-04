import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Review from '../Review/Review';
const Homepage = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <div>
      <div class="sm:flex justify-between py-7  ">
        <div className='sm:order-last p-5'>
          <img src="watch.jpg" className='border-solid border-2 border-indigo-600 rounded-md box-content  ' alt="" />
        </div>
        <div className='justify-center ml-5 mr-5 p-5'>
          <h1 className=' font-mono text-xl md:text-5xl text-blue-600'>
            Authentic Tissot
          </h1>
          <h1 className=' font-mono text-xl md:text-5xl text-blue-600'>
            Collections
          </h1>
          <div className='pt-5'>
            <p className='leading-relaxed text-blue-500'>100% Authentic Money Back Guarantee</p>
            <p className='leading-relaxed text-blue-500'>Movement: Swiss quartz</p>
            <p className='leading-relaxed text-blue-500'>Energy: Quartz EOL</p>
            <p className='leading-relaxed text-blue-500'>Dial color: silver</p>
            <p className='leading-relaxed text-blue-500'>Model: ETA F06.115</p>
            <p className='leading-relaxed text-blue-500'>Caliber: 11 1/2”’</p>
            <p className='leading-relaxed text-blue-500'>Jewels: 3</p>


          </div>
          <div className='pt-4'>
            <button className='py-2 px-3 text-white mt-3  bg-cyan-600 rounded-md '>
              Buy Now
            </button>
          </div>

        </div>

      </div>
      <div className='mt-8 mb-8 '>
        <p className='text-center text-3xl font-bold text-gray'>Customer Reviews ({reviews.slice(0, 3).length})</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
          {
            reviews !== undefined &&
            reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)

          }
        </div>




        <div className='pt-4  text-center'>
          <button className='py-2 px-3 text-white mt-3  bg-cyan-600 rounded-md '>
            <Link to='/reviews'>
              See All Reviews
            </Link>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Homepage
