import React from 'react'

const Footer = () => {
  return (
    <footer className="py-[110px] bg-linear-(--footer-linearbg)">
  <div className="container">
    <div className="flex ">
      <div className="w-[285px]">...
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
                <span className="inline-block bg-orange px-3 py-1 rounded-[6px] text-white text-xs font-lato font-bold tracking-[0.87px] u
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