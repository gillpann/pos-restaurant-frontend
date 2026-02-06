import React from 'react'
import { useSelector } from 'react-redux';
import { formatDate, getAvatarName } from './../../utils/index';
import { useState } from 'react';

const CustomerInfo = () => {

  const [dateTime, setDateTime] = useState(new Date());
  const customerData = useSelector(state => state.customer);


  return (
        <div className='flex items-center justify-between px-4 py-1'>
            <div className='flex flex-col items-start'>
                <h1 className='text-text-main text-md font-semibold tracking-wide'>
                  {customerData.customerName || "Customer Name"}
                </h1>
                <p className='text-text-muted text-xs font-medium mt-1'>
                  #{customerData.orderId || "N/A"} / Dine 
                </p>
                <p className='text-text-muted text-xs font-medium mt-2'>{formatDate(dateTime)}</p>
            </div>
            <button className='bg-primary p-3 text-xl font-bold rounded-lg'>
              {getAvatarName(customerData.customerName) || "CN"}
            </button>
        </div>
  )
}

export default CustomerInfo