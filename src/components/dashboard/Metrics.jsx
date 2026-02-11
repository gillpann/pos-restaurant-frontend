import React from 'react'
import { itemsData, metricsData } from './../../constants/index';

const Metrics = () => {
  return (
    <div className='container mx-auto py-2 px-6 md:px-4'>
        {/* Overall Performance Section */}
        <div className="flex justify-between items-center mb-6">
            <div>
                <h2 className="font-semibold text-text-main text-xl">
                    Overall Performance
                </h2>
                <p className="text-sm text-text-muted mt-1">
                    Track your restaurant's key metrics and growth
                </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-text-main bg-bg-item hover:bg-bg-card transition-colors">
                <span className="text-sm">Last 1 Month</span>
                <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                >
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-4 gap-4">
            {metricsData.map((metric, index) => {
            return (
                <div
                key={index}
                className="shadow-sm rounded-xl p-5 border border-white/5 hover:border-white/10 transition-all duration-200"
                style={{ backgroundColor: metric.color }}
                >
                <div className="flex justify-between items-start mb-3">
                    <p className="font-medium text-sm text-text-main">
                    {metric.title}
                    </p>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/20">
                    <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        style={{ color: metric.isIncrease ? "#22C55E" : "#EF4444" }}
                    >
                        <path
                        d={metric.isIncrease ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                        />
                    </svg>
                    <p
                        className="font-semibold text-xs"
                        style={{ color: metric.isIncrease ? "#22C55E" : "#EF4444" }}
                    >
                        {metric.percentage}
                    </p>
                    </div>
                </div>
                <p className="font-bold text-3xl text-text-main">
                    {metric.value}
                </p>
                </div>
            );
            })}
        </div>

        {/* Item Details Section */}
        <div className="mt-16 mb-6">
            <div>
                <h2 className="font-semibold text-text-main text-xl">
                    Item Details
                </h2>
                <p className="text-sm text-text-muted mt-1">
                    Manage your menu categories, dishes, and table availability
                </p>
            </div>
        </div>

        {/* Items Cards */}
        <div className="grid grid-cols-4 gap-4">
            {itemsData.map((item, index) => {
                return (
                    <div 
                        key={index} 
                        className="shadow-sm rounded-xl p-5 border border-white/5 hover:border-white/10 transition-all duration-200" 
                        style={{ backgroundColor: item.color }}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <p className="font-medium text-sm text-text-main">
                                {item.title}
                            </p>
                            {item.percentage && (
                                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/20">
                                    <svg 
                                        className="w-3 h-3" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        strokeWidth="4" 
                                        fill="none"
                                        style={{ color: item.isIncrease ? "#22C55E" : "#EF4444" }}
                                    >
                                        <path d={item.isIncrease ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                                    </svg>
                                    <p 
                                        className="font-semibold text-xs"
                                        style={{ color: item.isIncrease ? "#22C55E" : "#EF4444" }}
                                    >
                                        {item.percentage}
                                    </p>
                                </div>
                            )}
                        </div>
                        <p className="font-bold text-3xl text-text-main">
                            {item.value}
                        </p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Metrics