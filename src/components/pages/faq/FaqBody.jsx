import React, { useState } from 'react'
import Heading from '../../ui/Heading'
import Paragraph from '../../ui/Paragraph'

const data = [
  {
    id: 1,
    tabLabel: "Beginner’s Guide",
    tabKey: "beginner-guide",
    tabContent: [
      {
        id: 1,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 2,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 3,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 4,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 5,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 6,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      }
    ]
  },
  {
    id: 2,
    tabLabel: "Security",
    tabKey: "security",
    tabContent: [
      {
        id: 1,
        title: "What is security? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 2,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 3,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 4,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 5,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 6,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      }
    ]
  },
  {
    id: 3,
    tabLabel: "ICO tokens",
    tabKey: "ico-tokens",
    tabContent: [
      {
        id: 1,
        title: "What is ICO tokens? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 2,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 3,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 4,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 5,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 6,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      }
    ]
  },
  {
    id: 4,
    tabLabel: "Investors Guide",
    tabKey: "investors-guide",
    tabContent: [
      {
        id: 1,
        title: "What is Investors Guide? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 2,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 3,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 4,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 5,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      },
      {
        id: 6,
        title: "What is cryptocurrency? A guide for beginners",
        content: "Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum. Phasellus imperdiet tellus ac mauris congue, sit amet condimentum augue elementum"
      }
    ]
  }
]

const FaqBody = () => {

const [activeTab, setActiveTab] = useState(data[0].tabKey)

  return (
    <section className="pt-[105px] pb-[96px]">
      <div className="container">
        <Heading className='text-center font-montserrat font-bold text-[34px] text-black_2' variant='h2' text="Frequently Asked Questions" />
        <Paragraph className="text-center max-w-[775px] mx-auto mt-3" text="Nullam vestibulum, justo vitae varius interdum, nibh turpis eleifend tellus, sit amet porttitor orci erat vitae odio. Duis sapien metus, egestas rhoncus metus id, dignissim malesuada eros" />
        <div className="mt-10 flex gap-20 justify-center items-center">
            {data.map((item,index)=>(
                <button onClick={ () => setActiveTab(item.tabKey)} key={index} className={`text-lg font-montserrat font-bold capitalize cursor-pointer hover:text-blue_1 transition-all duration-300 relative after:absolute after:content-[""] after:bg-blue_1 after:w-0 after:h-0.5 after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full ${activeTab === item.tabKey ? 'text-blue_1 after:w-full' : 'text-gray_2'}`}>{
                item.tabLabel
                }</button>
            ))}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-y-9 gap-x-10">
            {data.find((item)=> item.tabKey === activeTab)?.tabContent.map((contentItem,contentIndex)=>(
                <div key={contentIndex}>
                <Heading className="text-base font-bold font-montserrat text-black_2" text={contentItem.title} variant="h4" />
                <Paragraph className="mt-3" text={contentItem.content} />
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default FaqBody