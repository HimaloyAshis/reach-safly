import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Destination/Destination.css'

const Destination = () => {
    return (
        <div className='mt-16 ' >
            <p className='font-bold text-2xl text-[#164863] '>Destination</p>
            <p className='font-bold text-2xl pb-6'>Top Destinations</p>
            <Carousel>
                <div className='py-2 '>
                    <img className='hei'  src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <p className=' font-bold text-2xl flex flex-row justify-start '>United Kingdom</p>
                    <p className=' font-bold text-2xl flex flex-row justify-start'>123,343 traveler</p>

                </div>
                <div className='py-2'>
                    <img className='hei'  src="https://images.pexels.com/photos/205001/pexels-photo-205001.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <p className=' font-bold text-2xl flex flex-row justify-start '>Switzerland</p>
                    <p className=' font-bold text-2xl flex flex-row justify-start'>123,343 traveler</p>

                </div>
                <div className='py-2'>
                    <img className='hei'  src="https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <p className=' font-bold text-2xl flex flex-row justify-start '>Turkey</p>
                    <p className=' font-bold text-2xl flex flex-row justify-start'>123,343 traveler</p>

                </div>
            </Carousel>
        </div>
    );
};

export default Destination;