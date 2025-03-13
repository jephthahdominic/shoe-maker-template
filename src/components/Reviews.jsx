import {useParams} from 'react-router-dom'
import shoes from '../data/data';
import StarRating from './StarRating';
import { FaCircleUser } from 'react-icons/fa6';

export default function Reviews() {
  const {id} = useParams();
  const reviews = shoes[id-1].reviews;

  function calculateAvgRating(){
    let ratings = [];
    reviews.forEach(review => {
      ratings.push(review.rating)
    });
    let totalRatings = ratings.reduce((sum, current) => sum + current, 0);
    const averageRating = Math.round(totalRatings/ratings.length) + '.0';
    
    return averageRating
  }

  return (
    <div className='p-4 mt-6 '>
      <header className='flex items-center justify-between'>
        <h2 className='font-sans font-regular text-[1.5rem]'>Top reviews</h2>
        <div className='flex items-center gap-1'>
          <span className=''>{calculateAvgRating()}</span>
          <StarRating value={calculateAvgRating()}/>
        </div>
      </header>
      <section className='w-full my-4'>
        <textarea className='w-full bg-light-gray p-3 rounded-[10px] focus:outline-none' placeholder='Write a review' 
        disabled/>
      </section>
      <section className='w-full mt-6 flex flex-col gap-8 items-end'>
        {reviews.slice(0,3).map((review, key)=>(
          <div className='w-full' key={key}>
            <div className='flex gap-2 items-center'>
              <FaCircleUser className='text-[#D9D9D9] text-[3.5rem]'/>
              <div className='flex flex-col gap-1'>
                <p className='text-[1.2rem]'>{review.customer}</p>
                <StarRating value={review.rating}/>
              </div>
            </div>
            <p className='mt-2 text-[1rem] leading-normal text-darkTransparent'>{review.review}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
