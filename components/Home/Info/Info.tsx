import Image from 'next/image'
import React from 'react'
import { BiCheck } from 'react-icons/bi'

const Info = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/*Image content*/}
            <div data-aos="fade-left" 
        data-aos-anchor-placement="top-center"
         >
                <Image src={"/images/a.png"} alt='' width={1000} height={100}/>
            </div>
            {/*Text Contentcontent*/}
            <div data-aos="fade-right" 
        data-aos-anchor-placement="top-center"
        data-aos-delay={150}>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-8 lg:leading'>
                    Get applications from the world best talent
                    </h1>
                    <p className='mt-6 text-gray-700 dark:text-gray-300'>
                        search all the open positions on the web. Get your own personalized salary estimate.Read reviews on ovwer 600,000 coompanies worlwide.
                    </p>
                    <div className="mt-8">
                        <div className="flex items-center space-x-2 mb-4">
                            <BiCheck className='text-gray-700 dark:text-gray-300 font-medium'/>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                Bring to the table win-win survival
                            </span>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <BiCheck className='text-gray-700 dark:text-gray-300 font-medium'/>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                Capitalize on low hanging fruit identify
                            </span>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <BiCheck className='text-gray-700 dark:text-gray-300 font-medium'/>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                               But I must explain to you how all this 
                            </span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="px-8 py-3 bg-blue-800 rounded-lg text-white text-center cursor-pointer hover:bg-blue-950 transition-all duration-300">
                            Post a Job
                        </button>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Info
