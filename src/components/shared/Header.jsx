import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import logo from "../../assets/images/logo.png"
import { useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { logout } from '../../https/index';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutMutation = useMutation({
        mutationFn: () => logout(),
        onSuccess: (data) => {
            console.log(data);
            dispatch(removeUser());
            navigate("/auth")
        },
        onError: (error) => {
            console.log(error);
        }
    })

    const handleLogout = () => {
        logoutMutation.mutate();
    }

  return (
    <header className='flex justify-between items-center py-3 px-8 bg-bg-header'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
            <img src={logo} className='h-6 w-6' alt="resto logo" />
            <h1 className='text-lg font-semibold text-text-main'>Resto</h1>
        </div>

        {/* Search */}
        <div className='flex items-center gap-4 bg-bg-card rounded-[20px] px-4 py-2 w-[450px]'>
            <FaSearch className='text-text-main' />
            <input 
                type='text'
                placeholder='Search...'
                className='bg-bg-card outline-none text-text-main'
            />
        </div>

        {/* Logged User Details */}
        <div className='flex items-center gap-4'>
            <div className='rounded-[15px] p-2 cursor-pointer'>
                <FaBell className='text-text-main text-2xl' />
            </div>
            <div className='flex items-center gap-3 cursor-pointer '>
                <FaUserCircle className='text-text-main text-4xl' />
                <div className='flex flex-col items-start'>
                    <h1 className='text-md text-text-main font-semibold'>{userData.name || "Name"}</h1>
                    <p className='text-xs text-text-muted font-medium'>{userData.role || "Role"}</p>
                </div>
                <IoLogOut onClick={handleLogout} className='text-text-main ml-2' size={40}/>
            </div>
        </div>
    </header>
  )
}

export default Header