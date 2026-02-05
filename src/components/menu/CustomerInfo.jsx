import React from 'react'

const CustomerInfo = () => {
  return (
        <div className='flex items-center justify-between px-4 py-1'>
            <div className='flex flex-col items-start'>
                <h1 className='text-text-main text-md font-semibold tracking-wide'>Customer Name</h1>
                <p className='text-text-muted text-xs font-medium mt-1'>#101/Dine in</p>
                <p className='text-text-muted text-xs font-medium mt-2'>February 05, 2026 02:56 PM</p>
            </div>
            <button className='bg-primary p-3 text-xl font-bold rounded-lg'>CN</button>
        </div>
  )
}

export default CustomerInfo