import Image from 'next/image'
import React from 'react'
import LogoImage from '@/public/images/logo.png'


const Logo = () => {
  return (
    <div className=''>
        <Image
            src={LogoImage}
            alt=''
            height={40}
            width={100}
         />
    </div>
  )
}

export default Logo