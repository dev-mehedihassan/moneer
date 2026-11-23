import React from 'react'
import bg from '../../assets/images/error-bg.png'
import Image from '../ui/Image'

const Error = () => {
  return (
    <section className='h-screen'>
      <Image src={bg} alt='error' className='w-full h-full object-cover' />
    </section>
  )
}

export default Error