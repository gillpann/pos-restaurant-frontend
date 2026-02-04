import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className='bg-bg-item hover:bg-bg-card transition p-3 text-xl font-bold rounded-full text-text-main'>
        <IoArrowBackOutline />
    </button>
  )
}

export default BackButton