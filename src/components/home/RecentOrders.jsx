import React from 'react'
import { FaSearch } from 'react-icons/fa'
import OrderList from './OrderList'

const RecentOrders = () => {
  return (
    <div className='px-8 mt-6'>
        <div className="bg-bg-card w-full h-[450px] rounded-xl shadow-lg shadow-black/20">
            <div className='flex justify-between items-center px-6 py-4'>
                <h1 className='text-text-main text-lg font-semibold tracking-wide'>Recent Orders</h1>
                <a href="" className="text-primary hover:text-primary-hover text-sm font-semibold">View All</a>
            </div>

            <div className="flex items-center gap-3 bg-bg-item rounded-xl px-4 py-2 mx-4">
                <FaSearch className="text-text-muted" />
                <input
                    type="text"
                    placeholder="Search Recent Orders"
                    className="bg-bg-item outline-none text-text-main placeholder:text-text-muted w-full"
                />
            </div>

            {/* Orders List */}
            <div className='mt-4 px-6 overflow-y-scroll h-[300px] scrollbar-hide'>
                <OrderList />
                <OrderList />
                <OrderList />
                <OrderList />
                <OrderList />
                <OrderList />
                <OrderList />
            </div>
        </div>        
    </div>
  )
}

export default RecentOrders