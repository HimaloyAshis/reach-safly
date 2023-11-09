import React from 'react';

const Home = () => {
    return (
        <div className=''>
            <div className=' bg-[#1746A2] py-6 px-6' style={{width:''}}>
                <div className='md:flex justify-between items-center'>
                    <div className=' text-[#] '>
                        <p className=' text-[#F4CE14] text-2xl p '>Explore the </p>
                        <p className=' text-[#F5F7F8] text-2xl p'>Travel and Adventure</p>
                        <p className=' text-[#F5F7F8] text-2xl p'>Find awesome hotel, car and activities in london </p>
                    </div>
                    <div className='md:flex justify-center items-center'>
                        <img className='w-80 h-80' src="https://img.freepik.com/free-photo/woman-hand-holding-camera-standing-top-rock-nature-travel-concept_335224-887.jpg?w=900&t=st=1699552162~exp=1699552762~hmac=7ad333c91b316db014d61a35560af665d8f15e4d6c0011743d243ee60206e7c4" alt="" />
                        <img src="https://img.freepik.com/free-photo/traveler-girl-searching-right-direction-map_1150-45010.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.1842592228.1683275805&semt=ais" alt="" />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Home;