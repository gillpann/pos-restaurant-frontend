import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import Modal from "./Modal";

const BottomNav = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [guestCount, setGuestCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    if(guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  }
  const decrement = () => {
    if(guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  }

  const isActive = (path) => location.pathname === path;

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-bg-header p-2 h-14 flex justify-around'>
        <button onClick={() => navigate("/")} className={`flex items-center justify-center font-bold ${
          isActive("/") ? "text-text-main bg-bg-item" : "text-text-muted"
        }  w-[200px] rounded-[20px]`}><FaHome className='inline mr-2' size={20} /> 
          <p>Home</p>
        </button>

        <button onClick={() => navigate("/orders")} className={`flex items-center justify-center font-bold ${
          isActive("/orders") ? "text-text-main bg-bg-item" : "text-text-muted"
        }  w-[200px] rounded-[20px]`}><MdOutlineReorder className='inline mr-2' size={20} /> 
          <p>Orders</p>
        </button>

        <button onClick={() => navigate("/tables")} className={`flex items-center justify-center font-bold ${
          isActive("/tables") ? "text-text-main bg-bg-item" : "text-text-muted"
        }  w-[200px] rounded-[20px]`}><MdTableBar className='inline mr-2' size={20} /> 
          <p>Tables</p>
        </button>

        <button className='flex items-center justify-center text-text-muted w-[200px]'><CiCircleMore className='inline mr-2' size={20} />
          <p>More</p>
        </button>

        <button 
        disabled={isActive("/tables") || isActive("/menu")}
        onClick={openModal}
        className='absolute bottom-5 bg-primary hover:bg-primary-hover text-text-main rounded-full p-4 items-center'>
          <BiSolidDish size={30} />
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
          <div>
            <label className="block text-text-muted mb-2 text-sm font-medium">Customer Name</label>
            <div className="flex items-center rounded-lg p-3 px-4 bg-bg-item">
              <input type="text" name="" placeholder="Enter customer name" id="" className="bg-transparent flex-1 text-white focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-text-muted mb-2 mt-3 text-sm font-medium">Customer Phone</label>
            <div className="flex items-center rounded-lg p-3 px-4 bg-bg-item">
              <input type="number" name="" placeholder="+62 81234567892" id="" className="bg-transparent flex-1 text-white focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block mb-2 mt-3 text-text-muted text-sm font-medium">Guest</label>
            <div className="flex items-center justify-between rounded-lg py-3 px-4 bg-bg-item">
              <button onClick={decrement} className="text-primary text-2xl">&minus;</button>
              <span className="text-white">{guestCount} Person</span>
              <button onClick={increment} className="text-primary text-2xl">&#43;</button>
            </div>
          </div>
          <button onClick={() => navigate('/tables')} className="w-full bg-primary hover:bg-primary-hover text-text-main rounded-lg py-3 mt-8">
            Create Order
          </button>
        </Modal>

    </div>
  )
}

export default BottomNav