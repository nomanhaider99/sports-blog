'use client'
import Comment from '@/components/ui/Comment';
import SeperateBlog from '@/components/ui/SeperateBlog';
import { blogsData } from '@/data/blogs';
import React, { useState } from 'react';


const page = ({ params }: { params: any }) => {
    const [comments, setComments] = useState<string[]>([]);
    const [comment, setComment] = useState<string>("");
    const blog = blogsData.find((blog) => params.blog == blog.id );

    if (!blog) {
        return <div>Blog not found!</div>;
    }
    const onCommentSubmit = () => {
        setComments(prevComments => [...prevComments, comment]);
        setComment("");
    }
    const onCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value); 
    };
    return (
        <div className='py-10 flex flex-col gap-5'>
            <SeperateBlog
                blogDate={blog.blogDate}
                blogDescription={blog.blogDescription}
                blogImage={blog.blogImage}
                blogTitle={blog.blogTitle}
                userFullName={blog.userFullName}
                userImage={blog.userImage}
                comments={comments}
            />
            <Comment
                comment={comment}
                onClick={onCommentSubmit}
                onChange={onCommentChange}
             />
        </div>
    );
};

export default page;
