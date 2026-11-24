import React from 'react'

const Paragraph = ({ text, className}) => {
  return (
    <p className={`font-lato font-normal text-base leading-6.5 text-gray_2 ${className}`}>{text}</p>
  )
}

export default Paragraph