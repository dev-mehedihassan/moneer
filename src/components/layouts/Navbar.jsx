import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import Image from '../ui/Image'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { menuData } from '../../dummyData/menuData';
import { FaBars, FaXmark } from 'react-icons/fa6';


const Navbar = () => {

const [sidebarOpen, setSidebarOpen] = useState(false)

useEffect(()=>{
  document.body.style.overflow = sidebarOpen ? "hidden" : "auto"
  return () => {
    document.body.style.overflow = "auto"
  }
},[sidebarOpen])

  return (
    <header className='bg-primary py-4 absolute w-full top-0 left-0 z-50'>
      <div className="container">
        <div className='flex justify-between items-center'>
          <Link to='/'>
            <Image src={logo} alt='logo' />
          </Link>
          <div className='hidden lg:flex gap-x-9 items-center'>
            <ul className='flex gap-x-10 xl:gap-x-[55px]'>
              {menuData.map((item) => (
                <li key={item.id}>
                  <Link to={item.url} className='text-white text-base font-lato font-bold capitalize tracking-[0.7px] relative after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-[2px] after:bg-linear-(--nav-hover-linearbg) after:content-[""] after:rounded-[3px]' >{item.label}</Link>
                </li>
              ))}
            </ul>
            <FaUser className='text-white cursor-pointer' />
          </div>
          <button onClick={() => setSidebarOpen(true)} className='lg:hidden'>
            <FaBars className='text-white text-2xl' />
          </button>
        </div>
      </div>
      <div onClick={() => setSidebarOpen(false)} className={`fixed inset-0 bg-black/70 transition-all duration-300 lg:hidden ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />
      <aside className={`fixed top-0 right-0 h-screen w-[300px] p-6 bg-primary z-1000 transition-all duration-300 ease-in-out lg:hidden ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Sidebar Header */}
        <div className='flex justify-between items-center mb-10'>
          <Link to="/" onClick={()=>setSidebarOpen(false)}>
            <Image src={logo} alt="logo" />
          </Link>

          <button
            onClick={()=>setSidebarOpen(false)}
            className='text-white'
            aria-label="Close menu"
          >
            <FaXmark className='text-2xl' />
          </button>
        </div>

        {/* Sidebar Menu */}
        <ul className='flex flex-col gap-y-7'>
          {menuData.map((item) => (
            <li key={item.id}>
              <Link
                to={item.url}
                onClick={()=>setSidebarOpen(false)}
                className='text-white text-base font-lato font-bold capitalize tracking-[0.8px]'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Icon */}
        <div className='mt-10 flex gap-3 items-center'>
          <FaUser className='text-white text-xl cursor-pointer' /><span className='text-white text-base font-lato font-bold capitalize tracking-[0.8px]'>Profile</span>
        </div>
      </aside>
    </header>
  )
}

export default Navbar