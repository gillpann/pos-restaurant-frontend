import React from 'react'
import { useState } from 'react';
import { menus } from './../../constants/index';
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";

const MenuContainer = () => {

    const [selected, setSelected] = useState(menus[0]);
    const [itemCount, setItemCount] = useState(0);
    const [itemId, setItemId] = useState();

    const increment = (id) => { 
        setItemId(id);
        if(itemCount >= 5) return;
        setItemCount((prev) => prev + 1);
    }
    const decrement = (id) => {
        setItemId(id)
        if(itemCount <= 0) return;
        setItemCount((prev) => prev - 1);
    }


  return (
    <>
        <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
            {menus.map((menu) => {
                return (
                    <div key={menu.id} className='flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer transition hover:ring-1 hover:ring-white/20'
                    style={{backgroundColor : menu.bgColor}}
                    onClick={() => {
                        setSelected(menu);
                        setItemId(0);
                        setItemCount(0);
                    }}
                    >
                        <div className='flex items-center justify-between w-full'>
                            <h1 className='text-text-main text-lg font-semibold'>{menu.icon} {menu.name}</h1>
                            {selected.id === menu.id && <GrRadialSelected className='text-white' size={20}/>}
                        </div>
                        <p className='text-text-muted text-sm font-semibold'>{menu.items.length} Items</p>
                    </div>
                )
            })}
        </div>

        <hr className="border-bg-item border-t-2 mt-4" />

        <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
            {selected?.items.map((menu) => {
                return (
                    <div key={menu.id} className='flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer transition hover:ring-1 hover:ring-white/30 bg-bg-card'
                    >
                        <div className='flex items-start justify-between w-full'>
                            <h1 className='text-text-main text-lg font-semibold'>
                                {menu.name}
                            </h1>
                            <button className='text-success bg-[#2e4a40] hover:bg-success/30 p-2 rounded-lg transition'>
                                <FaShoppingCart size={18} />
                            </button>
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <p className='text-text-main text-lg font-bold'>
                                Rp. {menu.price}
                            </p>
                            <div className="flex items-center justify-between rounded-lg py-3 px-4 bg-bg-item gap-6">
                                <button 
                                onClick={() => decrement(menu.id)} 
                                className="text-primary text-2xl">&minus;</button>
                                    <span className="text-white">{menu.id === itemId ? itemCount : "0"}</span>
                                <button 
                                onClick={() => increment(menu.id)} 
                                className="text-primary text-2xl">&#43;</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default MenuContainer