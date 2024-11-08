import Image from 'next/image'
import React from 'react'
import BasketBallImage from '@/public/images/basketball.png'
import PlayerImage from '@/public/images/player.png'
import AfricanImage from '@/public/images/african.png'
import CarImage from '@/public/images/car.png'
import NewsBox from '../ui/NewsBox'
import Button from '../ui/Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-10 pt-16 bg-zinc-200/20 p-4'>
        {/* Texts */}
        <div className='relative'>
            <div className='z-20'>
                <div className='uppercase absolute text-5xl md:text-8xl leading-none tracking-tighter font-extrabold text-zinc-600'>top <br />scorer to <br />the final <br />match</div>
            </div>
            <div className='-mt-10'>
                <Image
                    src={BasketBallImage}
                    alt=''
                    height={800}
                    width={800}
                 />
            </div>
        </div>
        {/* Player */}
        <div className='md:-ml-[14vw] -mt-[25vw] md:-mt-0 flex flex-col gap-5'>
            <Image
                src={PlayerImage}
                alt='player'
                height={900}
                width={900}
             />
             <div className='text-xs text-black ml-[10vw] -mt-[9vw] w-[50%]'>The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals</div>
             <div className='ml-[10vw]'>
                <Link href={"/blogs"}>
                    <Button
                        text='CONTINUE READING'
                    />
                </Link>
             </div>
        </div>
        {/* News */}
        <div className='flex flex-col gap-5'>
            {/* cards */}
            <div className='flex flex-col gap-4'>
                <Image
                    src={AfricanImage}
                    alt=''
                    height={400}
                    width={400}
                 />
                <Image
                    src={CarImage}
                    alt=''
                    height={400}
                    width={400}
                 />
            </div>
        </div>
    </div>
  )
}

export default Hero