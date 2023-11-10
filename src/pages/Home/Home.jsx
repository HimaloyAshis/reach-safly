import React from 'react';
import BrowsByCategory from '../BrowsByCategory/BrowsByCategory';
import "../Home/Home.css"


const Home = () => {
    return (
        <div className=''>
            <div className=' bg-[#1746A2] py-6 px-4'>
                <div className='md:flex justify-between items-center'>
                    <div className=' text-[#] w-2/6'>
                        <p className=' font-bold  text-[#F4CE14] text-3xl p '>Explore the </p>
                        <p className=' font-bold  text-[#F5F7F8] text-3xl p'>Travel & </p>
                        <p className=' font-bold  text-[#F5F7F8] text-3xl p'>Adventure</p>
                        <p className='  text-[#949ea3] text-xl p'>Find awesome hotel, car and activities in london </p>
                    </div>
                    <div className='md:flex justify-center pt-10 gap-8 '>
                        <img className='w-80 h-80' src="https://img.freepik.com/free-photo/tourist-sitting-phu-sub-lek-viewpoint-sunset-lopburi-thailand_335224-1390.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.1842592228.1683275805&semt=ais" alt="" />
                        <img className='w-80' src="https://img.freepik.com/free-photo/traveler-girl-searching-right-direction-map_1150-45010.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.1842592228.1683275805&semt=ais" alt="" />
                    </div>
                </div>
                <div className='md:flex gap-8 rounded-md bg-[#F5F7F8] md:w-3/3 justify-center items-center p-4' style={{position:'absolute', top:'470px'}}>
                    <div className='flex flex-col  w-48'>
                        <label htmlFor="Destination " className='text-black rounded'>Destination</label>
                        <input type="text" name="" placeholder='Where to go' className='text-[#F5F7F8] rounded p-1 ' id="" />
                    </div>
                    <div className='flex flex-col  w-48'>
                        <label htmlFor="Destination " className='tt-black rounded'>Destination</label>
                        <input type="text" name="" placeholder='Where to go' className='text-[#F5F7F8] rounded p-1 ' id="" />
                    </div>
                    <div className='flex flex-col  w-48'>
                        <label htmlFor="Destination " className='text-black rounded'>Destination</label>
                        <input type="text" name="" placeholder='Where to go' className='text-[#F5F7F8] rounded p-1 ' id="" />
                    </div>
                    <div className='flex flex-col  w-48'>
                        <label htmlFor="Destination " className='text-black rounded'>Destination</label>
                        <input type="text" name="" placeholder='Where to go' className='text-[#F5F7F8] rounded p-1 ' id="" />
                    </div>
                    <button type='submit' className='bg-[#FF9209] text-white py-1 px-3 rounded'>Search</button>
                </div>
            </div>
            <BrowsByCategory></BrowsByCategory>
        </div>
    );
};

export default Home;