import Image from 'next/image'
import React from 'react'

interface PopularBlogProps {
    category: string,
    sport: string,
    date: string,
    title: string,
    description: string,
    image: any
}

const PopularBlog: React.FC<PopularBlogProps> = ({
    category,
    date,
    description,
    image,
    sport,
    title
}) => {
  return (
    <div className='relative w-full h-[400px] md:h-[500px]'>
        {/* Background Image */}
        <Image
            src={image}
            alt=''
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
        />

        {/* Overlay for Text */}
        <div className='absolute inset-0 flex flex-col justify-center px-4 md:px-8 bg-black bg-opacity-50'>
            {/* Category */}
            <div className='border text-center w-fit px-2 py-1 mb-3 text-white rounded border-zinc-200 text-sm md:text-base'>
                {category}
            </div>
            {/* Content */}
            <div className='text-white'>
                <div className='flex items-center gap-2 text-zinc-300 tracking-tight mb-2 text-xs md:text-sm'>
                    <div>{sport}</div>
                    <div>-</div>
                    <div>{date}</div>
                </div>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-3 md:mb-4'>
                    {title}
                </h1>
                <p className='text-base md:text-lg lg:text-xl font-light w-full md:w-3/4'>
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default PopularBlog
