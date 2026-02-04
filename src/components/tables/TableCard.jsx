import React from 'react'
import { getAvatarBG } from './../../utils/index';

const TableCard = ({key, name, status, initials }) => {
  return (
    <div key={key} className='w-[300px] bg-bg-card p-4 rounded-xl shadow-lg shadow-black/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
        <div className='flex items-center justify-between px-1'>
            <h1 className='text-text-main text-lg font-semibold'>{name}</h1>
            <p className={`${status === "Booked" ? "text-success bg-[#2e4a40]" : "text-warning  bg-[#4A3B14]"} backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium`}>
                {status}
            </p>
        </div>
        <div className='flex items-center justify-center mt-5 mb-10'>
            <h1
                style={{ backgroundColor: getAvatarBG(initials) }}
                className="text-white rounded-full p-5 text-xl"
                >
            {initials}
            </h1>

        </div>
    </div>
  )
}

export default TableCard