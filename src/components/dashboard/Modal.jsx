import React, { useState } from 'react'
import { motion } from "framer-motion"
import { IoMdClose } from "react-icons/io";
import { useMutation } from '@tanstack/react-query';
import { addTable } from './../../https/index';
import { enqueueSnackbar } from 'notistack';

const Modal = ({setIsTableModalOpen}) => {

    const [tableData, setTableData] = useState({
        tableNo: "",
        seats: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setTableData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tableData);
        tableMutation.mutate(tableData)
    }

    const handleCloseModal = () => {
        setIsTableModalOpen(false)
    }

    const tableMutation = useMutation({
        mutationFn: (reqData) => addTable(reqData),
        onSuccess: (res) => {
            setIsTableModalOpen(false);
            const { data } = res;
            enqueueSnackbar(data.message, { variant: "success"})
        },
        onError: (error) => {
            const { data } = error.response;
            enqueueSnackbar(data.message, { variant: "error"})
            console.log(error);
        }
    })

    return (
        <div className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50'>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className='bg-bg-card border border-white/10 p-6 rounded-xl shadow-2xl w-[420px]'
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-text-main text-2xl font-bold">
                        Add New Table
                    </h2>
                    <button 
                        onClick={handleCloseModal} 
                        className='text-text-muted hover:text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-all duration-200'
                    >
                        <IoMdClose size={24} />
                    </button>
                </div>

                {/* Modal Body */}
                <form onSubmit={handleSubmit} className='space-y-5'>
                    <div>
                        <label className="block text-text-muted mb-2 text-sm font-medium">
                            Table Number
                        </label>
                        <div className="flex items-center rounded-lg px-4 py-3 bg-bg-item border border-white/5 focus-within:border-primary/50 transition-all">
                            <input 
                                type='number'
                                name='tableNo'
                                value={tableData.tableNo}
                                onChange={handleInputChange}
                                placeholder='Enter table number'
                                className='bg-transparent flex-1 text-text-main placeholder:text-text-muted focus:outline-none'
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-text-muted mb-2 text-sm font-medium">
                            Number of Seats
                        </label>
                        <div className="flex items-center rounded-lg px-4 py-3 bg-bg-item border border-white/5 focus-within:border-primary/50 transition-all">
                            <input 
                                type='number'
                                name='seats'
                                value={tableData.seats}
                                onChange={handleInputChange}
                                placeholder='Enter seat capacity'
                                className='bg-transparent flex-1 text-text-main placeholder:text-text-muted focus:outline-none'
                                required
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                        <button 
                            type='submit'
                            className="flex-1 py-3 text-base rounded-lg font-semibold text-white
                            bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed
                            transition-all duration-200 shadow-lg shadow-primary/20"
                        >
                            Add Table
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default Modal