import React from 'react'
import { FaFacebook, FaInstagram, FaRegCopyright, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full border-t-[0.5px] border-zinc-600/70 flex md:flex-row flex-col justify-between items-center py-10'>
        {/* Social Icons */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 items-center'>
            <FaInstagram size={40} color='#000' />
            <FaFacebook size={40} color='#000' />
            <FaTwitter size={40} color='#000' />
            <FaYoutube size={40} color='#000' />
        </div>
        {/* Copyright */}
        <div className='tracking-tighter flex items-center text-black gap-1'>copyright <FaRegCopyright color='#000' />2024, All rights reserved.</div>
    </div>
  )
}

export default Footer