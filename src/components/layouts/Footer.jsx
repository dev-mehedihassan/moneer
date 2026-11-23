import React from 'react'
import logo from '../../assets/images/logo.png'
import Image from '../ui/Image'
import Heading from '../ui/Heading'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import { footerUrl, recentNews } from '../../dummyData/footerUrl'

const Footer = () => {
  return (
    <footer className="py-[110px] bg-linear-(--footer-linearbg)">
      <div className="container">
        <div className="flex ">
          <div className="w-[285px]">
            <Image src={logo} alt='logo' />
            <p className='mt-6 text-base font-lato font-normal text-white leading-7'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo</p>
            <div className='mt-5 grid grid-cols-1 gap-y-4'>
              <div className='grid grid-cols-[16px_auto] gap-x-4 '>
                <FaEnvelope className='text-secondary mt-1 ' />
                <Link to="mailto:monnersupport@email.com" className='text-white text-base font-lato font-bold leading-sung tracking-[0.7px] inline-block'>
                  monnersupport@email.com
                </Link>
              </div>
              <div className='grid grid-cols-[16px_auto] gap-x-4 '>
                <IoMdCall className='text-secondary mt-1 ' />
                <Link to="tel:123-123-123" className='text-white text-base font-lato font-bold leading-sung tracking-[0.7px] inline-block'>
                  (+1) 123-123-123
                </Link>
              </div>
              <div className='grid grid-cols-[16px_auto] gap-x-4 '>
                <FaMapMarkerAlt className='text-secondary mt-1 ' />
                <Link to="#" className='text-white text-base font-lato font-bold leading-snug tracking-[0.7px] inline-block'>
                  275 Jimmy Way
                  Copperopolis, California(CA), 95228
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Heading variant="h3" text="Company" className="mt-2 font-montserrat font-bold leading-normal text-white text-2xl" />
            <div className="mt-[33px] grid grid-cols-1 gap-y-[15px]">
              {footerUrl.map((item)=>(
                <div key={item.id} className="flex gap-x-4 items-center">
                  <div className="flex items-center gap-x-2">
                    <FaChevronRight className="text-white text-xs" />
                    <Link to={item.url} className="text-white font-lato text-base font-bold leading-6 tracking-[0.7px] capitalize" >
                      {item.text}
                    </Link>
                  </div>
                  {item.isNew &&
                    <span className="inline-block bg-orange px-3 py-1 rounded-[6px] text-white text-xs font-lato font-bold tracking-[0.87px] uppercase">
                        HOT!
                    </span>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer