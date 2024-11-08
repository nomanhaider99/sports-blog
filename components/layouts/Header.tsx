import React from 'react'
import Logo from '../ui/Logo'
import { linksdata } from '@/data/links'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center py-4'>
        {/* logo */}
        <div>
            <Logo />
        </div>
        {/* links */}
        <div className='links flex gap-5'>
            {
                linksdata.map((link, index) => (
                    <Link key={index} href={link.href}><div className=''>{link.name}</div></Link>
                ))
            }
        </div>
    </div>
  )
}

export default Header