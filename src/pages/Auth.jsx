import React from 'react'
import { useState } from 'react';
import restaurant from "../assets/images/restaurant-img.jpg"
import logo from "../assets/images/logo.png"
import Register from './../components/auth/Register';
import Login from '../components/auth/Login';

const Auth = () => {

  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className='flex min-h-screen w-full'>
      {/* Left Section */}
      <div className='w-2/3 relative flex items-center justify-center bg-cover'>

        {/* BG Image */}
        <img src={restaurant} alt="Restaurant Image"   className=" w-full h-full object-cover"
 />

        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <blockquote className='absolute bottom-10 px-8 mb-10 text-2xl italic text-text-main'>
          "Great food and friendly service turn first-time visitors into loyal customers."
          <br />
          <span className='block mt-4 text-primary'>— Restaurant Founder</span>
        </blockquote>
      </div>

      {/* Right Section */}
      <div className='w-1/3 min-h-screen bg-bg-page p-8 flex flex-col justify-center'>
        <div className="flex flex-col items-center gap-2">
          <img src={logo} alt="Resto Logo" className='h-12 w-12 border-2 rounded-full p-1'/>
          <p className='text-lg font-semibold text-text-main tracking-wide'>Resto</p>
        </div>
        <h2 className="text-4xl text-center mt-5 font-semibold text-primary mb-10">
          {isRegister ? "Create Employee Account" : "Welcome Back 👋"}
        </h2>

        {/* Component */}
        {isRegister ? <Register setIsRegister={setIsRegister} /> : <Login />}

        <div className="flex justify-center mt-6">
          <p className='text-sm text-text-muted'>
            {isRegister ? "Already have an account?" : "Don't have an account?"}
            <a onClick={() => setIsRegister(!isRegister)} href="#" className='text-primary hover:text-primary-hover font-semibold hover:underline'> 
            {isRegister ? " Sign in" : " Sign up"}
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Auth