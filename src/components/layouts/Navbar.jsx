import React from 'react'
import logo from '../../assets/images/logo.png'
import Image from '../ui/Image'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { menuData } from '../../dummyData/menuData';


const Navbar = () => {
  return (
    <header className='bg-primary py-4'>
      <div className="container">
        <div className='flex justify-between items-center'>
          <div>
            <Image src={logo} alt='logo' />
          </div>
          <div className='flex gap-x-9 items-center'>
            <ul className='flex gap-x-[55px]'>
              {menuData.map((item) => (
                <li key={item.id}>
                  <Link to={item.url} className='text-white text-base font-lato font-bold capitalize tracking-[0.7px] relative after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-[2px] after:bg-linear-(--nav-hover-linearbg) after:content-[""] after:rounded-[3px]' >{item.label}</Link>
                </li>
              ))}
            </ul>
            <FaUser className='text-white' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar