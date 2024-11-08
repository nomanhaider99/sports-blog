import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegComment } from 'react-icons/fa'

interface BlogProps {
    userFullName: string,
    userImage: string,
    blogTitle: string,
    blogCategory: string,
    blogImage: string,
    blogDescription: string,
    blogDate: string,
    href: number
}

const Blog: React.FC<BlogProps> = ({
    userFullName,
    userImage,
    blogCategory,
    blogImage,
    blogTitle,
    blogDescription,
    blogDate,
    href
}) => {
    return (
        <Link href={`/blogs/${href}`}>
            <div className='w-full flex flex-col gap-2 py-4 border-b-[0.5px] border-zinc-600/30'>
                {/* User details */}
                <div className='flex items-center gap-3'>
                    {/* Image */}
                    <div>
                        <Image
                            src={userImage}
                            alt='User profile'
                            height={40}
                            width={40}
                            className='rounded-full'
                        />
                    </div>
                    {/* Name */}
                    <div className='tracking-tighter text-base'>{userFullName}</div>
                </div>
                
                {/* Blog details */}
                <div className='flex flex-col md:flex-row gap-4 md:justify-between items-center'>
                    {/* Text area */}
                    <div className='flex flex-col w-full md:w-[60%]'>
                        <div className='text-2xl md:text-4xl font-bold tracking-tighter'>{blogTitle}</div>
                        <div className='text-sm md:text-base text-zinc-700'>{blogDescription}</div>
                    </div>
                    
                    {/* Image area */}
                    <div className='w-full md:w-[40%]'>
                        <Image
                            src={blogImage}
                            alt='Blog image'
                            height={200}
                            width={250}
                            className='rounded-lg'
                        />
                    </div>
                </div>
                
                {/* Reactions and comments */}
                <div className='flex items-center gap-4 mt-3 text-sm'>
                    {/* Date */}
                    <div className='tracking-tighter text-zinc-800'>{blogDate}</div>
                    {/* Comments */}
                    <div className='flex items-center gap-1'>
                        <FaRegComment size={15} />
                        <span>55</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Blog
