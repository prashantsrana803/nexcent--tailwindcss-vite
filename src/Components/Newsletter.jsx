import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Newsletter = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-16'>
        <div>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                    Pellentesque suscipit fringilla libero eu.
                </h2>
                <div className='flex items-center justify-center gap-8'>
                    <button className='btn-primary text-white mt-8 flex items-center'>Get a Demo
                        <i><FaArrowRightLong className=''/></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter