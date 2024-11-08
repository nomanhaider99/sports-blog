import Image from 'next/image'
import React from 'react'

interface CategoryBoxProps {
    text: string,
    src: any,
    flip?: boolean
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ text, src, flip }) => {
  return (
    <div className={`flex ${flip ? 'flex-col-reverse md:flex-col' : 'flex-col md:flex-col'} gap-5 w-full md:w-[20vw] h-full md:h-[30vw]`}>
        {/* Text */}
        <div className='px-4 py-2 text-center rounded-lg bg-zinc-200/50 text-black font-extrabold text-2xl tracking-tight md:text-4xl md:px-6 md:py-4'>
            {text}
        </div>
        {/* Image */}
        <div className='w-full flex justify-center md:w-auto'>
            <Image
                src={src}
                alt=''
                height={400}
                width={300}
                className='rounded-lg md:h-[20vw] md:w-[20vw] w-full'
             />
        </div>
    </div>
  )
}

export default CategoryBox
