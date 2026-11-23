import React from 'react'

const Image = ({ src, alt='image', className, onClick}) => {
  return (
    <img src={src} alt={alt} className={className} onClick={onClick} />
  )
}

export default Image