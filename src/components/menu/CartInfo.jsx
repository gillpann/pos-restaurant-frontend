import React, { useEffect, useRef } from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { removeItems } from '../../redux/slices/cartSlice';

const CartInfo = () => {

  const cartData = useSelector(state => state.cart);
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if(scrollRef.current){
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }, [cartData]);
  

  const handleRemove = (itemId) => {
    dispatch(removeItems(itemId));
  }

  return (
        <div className='px-4 py-1'>
            <h1 className='text-text-main font-semibold tracking-wide text-lg'>Order Details</h1>
            <div className='mt-4 overflow-y-scroll scrollbar-hide h-[320px]' ref={scrollRef}>
                
                {cartData.length === 0 ? (
                  <p className='text-text-muted text-sm flex items-center justify-center h-[320px]'>Your cart is empty. Start adding items!</p>
                ) : cartData.map((item) => {
                  return (
                    <div className='bg-bg-item rounded-lg px-3 py-3 mb-2'>
                      <div className='flex items-center justify-between'>
                          <h1 className='text-text-muted font-semibold tracking-wide text-md'>
                            {item.name}
                          </h1>
                          <p className='text-text-muted font-semibold'>
                            x{item.quantity}
                          </p>
                      </div>
                      <div className='flex items-center justify-between mt-3'>
                          <div className='flex items-center gap-3'>
                          <RiDeleteBin2Fill 
                          onClick={() => handleRemove(item.id)}
                          className='text-text-muted cursor-pointer' 
                          size={20} 
                          />
                          <FaNotesMedical 
                          className='text-text-muted cursor-pointer' 
                          size={20} 
                          />
                          </div>
                          <p className='text-text-main text-md font-bold'>${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  )
                })}
                
            </div>
        </div>
  )
}

export default CartInfo