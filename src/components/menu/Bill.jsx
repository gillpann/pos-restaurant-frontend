import React from 'react'
import { useSelector } from 'react-redux';
import { getTotalPrice } from './../../redux/slices/cartSlice';

const Bill = () => {

    const cartData = useSelector(state => state.cart)
    const total = useSelector(getTotalPrice);
    const taxRate = 3.25;
    const tax = (total * taxRate) / 100;
    const totalPriceWithTax = total + tax;
    
  return (
    <>
        <div className='flex items-center justify-between px-5 mt-2'>
            <p className='text-xs text-text-muted font-medium mt-2'>Items({cartData.length})</p>
            <h1 className='text-text-main text-md font-bold'>${total.toFixed(2)}</h1>
        </div>
        <div className='flex items-center justify-between px-5 mt-2'>
            <p className='text-xs text-text-muted font-medium mt-2'>Tax(3.25%)</p>
            <h1 className='text-text-main text-md font-bold'>${tax.toFixed(2)}</h1>
        </div>
        <div className="mx-5 my-3 border-t border-white/10" />
        <div className='flex items-center justify-between px-5 mt-2'>
            <p className='text-xs text-text-muted font-medium mt-2'>Grand Total</p>
            <h1 className='text-text-main text-md font-bold'>${totalPriceWithTax.toFixed(2)}</h1>
        </div>
        <div className='flex items-center gap-3 px-5 mt-4'>
            <button className='bg-bg-item border border-primary text-primary px-4 py-3 w-full rounded-lg font-semibold hover:bg-primary/10 transition'>
                Cash
            </button>
            <button className='bg-bg-item border border-warning text-warning px-4 py-3 w-full rounded-lg font-semibold hover:bg-warning/10 transition'>
                Online
            </button>
        </div>


        <div className='flex items-center gap-3 px-5 mt-4'>
            <button className='bg-bg-item px-4 py-3 w-full rounded-lg text-text-muted font-semibold ring-1 ring-white/30 hover:bg-bg-card transition'>
                Print Receipt
            </button>
            <button className='bg-primary px-4 py-3 w-full rounded-lg text-white font-semibold text-lg hover:bg-primary-hover transition'>
                Place Order
            </button>

        </div>

    </>
  )
}

export default Bill