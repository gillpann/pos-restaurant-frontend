import React from 'react'
import { useState } from 'react';

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleRoleSelection = (selectedRole) => {
        setFormData({...formData, role: selectedRole});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label className="block text-text-muted mb-2 text-sm font-medium">
                    Full Name
                </label>
                <div className="flex items-center rounded-lg p-4 px-4 bg-bg-card">
                    <input type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='John Doe'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-text-muted mb-2 mt-3 text-sm font-medium">
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
                <label className="block text-text-muted mb-2 mt-3 text-sm font-medium">
                    Phone number
                </label>
                <div className="flex items-center rounded-lg p-4 px-4 bg-bg-card">
                    <input type="number"
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='+62 812 3456 7890'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-text-muted mb-2 mt-3 text-sm font-medium">
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
            <div>
                <label className="block text-text-muted mb-2 mt-3 text-sm font-medium">
                    choose your role
                </label>
                <div className="flex items-center gap-3 mt-4">
                    {["Waiter", "Cashier", "Admin"].map((role) => {
                        return (
                            <button 
                                key={role}
                                type='button'
                                onClick={() => handleRoleSelection(role)}
                                className={`px-4 py-3 w-full rounded-lg transition
                                ${formData.role === role
                                    ? "border border-primary text-primary bg-bg-item"
                                    : "bg-bg-card text-text-muted hover:bg-bg-item"}
                                `}>
                                    {role}
                            </button>
                        )
                    })}
                </div>
            </div>
            <button type='submit' className='w-full mt-6 py-3 text-lg text-text-main rounded-lg font-bold bg-primary hover:bg-primary-hover '>
                Sign up
            </button>
        </form>
    </div>
  )
}

export default Register