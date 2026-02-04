import React from 'react'
import { useState } from 'react';
import BottomNav from './../components/shared/BottomNav';
import OrderCard from '../components/orders/OrderCard';
import BackButton from '../components/shared/BackButton';

const Orders = () => {

  const [status, setStatus] = useState("all");

  return (
    <section className='bg-bg-page h-[calc(100vh-5rem)] overflow-hidden'>
      <div className='flex items-center justify-between px-8 py-4 mt-2 bg-bg-header rounded-xl mx-6'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-text-main text-2xl font-bold tracking-wider'>Orders</h1>
        </div>
        <div className='flex items-center justify-around gap-4'>
          <button
            onClick={() => setStatus("all")}
            className={`text-sm font-semibold px-5 py-2 rounded-xl transition
              ${status === "all"
                ? "bg-bg-card text-text-main"
                : "text-text-muted hover:text-text-main"}
            `}
            >
              All
          </button>
          <button
            onClick={() => setStatus("progress")}
            className={`text-sm font-semibold px-5 py-2 rounded-xl transition
              ${status === "progress"
                ? "bg-bg-card text-text-main"
                : "text-text-muted hover:text-text-main"}
            `}
            >
              In Progress
          </button>
          <button
            onClick={() => setStatus("ready")}
            className={`text-sm font-semibold px-5 py-2 rounded-xl transition
              ${status === "ready"
                ? "bg-bg-card text-text-main"
                : "text-text-muted hover:text-text-main"}
            `}
            >
              Ready
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`text-sm font-semibold px-5 py-2 rounded-xl transition
              ${status === "completed"
                ? "bg-bg-card text-text-main"
                : "text-text-muted hover:text-text-main"}
            `}
            >
              Completed
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 px-14 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-10rem)]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>

      <BottomNav />
    </section>
  )
}

export default Orders