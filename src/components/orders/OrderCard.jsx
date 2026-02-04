import React from 'react'
import { FaCheckDouble } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="w-[450px] bg-bg-card p-5 rounded-2xl shadow-lg shadow-black/30 hover:shadow-xl transition">
        <div className='flex items-center gap-5'>
            <button className="bg-primary text-white p-3 text-lg font-bold rounded-lg">
                AM
            </button>
            <div  className='flex items-center justify-between w-[100%]'>
                <div className='flex flex-col items-start gap-1'>
                    <h1 className='text-text-main text-lg font-semibold tracking-wide'>Ahmad Gilvan</h1>
                    <p className='text-text-muted text-sm'>#101/ Dine in</p>
                </div>
                <div className='flex flex-col items-end gap-2'>
                    <p className="text-success bg-success/15 px-3 py-1 rounded-full text-sm font-medium">
                        <FaCheckDouble className="inline mr-1" /> Ready
                    </p>
                    <p className="text-text-muted text-sm">
                    <FaCircle className="inline mr-1 text-success" /> Ready to serve
                    </p>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-4 text-text-muted text-sm">
            <p>February 4, 2026 · 09:04 AM</p>
            <p>8 Items</p>
        </div>
        <hr className="w-full mt-4 border-t border-white/10" />
        <div className="flex items-center justify-between mt-4">
            <h1 className="text-text-main text-lg font-semibold">Total</h1>
            <p className="text-text-main text-lg font-bold">Rp90.000</p>
        </div>
    </div>
  )
}

export default OrderCard