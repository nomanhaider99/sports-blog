import React from 'react'

interface CommentTextProps {
    text: string
}

const CommentText: React.FC<CommentTextProps> = ({ text }) => {
  return (
    <div className='text-sm px-6 py-2 rounded-xl text-black bg-zinc-100 tracking-tight'>{text}</div>
  )
}

export default CommentText