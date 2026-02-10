import React from 'react'
import { useState } from 'react';

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label className="block text-text-muted mb-2 mt-4 text-sm font-medium">
                    Email address
                </label>
                <div className="flex items-center rounded-lg p-4 px-4 bg-bg-card">
                    <input type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='name@restaurant.com'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-text-muted mb-2 mt-4 text-sm font-medium">
                    Password
                </label>
                <div className="flex items-center rounded-lg p-4 px-4 bg-bg-card">
                    <input type="password"
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Minimum 8 characters'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    />
                </div>
            </div>

            <button type='submit' disabled={!formData.email || !formData.password}
            className="w-full mt-6 py-3 text-lg rounded-lg font-bold
            bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Sign in
            </button>
        </form>
    </div>
  )
}

export default Login