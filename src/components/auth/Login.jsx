import React from 'react'
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { login } from '../../https/index';
import { enqueueSnackbar } from "notistack"
import { useDispatch } from 'react-redux';
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const dispatch =  useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation.mutate(formData);
    }

    const loginMutation = useMutation({
        mutationFn: (reqData) => login(reqData),
        onSuccess: (res) => {
            const { data } = res;
            console.log(data)
            const { id, name, email, phone, role } = data.data;
            dispatch(setUser({ id, name, email, phone, role }));
            navigate("/");
        },
        onError: (error) => {
            const { response } = error;
            enqueueSnackbar(response.data.message, { variant: 'error'});
        }
    })

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