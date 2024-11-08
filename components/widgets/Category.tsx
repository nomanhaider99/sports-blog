import React from 'react'
import CategoryBox from '../ui/CategoryBox'
import Soccer from '@/public/images/soccerball.png'
import BasketBallImage from '@/public/images/closeup.png'
import CarImage from '@/public/images/car-cateogry.png'
import PingPongImage from '@/public/images/ping-pong.png'

const Category = () => {
  return (
    <div className='w-full flex flex-col gap-4 py-10'>
        {/* Heading */}
        <div className='text-xl font-medium'>Category</div>
        {/* Boxes */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
          <CategoryBox
            text='FOOTBALL'
            src={Soccer}
           />
           <CategoryBox
            text='BASKET BALL'
            src={BasketBallImage}
            flip
           />
           <CategoryBox
            text='CAR SPORT'
            src={CarImage}
           />
           <CategoryBox
            text='TABLE TENNIS'
            src={PingPongImage}
            flip
           />
        </div>
    </div>
  )
}

export default Category