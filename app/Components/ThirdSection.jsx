import React from 'react'

const ThirdSection = () => {
  return (
    <div className='bg-black h-full flex flex-col md:items-center justify-center text-white md:text-center gap-2 py-12 px-4'>
      <p className='text-2xl font-bold text-[orange]'>Design</p>
      <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold'>Unibody enclosure.<br/>
Makes a strong case for<br/> itself.</h2>
    <p className='text-white/50 md:w-[50%]'>Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the inside out to be the most powerful iPhone models ever made. At the core of the new design is a heat-forged aluminium unibody enclosure that maximises performance, battery capacity and durability.</p>
    <img src="/images/skeleton.jpg" alt="" className='mx-auto   ' />
    <h2 className='text-4xl md:pl-4 md:text-5xl font-extrabold text-start w-full'>Take a closer look.</h2>
    <img src="/images/phone_sec.jpg" alt=" " className='w-full md:w-[50%] mx-auto' />
    </div>
  )
}

export default ThirdSection