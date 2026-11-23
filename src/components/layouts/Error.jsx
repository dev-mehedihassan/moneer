import React from 'react'
import bg from '../../assets/images/error-bg.png'
import bg2 from '../../assets/images/error-bg-2.png'
import Image from '../ui/Image'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='h-screen w-full flex items-center justify-center py-11 relative'>
      <Image src={bg} alt='error' className='w-[70%]' />
      <div className='absolute top-[30%] left-[49.5%] w-[21%]'>
        <Image src={bg2} alt='error' />
        <div className='flex flex-col items-center absolute top-10 left-1/2 -translate-x-1/2'>
            <span className='text-[var(--color-cobalt)] font-montserrat font-bold text-[80px] block leading-none'>404</span>
            <p className='text-[12px] font-bold font-montserrat text-[#000619]'>Sorry, Page not Found</p>
            <Link to='/' className='bg-linear-to-r from-[#5F5FFF] to-[#4600B1] text-white font-montserrat text-[10px] font-semibold py-4 px-[30px] inline-block rounded-[25.5px] mt-[8px]'>Back to Home Page</Link>
        </div>
      </div>
    </section>
  )
}

export default Error