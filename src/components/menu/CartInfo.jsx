import React from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";

const CartInfo = () => {
  return (
        <div className='px-4 py-1'>
            <h1 className='text-text-main font-semibold tracking-wide text-lg'>Order Details</h1>
            <div className='mt-4 overflow-y-scroll scrollbar-hide h-[320px]'>
                <div className='bg-bg-item rounded-lg px-3 py-3 mb-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-text-muted font-semibold tracking-wide text-md'>Chicken Tikka</h1>
                        <p className='text-text-muted font-semibold'>x2</p>
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center gap-3'>
                        <RiDeleteBin2Fill className='text-text-muted cursor-pointer' size={20} />
                        <FaNotesMedical className='text-text-muted cursor-pointer' size={20} />
                        </div>
                        <p className='text-text-main text-md font-bold'>Rp. 123</p>
                    </div>
                </div>

                <div className='bg-bg-item rounded-lg px-3 py-3 mb-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-text-muted font-semibold tracking-wide text-md'>Chicken Tikka</h1>
                        <p className='text-text-muted font-semibold'>x2</p>
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center gap-3'>
                        <RiDeleteBin2Fill className='text-text-muted cursor-pointer' size={20} />
                        <FaNotesMedical className='text-text-muted cursor-pointer' size={20} />
                        </div>
                        <p className='text-text-main text-md font-bold'>Rp. 123</p>
                    </div>
                </div>

                <div className='bg-bg-item rounded-lg px-3 py-3 mb-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-text-muted font-semibold tracking-wide text-md'>Chicken Tikka</h1>
                        <p className='text-text-muted font-semibold'>x2</p>
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center gap-3'>
                        <RiDeleteBin2Fill className='text-text-muted cursor-pointer' size={20} />
                        <FaNotesMedical className='text-text-muted cursor-pointer' size={20} />
                        </div>
                        <p className='text-text-main text-md font-bold'>Rp. 123</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CartInfo