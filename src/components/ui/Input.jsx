import React from 'react'

const Input = ({ onChange, placeholder, type, className, name, id, value, checked}) => {
  return (
    <input onChange={onChange} placeholder={placeholder} type={type} className={className} name={name} id={id} value={value} checked={checked} />
  )
}

export default Input