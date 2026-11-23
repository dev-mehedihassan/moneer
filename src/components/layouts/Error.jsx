import React from 'react'
import bg from '../../assets/images/error-bg.png'
import bg2 from '../../assets/images/error-bg-2.png'
import Image from '../ui/Image'

const Error = () => {
  return (
    <section className='h-screen w-full flex items-center justify-center py-11 relative'>
      <Image src={bg} alt='error' className='w-[70%]' />
      <div className='absolute top-[30%] left-[49%] w-[21%]'>
        <Image src={bg2} alt='error' />
      </div>
    </section>
  )
}

export default Error