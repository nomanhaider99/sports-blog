import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
    text: string | IconType,
    secondary?: boolean,
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
    text,
    secondary,
    onClick
}) => {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${secondary ? 'bg-zinc-200' : 'bg-black'} ${secondary ? 'text-black' : 'text-white'}`}
    >
      {text as any}
    </button>
  )
}

export default Button