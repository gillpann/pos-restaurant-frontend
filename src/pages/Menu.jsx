import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from './../components/shared/BackButton';
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from './../components/menu/MenuContainer';
import CustomerInfo from '../components/menu/CustomerInfo';
import CartInfo from '../components/menu/CartInfo';
import Bill from '../components/menu/Bill';

const Menu = () => {
  return (
    <section className='bg-bg-page h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>

      {/* Left Section */}
      <div className='flex-[3]'>
        <div className='flex items-center justify-between px-8 py-4 mt-2 bg-bg-header rounded-xl mx-6'>
          <div className='flex items-center gap-4'>
            <BackButton />
            <h1 className='text-text-main text-2xl font-bold tracking-wider'>Menu</h1>
          </div>
          <div className='flex items-center justify-around gap-4'>
            <div className='flex items-center gap-3 cursor-pointer '>
                <MdRestaurantMenu className='text-text-main text-4xl' />
                <div className='flex flex-col items-start'>
                    <h1 className='text-md text-text-main font-semibold'>Customer Name</h1>
                    <p className='text-xs text-text-muted font-medium'>Table No: 2</p>
                </div>
            </div>
          </div>
        </div>

        <MenuContainer />
      </div>

      {/* Right Section */}
      <div className='flex-[1] bg-bg-card mt-4 mr-3 h-[750px] rounded-lg pt-2'>
        {/* Customer Info */}
        <CustomerInfo />
        <hr className="border-bg-item border-t-2" />
        {/* Cart Items */}
        <CartInfo />
        <hr className="border-bg-item border-t-2" />
        {/* Bills */}
        <Bill />
      </div>
      
      <BottomNav />
    </section>
  )
}

export default Menu