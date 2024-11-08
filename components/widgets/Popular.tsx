import React from 'react'
import PopularBlog from '../ui/PopularBlog'
import MessiPost from '@/public/images/popular1.png'

const Popular = () => {
  return (
    <div className='w-full flex flex-col gap-5 py-10'>
        {/* Heading */}
        <div className='text-xl font-medium'>Popular Blogs</div>
        {/* Blog */}
        <div className='w-full'>
          <PopularBlog
            category='Footeball'
            date='04 June 2024'
            sport='Agence France Presence'
            title='lionel messi leaving ligue 1 team paris saint-german, club confirms'
            description='The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals'
            image={MessiPost}
           />
        </div>
    </div>
  )
}

export default Popular