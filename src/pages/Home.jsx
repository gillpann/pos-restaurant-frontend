import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import Greetings from '../components/home/Greetings'
import MiniCard from '../components/home/MiniCard'
import RecentOrders from '../components/home/RecentOrders';
import PopularDishes from '../components/home/PopularDishes';

import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";

const Home = () => {
  return (
    <section className='bg-bg-page h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
      {/* Left Section */}
      <div className='flex-[3]'>
        <Greetings />
        <div className='flex items-center w-full gap-3 px-8 mt-8'>
          <MiniCard title="Total Earnings" icon={<BsCashCoin /> } number={500} footerNum={1.2}/>
          <MiniCard title="In Progress" icon={<GrInProgress /> } number={18} footerNum={2.8}/>
        </div>
        <RecentOrders />
      </div>

      {/* Right Section */}
      <div className='flex-[2]'>
      <PopularDishes />
      </div>

      <BottomNav />
    </section>
  )
}

export default Home