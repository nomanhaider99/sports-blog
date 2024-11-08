import Image from 'next/image'
import React from 'react'
import CommentText from './CommentText'

interface SeperateBlogProps {
    blogTitle: string,
    blogDescription: string,
    blogImage: string,
    userFullName: string,
    blogDate: string,
    userImage: string,
    comments: string[]
}

const SeperateBlog: React.FC<SeperateBlogProps> = ({
    blogDate,
    blogDescription,
    blogImage,
    blogTitle,
    userFullName,
    userImage,
    comments
}) => {
  return (
    <div className='w-full flex flex-col gap-5'>
        {/* Username */}
        <div className='text-lg font-medium flex justify-between items-center gap-2'>
            <div className='flex gap-2 items-center'>
                <Image
                    src={userImage}
                    alt='User profile'
                    height={40}
                    width={40}
                    className='rounded-full h-[3vw] w-[3vw]'
                />
                {userFullName}
            </div>
            <div>{blogDate}</div>
        </div>
        {/* Blog Details */}
        <div className='flex flex-col gap-4'>
            {/* Heading */}
            <div className='text-4xl tracking-tight font-extrabold text-black'>{blogTitle}</div>
            {/* paragraph */}
            <div className='text-zinc-600 text-lg tracking-tight'>{blogDescription}</div>
        </div>
        {/* Image and comments */}
        <div className='flex flex-col md:flex-row gap-5 md:items-center items-start'>
            {/* image */}
            <div>
                <Image
                    className=''
                    height={600}
                    width={800}
                    src={blogImage}
                    alt=''
                />
            </div>
            {/* comment-section */}
            <div className='p-4 flex flex-col justify-between gap-5 -ml-[4vw] md:-ml-0'>
                <div className='text-4xl border-l-[2px] border-zinc-600 py-4 px-4 font-extrabold tracking-tighter'>Comment Section</div>
                <div className='flex flex-col gap-4'>
                    {
                        comments.map((comment, index) => (
                            <CommentText
                                text={comment}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SeperateBlog