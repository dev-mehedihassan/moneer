import React from 'react'

const Input = ({ onChange, placeholder, type, className, name, id}) => {
  return (
    <input onChange={onChange} placeholder={placeholder} type={type} className={className} name={name} id={id} />
  )
}

export default Input