import React from 'react'
import { FaCheckDouble } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className="flex items-center gap-5 mb-4 bg-bg-item hover:bg-bg-card transition rounded-xl p-3">
        <button className='bg-primary text-white p-3 text-lg font-bold rounded-lg'>AM</button>
        <div  className='flex items-center justify-between w-[100%]'>
            <div className='flex flex-col items-start gap-1'>
                <h1 className='text-text-main text-lg font-semibold tracking-wide'>Ahmad Gilvan</h1>
                <p className='text-text-muted text-sm'>8 Items</p>
            </div>
            <div>
                <h1 className='text-text-muted text-sm font-semibold border border-primary/60 rounded-lg px-2 py-0.5'>Table No: 3</h1>
            </div>
            <div className='flex flex-col items-end gap-2'>
                <p className='text-success'><FaCheckDouble className='inline mr-1' /> Ready</p>
                <p className='text-text-muted text-sm'><FaCircle className='inline mr-1 text-success' /> Ready to serve</p>
            </div>
        </div>
    </div>
  )
}

export default OrderList