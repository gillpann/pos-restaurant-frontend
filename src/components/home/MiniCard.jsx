import React from 'react'

const MiniCard = ({ title, icon, number, footerNum }) => {
  const isEarning = title === "Total Earnings"

  return (
    <div
      className={`
        bg-bg-card w-[50%] rounded-xl p-4
        border-l-4 ${isEarning ? 'border-success' : 'border-warning'}
        shadow-md shadow-black/20
      `}
    >
      <div className='flex items-center justify-between'>
        <h1 className='text-text-muted text-sm font-medium tracking-wide'>
          {title}
        </h1>

        <div
          className={`
            p-3 rounded-lg text-xl
            ${isEarning
              ? 'bg-success/20 text-success'
              : 'bg-warning/20 text-warning'}
          `}
        >
          {icon}
        </div>
      </div>

      <h1 className='text-text-main text-4xl font-bold mt-4'>
        {isEarning ? `Rp${number}` : number}
      </h1>

      <p className='text-text-muted text-sm mt-2'>
        <span className='text-success font-semibold'>{footerNum}%</span> than yesterday
      </p>
    </div>
  )
}


export default MiniCard