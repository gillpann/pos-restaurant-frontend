import React from 'react'
import { MdCategory, MdTableBar } from 'react-icons/md';
import { BiSolidDish } from 'react-icons/bi';
import Metrics from '../components/dashboard/Metrics';
import RecentOrders from '../components/dashboard/RecentOrders';
import { useState } from 'react';
import Modal from '../components/dashboard/Modal';


const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "table"},
  { label: "Add Category", icon: <MdCategory /> , action: "category"},
  { label: "Add Dishes", icon: <BiSolidDish /> , action: "dishes"},
]

const tabs = ["Metrics", "Orders", "Payment"];

const Dashboard = () => {

  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Metrics");

  const handleOpenModal = (action) => {
    if(action === "table") setIsTableModalOpen(true)
  }

  return (
    <div className='bg-bg-page h-[calc(100vh-4rem)]'>
      <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">
          {/* LEFT SIDE - Action Buttons */}
          <div className='flex items-center gap-3 pr-6 border-r border-white/10'>
            {buttons.map(({label, icon, action}) => {
              return (
                <button 
                  onClick={() => handleOpenModal(action)}
                  className='bg-bg-item hover:bg-bg-card hover:ring-1 ring-white/30 transition-colors duration-200 px-6 py-3 rounded-lg text-text-main font-medium text-sm flex items-center gap-2'
                >
                  {icon} {label}
                </button>
              )
            })}
          </div>

          {/* RIGHT SIDE - Tab Navigation */}
          <div className='flex items-center gap-2 pl-6'>
            {tabs.map((tab) => {
              return (
                <button 
                  key={tab}
                  className={`
                    px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2
                    transition-all duration-200
                    ${activeTab === tab 
                      ? "bg-primary hover:bg-primary-hover text-white" 
                      : "bg-bg-item hover:bg-bg-card text-text-muted hover:text-text-main"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>
          
        {activeTab === "Metrics" && <Metrics />}
        {activeTab === "Orders" && <RecentOrders />}

        {isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen} />}

    </div>
  )
}

export default Dashboard