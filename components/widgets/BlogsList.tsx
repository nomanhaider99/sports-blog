import { blogsData } from '@/data/blogs'
import React from 'react'
import Blog from '../ui/Blog'

const BlogsList = () => {
  return (
    <div className='w-full flex flex-col gap-5 pt-10 px-4 md:px-0'>
        {/* Heading */}
        <div className='text-3xl md:text-4xl font-extrabold tracking-tighter'>Most Popular Blogs</div>
        {/* Blogs */}
        <div className='flex flex-col gap-4 w-full md:w-[70%]'>
            {
                blogsData.map((blog, index) => (
                    <Blog
                        key={index}
                        blogCategory={blog.blogCategory}
                        blogDate={blog.blogDate.slice(0, 6)}
                        blogDescription={blog.blogDescription}
                        blogImage={blog.blogImage}
                        blogTitle={blog.blogTitle}
                        userFullName={blog.userFullName}
                        userImage={blog.userImage}
                        href={blog.id}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default BlogsList
