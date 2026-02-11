import React from "react";
import { orders } from "../../constants";
import { GrUpdate } from "react-icons/gr";
import { FiClock, FiUser, FiShoppingBag } from "react-icons/fi";
import { MdTableBar } from "react-icons/md";

const RecentOrders = () => {

     const handleStatusChange = () => {};
  return (
    <div className="container mx-auto px-6 md:px-4 py-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-text-main text-xl font-semibold">
            Recent Orders
          </h2>
          <p className="text-sm text-text-muted mt-1">
            Track and manage your latest restaurant orders
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-bg-item rounded-lg border border-white/5">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
          <span className="text-sm text-text-main">{orders.length} Active Orders</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-bg-card rounded-xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            {/* Table Header */}
            <thead>
              <tr className="bg-bg-item border-b border-white/10">
                <th className="p-4 text-text-muted font-medium text-sm">Order ID</th>
                <th className="p-4 text-text-muted font-medium text-sm">Customer</th>
                <th className="p-4 text-text-muted font-medium text-sm">Status</th>
                <th className="p-4 text-text-muted font-medium text-sm">Date & Time</th>
                <th className="p-4 text-text-muted font-medium text-sm">Items</th>
                <th className="p-4 text-text-muted font-medium text-sm">Table</th>
                <th className="p-4 text-text-muted font-medium text-sm">Total</th>
                <th className="p-4 text-text-muted font-medium text-sm text-center">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-bg-item/50 transition-colors duration-200"
                >
                  {/* Order ID */}
                  <td className="p-4">
                    <span className="text-text-main font-semibold">#{order.id}</span>
                  </td>

                  {/* Customer */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                        <FiUser className="text-primary text-sm" />
                      </div>
                      <span className="text-text-main font-medium">{order.customer}</span>
                    </div>
                  </td>

                  {/* Status Dropdown */}
                  <td className="p-4">
                    <select
                      className={`bg-bg-page px-3 py-2 rounded-lg text-xs font-semibold border cursor-pointer
                        focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all
                        ${order.status === "Ready" 
                          ? "bg-success/10 text-success border-success/30" 
                          : "bg-warning/10 text-warning border-warning/30"
                        }`}
                      value={order.status}
                      onChange={(e) => handleStatusChange(index, e.target.value)}
                    >
                      <option value="In Progress" className="bg-bg-page text-warning">
                        In Progress
                      </option>
                      <option value="Ready" className="bg-bg-page text-success">
                        Ready
                      </option>
                    </select>
                  </td>

                  {/* Date & Time */}
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-text-muted text-sm">
                      <FiClock size={14} />
                      <span>{order.dateTime}</span>
                    </div>
                  </td>

                  {/* Items */}
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <FiShoppingBag className="text-primary" size={16} />
                      <span className="text-text-main font-medium">{order.items}</span>
                      <span className="text-text-muted text-sm">items</span>
                    </div>
                  </td>

                  {/* Table No */}
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <MdTableBar className="text-warning" size={16} />
                      <span className="text-text-main font-medium">Table {order.tableNo}</span>
                    </div>
                  </td>

                  {/* Total */}
                  <td className="p-4">
                    <span className="text-text-main font-bold text-base">
                      ${order.total.toFixed(2)}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="p-4">
                    <div className="flex justify-center">
                      <button className="p-2 rounded-lg bg-bg-item hover:bg-primary hover:text-white 
                        text-text-muted transition-all duration-200 border border-white/5 hover:border-primary">
                        <GrUpdate size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;