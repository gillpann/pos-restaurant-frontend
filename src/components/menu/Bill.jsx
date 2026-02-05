import React from 'react'

const Bill = () => {
  return (
    <>
        <div className='flex items-center justify-between px-5 mt-2'>
            <p className='text-xs text-text-muted font-medium mt-2'>Items(3)</p>
            <h1 className='text-text-main text-md font-bold'>Rp. 240</h1>
        </div>
        <div className='flex items-center justify-between px-5 mt-2'>
            <p className='text-xs text-text-muted font-medium mt-2'>Tax(4.25%)</p>
            <h1 className='text-text-main text-md font-bold'>Rp. 24</h1>
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