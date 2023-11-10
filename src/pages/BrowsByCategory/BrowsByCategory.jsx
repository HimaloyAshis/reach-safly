import React from 'react';
import { MdOutlineTour, MdTour } from "react-icons/md";
import {  TbBeachOff, TbSailboat2 } from "react-icons/tb";
import {  SiYourtraveldottv } from "react-icons/si";
import {  IoFastFoodOutline } from "react-icons/io5";
import {  GiHiking } from "react-icons/gi";

const BrowsByCategory = () => {
    return (
        <div className=' bg-[#e2e7ea] py-16 '>
            <div className='flex items-center justify-center'>
                <div>
                    <h1 className='font-bold text-xl '>Brows By Category</h1>
                    <p className='font-bold  text-3xl '>Pick a tour type</p>
                </div>
            </div>
            <div className='md:flex gap-20 pt-10 sm:gap-y-6  justify-center items-center'>
                <div className='bg-[#fff] h-36 w-36 flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <MdOutlineTour className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></MdOutlineTour>
                        <p className='font-bold text-xl '>City Tours</p>
                        <p className='text-[#8d989e]'>10 Tours +</p>
                    </div>
                </div>
                <div className='bg-[#fff] h-36 w-36 flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <TbBeachOff className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></TbBeachOff>
                        <p className='font-bold text-xl '>Beaches Tours</p>
                        <p className='text-[#8d989e]'>10 Tours +</p>
                    </div>
                </div>
                <div className='bg-[#fff] h-36 w-36 flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <TbSailboat2 className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></TbSailboat2>
                        <p className='font-bold text-xl '>Boat Tours</p>
                        <p className='text-[#8d989e]'>10 Tours +</p>
                    </div>
                </div>
                <div className='bg-[#fff] h-36 w-36 flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <SiYourtraveldottv className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></SiYourtraveldottv>
                        <p className='font-bold text-xl '>Adventure Tours</p>
                        <p className='text-[#8d989e]'>10 Tours +</p>
                    </div>
                </div>
                <div className='bg-[#fff] h-36 w-36 flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <IoFastFoodOutline className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></IoFastFoodOutline>
                        <p className='font-bold text-xl '>Food Tours</p>
                        <p className='text-[#8d989e]'>10 Tours +</p>
                    </div>
                </div>
                <div className='bg-[#fff] h-36 w-36 flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <GiHiking className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></GiHiking>
                        <p className='font-bold text-xl '>City Tours</p>
                        <p className='text-[#8d989e]'>10 Tours +</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BrowsByCategory;