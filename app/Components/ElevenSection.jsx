import { Package, Plus, Recycle, Zap } from 'lucide-react'
import React from 'react'

const ElevenSection = () => {
  return (
    <div className='bg-[#F5F5F7] p-16 flex flex-col gap-8'>
        <h2 className='text-5xl font-bold text-black'>iPhone 17 Pro and the environment.</h2>
        <p className='text-[#0043fa]'>Learn more in our Product Environmental Report (PDF)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  justify-center item-center">
            <div className='flex gap-4 relative flex-col p-8 bg-white shadow-md rounded-2xl'>
                <Recycle className='text-[#886AFF]' size={35} />
                <p className='text-black text-2xl font-semibold '>Made with<br/><span className='text-[#886AFF]'>30% recycled<br/>material</span>by weight.</p>
            <Plus size={30} className="bg-black absolute bottom-2 right-2 rounded-full p-1" />
            
            </div>
              <div className='flex gap-4 flex-col  relative p-8 bg-white shadow-md rounded-2xl'>
                <Zap className='text-[#ED6300]' size={35} />
                <p className='text-black text-2xl font-semibold '>Manufactured with<br/><span className='text-[#ED6300]'>40% recnewable <br/> electricity</span></p>
            <Plus size={30} className="bg-black absolute bottom-2 right-2 rounded-full p-1" />
            
            </div>
              <div className='flex gap-4 flex-col p-8  relative bg-white shadow-md rounded-2xl'>
                <Package className='text-[#0BA5B6]' size={35} />
                <p className='text-black text-2xl font-semibold '>Ships in compact<br/>packaging for <span className='text-[#0BA5B6]'>25% <br/> more units</span>per trip.</p>
            <Plus size={30} className="bg-black absolute bottom-2 right-2 rounded-full p-1" />
            </div>

        </div>
    </div>
  )
}

export default ElevenSection