import React from 'react';
import { MdTour } from "react-icons/md";

const BrowsByCategory = () => {
    return (
        <div className=' bg-[#e2e7ea] pt-16 '>
            <div className='flex items-center justify-center'>
                <div>
                    <h1 className='font-bold text-xl '>Brows By Category</h1>
                    <p className='font-bold  text-3xl '>Pick a tour type</p>
                </div>
            </div>
            <div className='md:flex gap-16 pt-10 sm:gap-8 justify-center items-center'>
                <div className='bg-[#fff] h-36 w-36 flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <MdTour className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></MdTour>
                        <p className='font-bold text-xl '>City Tours</p>
                        <p className='text-[#8d989e]'>10 Tours +</p>
                    </div>
                </div>
                <div className='bg-[#fff] h-36 w-36 flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <MdTour className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></MdTour>
                        <p className='font-bold text-xl '>City Tours</p>
                        <p className='text-[#8d989e]'>10 Tours +</p>
                    </div>
                </div>
                <div className='bg-[#fff] h-36 w-36 flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <MdTour className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></MdTour>
                        <p className='font-bold text-xl '>City Tours</p>
                        <p className='text-[#8d989e]'>10 Tours +</p>
                    </div>
                </div>
                <div className='bg-[#fff] h-36 w-36 flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <MdTour className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></MdTour>
                        <p className='font-bold text-xl '>City Tours</p>
                        <p className='text-[#8d989e]'>10 Tours +</p>
                    </div>
                </div>
                <div className='bg-[#fff] h-36 w-36 flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <MdTour className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></MdTour>
                        <p className='font-bold text-xl '>City Tours</p>
                        <p className='text-[#8d989e]'>10 Tours +</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BrowsByCategory;