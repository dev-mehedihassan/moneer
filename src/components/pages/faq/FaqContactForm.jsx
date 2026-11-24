import React from 'react'
import Heading from '../../ui/Heading'
import Input from '../../ui/Input'

const FaqContactForm = () => {

const inputStyle = `border border-[#C8C8C8] border-opacity-[73%] bg-[#F5F5FF] bg-opacity-[53%] rounded-[24px] py-2.5 px-4 font-normal font-lato text-base placeholder:text-gray_2 placeholder:font-lato`

  return (
    <section className="pt-[105px] pb-[96px]">
        <div className="container">
            <div className="grid grid-cols-[535px_auto] gap-x-[83px]">
                <div>
                    <Heading variant="h3" text="Need More Answers?" className="text-blue_1 text-[42px] font-montserrat font-bold" />
                    <form>
                        <textarea placeholder="Your Message" className="mt-4 w-full border border-[#C8C8C8] border-opacity-[73%] bg-[#F5F5FF] bg-opacity-[53%] rounded-[24px] py-2.5 px-4 font-normal font-lato text-base placeholder:text-gray_2 placeholder:font-lato min-h-[219px] resize-none" />
                        <div className="mt-4 grid grid-cols-2 gap-x-2.5">
                            <Input type="text" placeholder="Your Name" className={inputStyle} />
                            <Input type="email" placeholder="Your Email" className={inputStyle} />
                        </div>
                        <div className="mt-5.5 flex gap-2 items-center">
                            <Input type="checkbox" id="checkbox" className="w-[18px] h-[18px] rounded-[4px] accent-[#979797]" />
                            <label htmlFor="checkbox" className="text-base text-gray_2 font-lato font-normal text-gray_2">Remember Me</label>
                        </div>
                        <button type="submit" value="Leave a Reply" className="mt-6 bg-linear-to-r from-[#FF357D] to-[#FF6F33] text-white font-montserrat text-sm font-semibold py-4 px-[54px] inline-block rounded-[28px] cursor-pointer">
                            Leave a Reply
                        </button>
                    </form>
                </div>
                <div>Hello</div>
            </div>
        </div>
    </section>
  )
}

export default FaqContactForm