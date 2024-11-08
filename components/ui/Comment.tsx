import React from 'react'
import Button from './Button'

interface CommentProps {
    comment: string,
    onClick?: () => void,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, onClick, onChange }) => {
  return (
    <div className='flex items-center gap-2'>
        {/* input */}
        <div>
            <input 
                onChange={onChange}
                value={comment} 
                type="text" 
                className='border-b-[0.5px] border-zinc-600 bg-none text-black placeholder:text-black px-2 py-1 text-lg md:w-[40vw] w-full focus:outline-none'
                placeholder='comment here....'
            />
        </div>
        {/* button */}
        <div>
            <Button
                text='comment'
                onClick={onClick}
             />
        </div>
    </div>
  )
}

export default Comment