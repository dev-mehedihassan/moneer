import React, { useState } from 'react'
import { IoCallSharp } from 'react-icons/io5'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Heading from '../../ui/Heading'
import Input from '../../ui/Input'
import Paragraph from '../../ui/Paragraph'

const data = [
  {
    id: 1,
    icon: <FaEnvelope />,
    iconColor: "#00C3B7",
    label: "Email",
    list: [
      "monnersupport@email.com",
      "monnerhr@email.com"
    ]
  },
  {
    id: 2,
    icon: <IoCallSharp />,
    iconColor: "#5F5FFF",
    label: "Call Us",
    list: [
      "(+1) 123-123-123",
      "(+1) 202-555-0134"
    ]
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    iconColor: "#FF5851",
    label: "Location",
    list: [
      "275 Jimmy Way",
      "Copperopolis, California(CA), 95228"
    ]
  },
]

const ContactBody = () => {

const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    brief: ""
})

const [error, setError] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    brief: ""
})

const handleChange = (e) => {
    const {name, value, type, checked} = e.target
    setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
    }))
}

const inputStyle = `border border-[#C8C8C8] border-opacity-[73%] bg-[#F5F5FF] bg-opacity-[53%] rounded-[24px] py-2.5 px-4 font-normal font-lato text-base placeholder:text-gray_2 placeholder:font-lato w-full outline-none`

const handleSubmit = (e) => {
  e.preventDefault()

  let emailRegex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"

  let newError = {
    name: "",
    email: "",
    message: "",
    rememberMe: ""
  }
  // name validation
  if(!formData.name.trim()){
    newError.name = "Name is required"
  }
  if(formData.name.length > 16){
    newError.name = "Max length is 16"
  }
  // name validation
  if(!formData.email.trim()){
    newError.email = "Email is required"
  } else if (emailRegex.match(formData.email)){
    newError.email = "Valid Email required"
  }

  setError(newError)

  if(Object.values(newError).some((item) => item !== "")){
    return
  }

  console.log(formData)
}

  return (
    <section className='py-25'>
        <div className="container">
            <div className='max-w-[825px] mx-auto grid grid-cols-3 gap-x-13'>
                {data.map((item,index)=>(
                    <div key={index} className='flex flex-col items-center'>
                        <div className={`size-20 rounded-full bg-white shadow-xl flex items-center justify-center [&>svg]:text-2xl`} style={{color: item.iconColor}}>
                            {item.icon}
                        </div>
                        <Heading text={item.label} variant='h3' className='font-bold font-montserrat text-xl text-black_2 mt-5'/>
                        <ul className='mt-1.5 '>
                            {item?.list.map((list,listIndex)=>(
                                <li key={listIndex} className='font-lato font-bold text-base text-gray_2 text-center'>
                                    {list}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='mt-18 max-w-[725px] mx-auto'>
                <Heading className='font-bold text-[34px] font-montserrat text-black_2 text-center' text="We are ready to help grow your idea" variant='h3' />
                <Paragraph className="text-center mt-6" text="Ut feugiat dictum consequat. Aenean varius, augue malesuada eleifend faucibus" />
                <form onSubmit={handleSubmit} className='mt-7 grid grid-cols-2 gap-4'>
                        <div>
                            <Input value={formData.name} onChange={handleChange} name="name" type="text" placeholder="Your Name" className={inputStyle} />
                                {error.name && 
                                    <p className='mt-1.5 border-l-2 border-rose-500 pl-2.5 font-lato text-xs font-medium tracking-wide text-rose-600'>{error.name}</p>
                                }
                        </div>
                        <div>
                            <Input value={formData.email} onChange={handleChange} name="email" type="email" placeholder="Your Email" className={inputStyle} />
                                {error.email && 
                                    <p className='mt-1.5 border-l-2 border-rose-500 pl-2.5 font-lato text-xs font-medium tracking-wide text-rose-600'>{error.email}</p>
                                }
                        </div>
                        <div>
                            <Input value={formData.company} onChange={handleChange} name="company" type="text" placeholder="Company Name" className={inputStyle} />
                                {error.company && 
                                    <p className='mt-1.5 border-l-2 border-rose-500 pl-2.5 font-lato text-xs font-medium tracking-wide text-rose-600'>{error.company}</p>
                                }
                        </div>
                        <div>
                            <Input value={formData.phone} onChange={handleChange} name="phone" type="text" placeholder="Phone Number" className={inputStyle} />
                                {error.phone && 
                                    <p className='mt-1.5 border-l-2 border-rose-500 pl-2.5 font-lato text-xs font-medium tracking-wide text-rose-600'>{error.phone}</p>
                                }
                        </div>
                        <textarea onChange={handleChange} value={formData.brief} name='brief' placeholder="Tell About Your Project" className="w-full border border-[#C8C8C8] border-opacity-[73%] bg-[#F5F5FF] bg-opacity-[53%] rounded-[24px] py-2.5 px-4 font-normal font-lato text-base placeholder:text-gray_2 placeholder:font-lato min-h-[219px] resize-none col-span-2 outline-none" />
                        <div className='col-span-2 flex justify-center'>
                            <button type="submit" value="Send" className="bg-linear-to-r from-[#FF357D] to-[#FF6F33] text-white font-montserrat text-sm font-semibold py-4 px-21 inline-block rounded-[28px] cursor-pointer">
                            Send
                        </button>
                        </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactBody