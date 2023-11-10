import React from 'react';
import { MdOutlineTour, MdTour } from "react-icons/md";
import { TbBeachOff, TbSailboat2 } from "react-icons/tb";
import { SiYourtraveldottv } from "react-icons/si";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiHiking } from "react-icons/gi";

const BrowsByCategory = () => {


    return (
        <div className=' bg-[#e2e7ea] py-16 '>
            <div className='flex items-center justify-center'>
                <div>
                    <h1 className='font-bold text-xl '>Brows By Category</h1>
                    <p className='font-bold  text-3xl '>Pick a tour type</p>
                </div>
            </div>
            {/*  */}
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
                    <div className='flex flex-col items-center '>
                        <SiYourtraveldottv className='h-14 flex justify-center items-center w-14 rounded-full p-1 bg-[#F4CE14] '></SiYourtraveldottv>
                        <p className='font-bold text-xl '>Adventure</p>
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

            <div className='pt-16 md:flex justify-center items-center gap-20'>
                <div className='  relative'>
                    <img className='w-96 h-80 pb-16  -top-4 pl-8 bg-[#1746A2]' src="https://img.freepik.com/free-photo/traveler-man-has-walk-with-backpack-carries-necessary-things-trip-looks-through-binoculars-has-glad-look-wears-casual-clothes_273609-33657.jpg?w=900&t=st=1699600518~exp=1699601118~hmac=5d3fb6bfb366e5601bdb6851889cf8fa799b1de31ba9e94c1eb75eae314f854e" title='guidance counselor' alt="guidance counselor" />
                    <p className='font-bold text-2xl fonts absolute top-64 pl-8 text-white'>10 years experiences</p>
                </div>
                <div className='w-96'>
                    <p className='text-xl font-bold '>Why Choose us</p>
                    <p className='text-3xl font-bold '>Plan your trip</p>
                    <p className='text-3xl font-bold '>With Reach Safely</p>
                    <p className=' text-[#8d989e]'>Holisticly optimize proactive strategic theme areas rather than effective manufactured products create. </p>
                </div>
            </div>

        </div>
    );
};

export default BrowsByCategory;