import React from 'react'
import { popularDishes } from '../../constants'

const PopularDishes = () => {
  return (
    <div className='mt-6 pr-6'>
        <div className='bg-bg-card w-full rounded-xl shadow-lg shadow-black/20'>
            <div className='flex justify-between items-center px-6 py-4'>
                <h1 className='text-text-main text-lg font-semibold tracking-wide'>Popular Dishes</h1>
                <a href="" className='text-primary hover:text-primary-hover text-sm font-semibold'>View All</a>
            </div>

            <div className='overflow-y-scroll h-[680px] scrollbar-hide'>
                {popularDishes.map((dish) => {
                    return (
                        <div
                        key={dish.id}
                        className="flex items-center gap-4 bg-bg-item hover:bg-bg-card transition rounded-2xl px-6 py-4 mt-4 mx-6"
                        >
                            <div className=" w-8 h-8 flex items-center justify-center bg-primary/20 text-primary rounded-lg font-semibold text-sm">{dish.id < 10 ? `0${dish.id}` : dish.id}</div>
                            <img
                                src={dish.image}
                                alt={dish.name}
                                className="w-[48px] h-[48px] rounded-full object-cover"
                            />

                            <div>
                                <h1 className="text-text-main font-semibold tracking-wide">
                                {dish.name}
                                </h1>
                                <p className="text-text-muted text-sm font-semibold mt-1">
                                    <span className='text-text-muted'>Orders: </span>
                                    {dish.numberOfOrders}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default PopularDishes