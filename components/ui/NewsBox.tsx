import Image from 'next/image'
import React from 'react'

interface NewsBoxProps {
    name: string,
    date: string,
    title: string,
    src: string | any
}

const NewsBox: React.FC<NewsBoxProps> = ({
    name,
    date,
    title,
    src
}) => {
  return (
    <div className='rounded'>
        {/* Image */}
        <div>
            <Image
                src={src}
                alt=''
                height={250}
                width={250}
                className=''
             />
        </div>
        {/* Text */}
        <div className='flex flex-col gap-1 -mt-[5vw] px-4'>
            {/* Date and name */}
            <div className='flex gap-4 items-center text-zinc-800 text-sm'>
                <div>{name}</div>
                <div>-</div>
                <div>{date}</div>
            </div>
            {/* Title */}
            <div className='text-lg text-black font-medium leading-none'>{title}</div>
        </div>
    </div>
  )
}

export default NewsBox