import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Destination/Destination.css'

const Destination = () => {
    return (
        <div className='mt-16 ' >
            <p className='font-bold text-2xl'>Destination</p>
            <p className='font-bold text-2xl pb-6'>Top Destinations</p>
            <Carousel>
                <div>
                    <img className=''  src="https://images.pexels.com/photos/18969427/pexels-photo-18969427/free-photo-of-forth-bridge-in-scotland.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <p className=' font-bold '>United Kingdom</p>
                    <p className=' font-bold '>123,343 traveler</p>

                </div>
                <div>
                    <img className=''  src="https://images.pexels.com/photos/18969427/pexels-photo-18969427/free-photo-of-forth-bridge-in-scotland.jpeg?auto=compress&cs=tinysrgb&w=600" />

                </div>
                <div>
                    <img className=''  src="https://images.pexels.com/photos/18969427/pexels-photo-18969427/free-photo-of-forth-bridge-in-scotland.jpeg?auto=compress&cs=tinysrgb&w=600" />

                </div>
            </Carousel>
        </div>
    );
};

export default Destination;